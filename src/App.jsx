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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
