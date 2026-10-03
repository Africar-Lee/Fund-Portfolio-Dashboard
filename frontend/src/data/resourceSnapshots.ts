export type ResourceSnapshot = {
  id: number
  portfolio_id: number
  portfolio_name: string
  resource_key: string
  resource_type: 'cpu' | 'gpu' | 'storage'
  quantity: number
  utilization_pct: number
  observed_at: string
}

export const resourceSnapshots: ResourceSnapshot[] = [
  {
    "id": 1,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "cpu-node-01",
    "resource_type": "cpu",
    "quantity": 8,
    "utilization_pct": 32,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 2,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "gpu-node-01",
    "resource_type": "gpu",
    "quantity": 4,
    "utilization_pct": 43,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 3,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "storage-node-01",
    "resource_type": "storage",
    "quantity": 2,
    "utilization_pct": 54,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 4,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "cpu-node-02",
    "resource_type": "cpu",
    "quantity": 16,
    "utilization_pct": 65,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 5,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "gpu-node-02",
    "resource_type": "gpu",
    "quantity": 8,
    "utilization_pct": 76,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 6,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "cpu-node-01",
    "resource_type": "cpu",
    "quantity": 8,
    "utilization_pct": 41,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 7,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "gpu-node-01",
    "resource_type": "gpu",
    "quantity": 4,
    "utilization_pct": 52,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 8,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "storage-node-01",
    "resource_type": "storage",
    "quantity": 2,
    "utilization_pct": 63,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 9,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "cpu-node-02",
    "resource_type": "cpu",
    "quantity": 16,
    "utilization_pct": 74,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 10,
    "portfolio_id": 1,
    "portfolio_name": "Alpha",
    "resource_key": "gpu-node-02",
    "resource_type": "gpu",
    "quantity": 8,
    "utilization_pct": 85,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 11,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "cpu-node-01",
    "resource_type": "cpu",
    "quantity": 8,
    "utilization_pct": 39,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 12,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "gpu-node-01",
    "resource_type": "gpu",
    "quantity": 4,
    "utilization_pct": 50,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 13,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "storage-node-01",
    "resource_type": "storage",
    "quantity": 2,
    "utilization_pct": 61,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 14,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "cpu-node-02",
    "resource_type": "cpu",
    "quantity": 16,
    "utilization_pct": 72,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 15,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "gpu-node-02",
    "resource_type": "gpu",
    "quantity": 8,
    "utilization_pct": 83,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 16,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "cpu-node-01",
    "resource_type": "cpu",
    "quantity": 8,
    "utilization_pct": 48,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 17,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "gpu-node-01",
    "resource_type": "gpu",
    "quantity": 4,
    "utilization_pct": 59,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 18,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "storage-node-01",
    "resource_type": "storage",
    "quantity": 2,
    "utilization_pct": 70,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 19,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "cpu-node-02",
    "resource_type": "cpu",
    "quantity": 16,
    "utilization_pct": 81,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 20,
    "portfolio_id": 2,
    "portfolio_name": "Beta",
    "resource_key": "gpu-node-02",
    "resource_type": "gpu",
    "quantity": 8,
    "utilization_pct": 92,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 21,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "cpu-node-01",
    "resource_type": "cpu",
    "quantity": 8,
    "utilization_pct": 46,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 22,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "gpu-node-01",
    "resource_type": "gpu",
    "quantity": 4,
    "utilization_pct": 57,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 23,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "storage-node-01",
    "resource_type": "storage",
    "quantity": 2,
    "utilization_pct": 68,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 24,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "cpu-node-02",
    "resource_type": "cpu",
    "quantity": 16,
    "utilization_pct": 79,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 25,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "gpu-node-02",
    "resource_type": "gpu",
    "quantity": 8,
    "utilization_pct": 90,
    "observed_at": "2026-10-03T00:00:00Z"
  },
  {
    "id": 26,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "cpu-node-01",
    "resource_type": "cpu",
    "quantity": 8,
    "utilization_pct": 55,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 27,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "gpu-node-01",
    "resource_type": "gpu",
    "quantity": 4,
    "utilization_pct": 66,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 28,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "storage-node-01",
    "resource_type": "storage",
    "quantity": 2,
    "utilization_pct": 77,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 29,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "cpu-node-02",
    "resource_type": "cpu",
    "quantity": 16,
    "utilization_pct": 88,
    "observed_at": "2026-10-03T01:00:00Z"
  },
  {
    "id": 30,
    "portfolio_id": 3,
    "portfolio_name": "Gamma",
    "resource_key": "gpu-node-02",
    "resource_type": "gpu",
    "quantity": 8,
    "utilization_pct": 29,
    "observed_at": "2026-10-03T01:00:00Z"
  }
]
