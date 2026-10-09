CREATE TABLE portfolios (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(64) NOT NULL UNIQUE
);

CREATE TABLE positions (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    portfolio_id INTEGER NOT NULL REFERENCES portfolios(id),
    resource_key VARCHAR(64) NOT NULL CHECK (length(trim(resource_key)) > 0),
    resource_type VARCHAR(7) NOT NULL CHECK (resource_type IN ('cpu', 'gpu', 'storage')),
    quantity INTEGER NOT NULL CHECK (quantity >= 0),
    utilization_pct NUMERIC(5, 2) NOT NULL CHECK (utilization_pct BETWEEN 0 AND 100),
    observed_at TIMESTAMPTZ NOT NULL,
    UNIQUE (portfolio_id, resource_key, observed_at)
);
