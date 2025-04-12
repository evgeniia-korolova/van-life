import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";

import "../server";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/van-life"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            {/* possible but not used way because there is no shared UI*/}
            {/* <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetails />} />
            </Route> */}

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="photos" element={<HostVanPhotos />} />
                <Route path="pricing" element={<HostVanPricing />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
