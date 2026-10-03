import type { ResourceSnapshot } from "./data/resourceSnapshots";

type ResourceTableProps = {
  snapshots: ResourceSnapshot[];
};

function ResourceTable(props: ResourceTableProps) {
  return (
    <table className="resource-table" aria-label="Resource snapshots table">
      <thead>
        <tr>
          <th>Portfolio</th>
          <th>Name</th>
          <th>Type</th>
          <th>Utilization</th>
        </tr>
      </thead>
      <tbody>
        {props.snapshots.map((snapshot) => (
          <tr key={snapshot.id}>
            <td>{snapshot.portfolio_name}</td>
            <td>{snapshot.resource_key}</td>
            <td>{snapshot.resource_type}</td>
            <td>{snapshot.utilization_pct}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResourceTable;
