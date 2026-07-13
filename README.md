MSF Editor is a static Vite + React + TanStack Router SPA.

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build outputs a static `dist/` directory with `index.html` and client assets only.

## Testing

```bash
npm run test
```

## Styling

The app uses Mantine and Tiptap styles imported in `src/styles.css`.

## Routing

This project uses TanStack Router with file-based routing. Add routes in `src/routes`, and use `Link` for SPA navigation.

The root layout lives in `src/routes/__root.tsx` and renders its children through `<Outlet />`.
