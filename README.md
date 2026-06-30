# StreamLine

A full-stack application with a NestJS backend and Next.js frontend.

## Project Structure

```
/
├── backend/          # NestJS API server
│   ├── src/          # Application source code
│   ├── drizzle/      # Database schema & migrations (Drizzle ORM)
│   ├── test/         # E2E tests
│   └── package.json
├── client/           # Next.js frontend
│   ├── src/
│   └── package.json
└── docker-compose.yml  # Shared infrastructure (PostgreSQL)
```

## Getting Started

### Prerequisites

- Node.js (v20+)
- Docker & Docker Compose (for PostgreSQL)

### 1. Start the Database

```bash
docker-compose up -d
```

### 2. Backend Setup

```bash
cd backend
npm install

# Push the schema to the database
npm run db:push

# Start the dev server
npm run start:dev
```

The API will be available at `http://localhost:3000` and Swagger docs at `http://localhost:3000/api/docs`.

#### Database Commands (Drizzle)

| Command | Description |
|---|---|
| `npm run db:generate` | Generate migration files from schema changes |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:push` | Push schema directly to database (dev only) |
| `npm run db:studio` | Open Drizzle Studio (visual DB browser) |

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Tech Stack

- **Backend**: NestJS, Drizzle ORM, PostgreSQL
- **Frontend**: Next.js
- **Database**: PostgreSQL (via Docker)
- **ORM**: Drizzle ORM with Drizzle Studio

## License

UNLICENSED
