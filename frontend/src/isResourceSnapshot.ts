import type { ResourceSnapshot } from "./data/resourceSnapshots";

export function isResourceSnapshot(value: unknown): value is ResourceSnapshot {
  if (typeof value !== "object" || value === null) return false;

  const snapshot = value as Record<string, unknown>;

  return (
    typeof snapshot.id === "number" &&
    Number.isSafeInteger(snapshot.id) &&
    snapshot.id > 0 &&
    typeof snapshot.portfolio_id === "number" &&
    Number.isSafeInteger(snapshot.portfolio_id) &&
    snapshot.portfolio_id > 0 &&
    typeof snapshot.portfolio_name === "string" &&
    typeof snapshot.resource_key === "string" &&
    (snapshot.resource_type === "cpu" ||
      snapshot.resource_type === "gpu" ||
      snapshot.resource_type === "storage") &&
    typeof snapshot.quantity === "number" &&
    Number.isSafeInteger(snapshot.quantity) &&
    snapshot.quantity >= 0 &&
    typeof snapshot.utilization_pct === "number" &&
    Number.isFinite(snapshot.utilization_pct) &&
    snapshot.utilization_pct >= 0 &&
    snapshot.utilization_pct <= 100 &&
    typeof snapshot.observed_at === "string" &&
    Number.isFinite(Date.parse(snapshot.observed_at))
  );
}
