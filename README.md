# QueryPlan

Internal developer tool for parsing, visualizing, and archiving PostgreSQL query execution plans (`EXPLAIN (ANALYZE, FORMAT JSON)`). Built for internal corporate IT teams to share query analysis during code reviews and database tuning.

## Features

- Paste raw PostgreSQL EXPLAIN JSON output directly
- Visual execution tree highlighting Node Type, Total Cost, and Actual Duration
- Shareable permalinks for internal Slack and query review discussions
- History log and basic search across stored execution plans

## Prerequisites

- Node.js 20+
- PostgreSQL 18

## Local Setup

1. Copy environment configuration:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run database migrations / initialization:
   ```bash
   npm run db:migrate
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Screenshots

![QueryPlan Execution Tree Placeholder](docs/screenshots/tree-view.png)

## Build & Deployment

```bash
# Build standard containerized SvelteKit Node adapter release
npm run build
node build
```