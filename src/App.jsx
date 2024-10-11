import { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Komponenter
import Navbar from "./components/Navbar";
import CountryCard, { allCountrysLoader } from "./components/CountryCard";

//Pages
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

//layout
import RootLayout from "./layouts/RootLayout";

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage />} loader={allCountrysLoader} />
    <Route path=":id" element={<CountryPage />}  />
  </Route>
);
const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
