import { resourceSnapshots } from './data/resourceSnapshots'
import './App.css'

function App() {
  const sample = resourceSnapshots[0]

  return (
    <main className="dashboard">
      <header>
        <p className="eyebrow">Fund Portfolio Dashboard</p>
        <h1>Resource snapshots</h1>
        <p>Explore simulated infrastructure resources across three portfolios.</p>
      </header>

      <section className="summary" aria-label="Dataset summary">
        <p>Loaded snapshots</p>
        <strong>{resourceSnapshots.length}</strong>
        <span>Demo data · CPU, GPU and storage resources</span>
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
  )
}

export default App
