# Artist Buddy
Easy local-first mobile web app for small artists tracking inventory, conventions and sales. Artist Buddy ia a pure hobby project.

## Problem & goal
This little app should help artists run an artist-alley booth even when convention Wi-Fi is bad or missing: track products, stock, prices, sales, etc. on the phone first, then sync to the cloud when connectivity returns (or just export the data locally). The main goal is to build an offline-first mobile web app that stays usable all day, survives flaky networks, and adds just enough cloud architecture to back up, sync, and deploy safely at hopefully low cost.

## Tech stack
**Frontend**
- React + TypeScript + Vite
- TanStack Router & Query
- shadcn/ui
- Tailwind CSS
- Dexie for IndexedDB?

**Cloud**
- Azure Static Web Apps for frontend hosting (+ built-in auth)
- Azure Functions for data sync
- Azure Blob Storage (JSON)
- GitHub Actions for CI/CD

## Concept
See [FigJam Export](2026-03-concept.png)

## Use cases
Reworking

## Sync/data flow
Later

## Deployment
Later

## Auth
Later
