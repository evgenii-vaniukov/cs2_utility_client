"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grenades from "./pages/grenades";
import GrenadeDetails from "./pages/grenade_details";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Grenades />} />
          <Route path="/grenade_details" element={<GrenadeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
