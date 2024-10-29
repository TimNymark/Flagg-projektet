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
import CountryPage, {countryDetailsLoader} from "./pages/CountryPage";

//layout
import RootLayout from "./layouts/RootLayout";




function App() {
const [results, setResults] = useState([])

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<HomePage setResults={setResults} results={results}/>} loader={allCountrysLoader} />
    <Route path="/country/:nameOrCode" loader={countryDetailsLoader} element={<CountryPage />} />
  </Route>
);
const router = createBrowserRouter(routesFromElements);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
