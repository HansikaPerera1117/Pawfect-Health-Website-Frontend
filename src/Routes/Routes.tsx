import { lazy } from "react";

const Routes = [
  {
    path: "/not-found",
    component: lazy(() => import("../pages/NotFoundPage")),
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/LoginPage")),
  },
  {
    path: "/sign-up",
    component: lazy(() => import("../pages/SignUpPage")),
  },
];

export default Routes;
