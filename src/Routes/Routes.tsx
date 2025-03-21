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
  {
    path: "/emotion-prediction",
    component: lazy(() => import("../pages/DogEmotionPredictPage")),
  },
  {
    path: "/health-prediction",
    component: lazy(() => import("../pages/CheckDogHealthConditionPage")),
  },
  {
    path: "/health-prediction-result",
    component: lazy(() => import("../pages/DogHealthPredictPage")),
  },
  {
    path: "/nearest-doctor",
    component: lazy(() => import("../pages/FindNearestDoctorPage")),
  },
  {
    path: "/doctor-profile/:doctorId",
    component: lazy(() => import("../pages/DoctorProfilePage")),
  },
  {
    path: "/make-appointment/:doctorId",
    component: lazy(() => import("../pages/MakeDoctorAppointmentPage")),
  },
  {
    path: "/chat",
    component: lazy(() => import("../pages/UserChatPage")),
  },
  {
    path: "/my-profile",
    component: lazy(() => import("../pages/MyProfilePage")),
  },
  {
    path: "/appointments",
    component: lazy(() => import("../pages/ViewDoctorAppointmentsPage")),
  },
  {
    path: "/my-appointments",
    component: lazy(() => import("../pages/ViewUserAppointmentsPage")),
  },
];

export default Routes;
