import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes"

export default [
  layout("routes/layouts/RootLayout.tsx", [
    index("routes/pages/Login.tsx"),
    layout("routes/layouts/AuthLayout.tsx", [
      route("browse/:genre?", "routes/pages/Browse.tsx", [
        // route("series/:id?", "routes/pages/Series.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig
