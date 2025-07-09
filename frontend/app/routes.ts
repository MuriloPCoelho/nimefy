import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/RootLayout.tsx", [
    index("routes/pages/Login.tsx"),
    layout("routes/layouts/AuthLayout.tsx", [
      route("browse", "routes/pages/Browse.tsx", [
        route("genre/:id", "routes/pages/Genre.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
