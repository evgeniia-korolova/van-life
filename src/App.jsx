import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";

import "../server";
import VanDetails, {
  loader as VanDetailsLoader,
} from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard, {loader as dashboardLoader} from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVansDetails, {
  loader as hostVanDedailsLoader,
} from "./pages/Host/HostVansDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import { requireAuth } from "../utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={VanDetailsLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostVanDedailsLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: import.meta.env.DEV ? "/" : "/van-life",
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
