import { resourceSnapshots } from "./data/resourceSnapshots";
import ResourceTable from "./resourceTable";
import "./App.css";
import { useState } from "react";

function App() {
  const pageTitle = "Fund Portfolio Dashboard";
  const sample = resourceSnapshots[1];

  const [selectedType, setSelectedType] = useState("all");
  const filteredSnapshots = resourceSnapshots.filter(
    (snapshot) =>
      selectedType === "all" || snapshot.resource_type === selectedType,
  );

  const [sortDirec, setSortDirec] = useState("desc");

  const sortedSnapshots = [...filteredSnapshots].sort((fst, snd) =>
    sortDirec === "desc"
      ? snd.utilization_pct - fst.utilization_pct
      : fst.utilization_pct - snd.utilization_pct,
  );

  const [curPage, setCurPage] = useState(1);
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(sortedSnapshots.length / pageSize));
  const startIdx = (curPage - 1) * pageSize;

  const visibleSnapshots = sortedSnapshots.slice(startIdx, startIdx + pageSize);

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
        <p>Loaded snapshots</p>
        <strong>{resourceSnapshots.length}</strong>
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
          onChange={(event) => setSortDirec(event.target.value)}
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>

        <p>Total records: {sortedSnapshots.length}</p>

        <div className="table-container">
          <ResourceTable snapshots={visibleSnapshots} />
        </div>

        <div>
          <button
            disabled={curPage === 1}
            onClick={() => setCurPage(curPage - 1)}
          >
            Previous
          </button>
          <span>
            Page {curPage} of {pageCount}
          </span>
          <button
            disabled={curPage === pageCount}
            onClick={() => setCurPage(curPage + 1)}
          >
            Next
          </button>
        </div>
      </section>

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
    </main>
  );
}

export default App;
