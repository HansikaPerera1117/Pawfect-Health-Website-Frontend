import { lazy } from "react";

const Routes = [
  {
    path: "/not-found",
    component: lazy(() => import("../pages/NotFoundPage")),
  },

  // {
  //   path: "/login",
  //   component: lazy(() => import("../pages/HostLoginPage")),
  // },
  // {
  //   path: "/sign-up",
  //   component: lazy(() => import("../pages/HostSignUpPage")),
  // },
];

export default Routes;
