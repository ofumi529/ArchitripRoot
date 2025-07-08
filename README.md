# Architectour Planner

Travel route planner focusing on architectural works.

## Features

* Select origin country and architectural works to visit
* Generates optimized travel route (nearest-neighbor heuristic)
* Per-segment transport mode selection (flight / train / bus / car)
* Automatic estimation of distance, time and cost per segment and totals
* Shareable URL to reopen the exact plan
* Responsive UI (Sidebars on desktop, drawer navigation on mobile)
* i18n Japanese / English

## Tech Stack

* React 18 + TypeScript + Vite
* TailwindCSS
* React Leaflet + OpenStreetMap tiles
* i18next
* HeadlessUI & Heroicons (drawers, icons)
* clsx (utility)

## Getting Started (Local Dev)

```bash
# 1. install dependencies
npm install

# 2. run dev server (http://localhost:5173 by default)
npm run dev
```

## Build

```bash
npm run build
```

## Share URL

The travel plan can be shared via the **Copy Share URL** button. The full plan state is Base64-encoded in a `?plan=` query parameter.

## Folder Structure (major files)

```
src/
  components/
    CleanMapView.tsx       – Map + markers / polyline
    TravelPlanPanel.tsx    – Route generation, transport mode, costs
    SelectedList.tsx       – List of chosen works
    ui/                    – Reusable Button / Drawer / Card
  context/                 – Selection context
  utils/                   – Route planner, share URL, transport utils
  data/                    – Country centres, sample data
```

## Contributing
Pull requests are welcome! Feel free to open issues / suggestions.

## License
MIT
