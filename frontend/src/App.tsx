import type { ResourceSnapshot } from "./data/resourceSnapshots";
import { isResourceSnapshot } from "./isResourceSnapshot";
import ResourceTable from "./resourceTable";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const pageTitle = "Fund Portfolio Dashboard";

  const [apiTotal, setApiTotal] = useState<number | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [visibleSnapshots, setVisibleSnapshots] = useState<ResourceSnapshot[]>(
    [],
  );

  const [selectedType, setSelectedType] = useState("all");
  const [sortDirec, setSortDirec] = useState("desc");
  const [curPage, setCurPage] = useState(1);

  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil((apiTotal ?? 0) / pageSize));
  const sample = visibleSnapshots[0];

  useEffect(() => {
    let active = true;

    async function loadPositions() {
      setApiTotal(null);
      setLoadError(null);
      setVisibleSnapshots([]);
      const params = new URLSearchParams({
        page: String(curPage),
        page_size: String(pageSize),
        sort_order: sortDirec,
      });

      if (selectedType !== "all") {
        params.set("resource_type", selectedType);
      }

      const response = await fetch(
        `http://127.0.0.1:8000/positions?${params}`,
      ).catch((error: unknown) => {
        if (!(error instanceof TypeError)) throw error;
        if (active)
          setLoadError(
            "Could not connect to the API. Check the backend service.",
          );
        return null;
      });

      if (!active || response === null) return;

      if (!response.ok) {
        setLoadError(`Could not load records. HTTP status: ${response.status}`);
        return;
      }

      const data: unknown = await response.json().catch((error: unknown) => {
        if (!(error instanceof SyntaxError || error instanceof TypeError)) {
          throw error;
        }
        if (active) {
          setLoadError("Could not read the API response.");
        }
        return undefined;
      });

      if (!active || data === undefined) return;

      if (
        typeof data !== "object" ||
        data === null ||
        !("total" in data) ||
        typeof data.total !== "number" ||
        !Number.isSafeInteger(data.total) ||
        data.total < 0 ||
        !("items" in data) ||
        !Array.isArray(data.items) ||
        !data.items.every(isResourceSnapshot) ||
        data.items.length > pageSize ||
        data.items.length > data.total
      ) {
        setLoadError("The API returned invalid snapshot data.");
        return;
      }

      setApiTotal(data.total);
      setVisibleSnapshots(data.items);
    }

    void loadPositions();

    return () => {
      active = false;
    };
  }, [selectedType, curPage, pageSize, sortDirec]);

  return (
    <main className="dashboard">
      <header>
        <p className="eyebrow">Fund Portfolio Dashboard</p>
        <h1>{pageTitle}</h1>
        <p>
          Explore simulated infrastructure resources across three portfolios.
        </p>
      </header>

      <section className="summary" aria-label="Dataset summary">
        <p>Matching snapshots</p>
        <strong>
          {apiTotal ?? (loadError ? "Unavailable" : "Loading...")}
        </strong>
        {loadError && <p role="alert">{loadError}</p>}
        <span>Demo data · CPU, GPU and storage resources</span>
      </section>

      <section>
        <h2>Resources List</h2>
        <label htmlFor="resource-type">Filter by resource type:</label>
        <select
          id="resource-type"
          value={selectedType}
          onChange={(event) => {
            setSelectedType(event.target.value);
            setCurPage(1);
          }}
        >
          <option value="all">All</option>
          <option value="cpu">CPU</option>
          <option value="gpu">GPU</option>
          <option value="storage">Storage</option>
        </select>
        <label htmlFor="sort-direction">Sort by utilization:</label>
        <select
          id="sort-direction"
          value={sortDirec}
          onChange={(event) => {
            setSortDirec(event.target.value);
            setCurPage(1);
          }}
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>

        <p>Total records: {apiTotal ?? "—"}</p>
        {apiTotal === 0 && <p>No matching snapshots.</p>}

        <div className="table-container">
          <ResourceTable snapshots={visibleSnapshots} />
        </div>

        <div>
          <button
            disabled={apiTotal === null || curPage <= 1}
            onClick={() => setCurPage(curPage - 1)}
          >
            Previous
          </button>

          <span>
            {apiTotal === null
              ? loadError
                ? "Unavailable"
                : "Loading..."
              : `Page ${curPage} of ${pageCount}`}
          </span>

          <button
            disabled={apiTotal === null || curPage >= pageCount}
            onClick={() => setCurPage(curPage + 1)}
          >
            Next
          </button>
        </div>
      </section>

      {sample && (
        <section className="sample" aria-labelledby="sample-heading">
          <h2 id="sample-heading">Sample record</h2>
          <dl>
            <dt>Portfolio</dt>
            <dd>{sample.portfolio_name}</dd>
            <dt>Resource</dt>
            <dd>{sample.resource_key}</dd>
            <dt>Type</dt>
            <dd>{sample.resource_type}</dd>
            <dt>Quantity</dt>
            <dd>{sample.quantity}</dd>
            <dt>Utilization</dt>
            <dd>{sample.utilization_pct}%</dd>
            <dt>Observed at</dt>
            <dd>{sample.observed_at}</dd>
          </dl>
        </section>
      )}
    </main>
  );
}

export default App;
