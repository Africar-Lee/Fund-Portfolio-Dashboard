BEGIN;

INSERT INTO portfolios (name)
VALUES ('Alpha'), ('Beta'), ('Gamma')
ON CONFLICT (name) DO NOTHING;

WITH resource_groups (name, group_number) AS (
    VALUES
        ('Alpha', 1),
        ('Beta', 2),
        ('Gamma', 3)
),
resources (resource_key, resource_type, quantity, resource_number) AS (
    VALUES
        ('cpu-node-01', 'cpu', 8, 0),
        ('gpu-node-01', 'gpu', 4, 1),
        ('storage-node-01', 'storage', 2, 2),
        ('cpu-node-02', 'cpu', 16, 3),
        ('gpu-node-02', 'gpu', 8, 4)
),
moments (observed_at, moment_number) AS (
    VALUES
        (TIMESTAMPTZ '2026-10-03T00:00:00Z', 0),
        (TIMESTAMPTZ '2026-10-03T01:00:00Z', 1)
)
INSERT INTO positions (
    portfolio_id,
    resource_key,
    resource_type,
    quantity,
    utilization_pct,
    observed_at
)
SELECT
    portfolios.id,
    resources.resource_key,
    resources.resource_type,
    resources.quantity,
    25 + (
        resource_groups.group_number * 7
        + resources.resource_number * 11
        + moments.moment_number * 9
    ) % 70,
    moments.observed_at
FROM resource_groups
JOIN portfolios ON portfolios.name = resource_groups.name
CROSS JOIN resources
CROSS JOIN moments
ON CONFLICT (portfolio_id, resource_key, observed_at) DO NOTHING;

COMMIT;