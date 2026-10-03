# Fund Portfolio Dashboard

A personal full-stack learning project using simulated CPU, GPU and storage resource snapshots. All records are synthetic infrastructure data.

## Progress

The initial React and TypeScript scaffold displays the number of snapshots and one sample record. Filtering, sorting, pagination, FastAPI, PostgreSQL, file imports and access control are planned learning tasks.

## Run the frontend

From the repository root, with Node.js 22.23.0 and npm 11.19.0 or a compatible supported environment:

```sh
cd frontend
npm ci
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite.

## Check the frontend

Run these commands inside `frontend`:

```sh
npm run build
npm run lint
```

The fixture contains 30 snapshots across three portfolios and two observation times. The app currently reads it directly from a local TypeScript module.
