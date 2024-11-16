import { useState } from "react";
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
import CountryPage, { countryDetailsLoader } from "./pages/CountryPage";

//layout
import RootLayout from "./layouts/RootLayout";

function App() {
  const [results, setResults] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkLightMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const routesFromElements = createRoutesFromElements(
    <Route
      path="/"
      element={
        <RootLayout
          isDarkMode={isDarkMode}
          toggleDarkLightMode={toggleDarkLightMode}
        />
      }
    >
      <Route
        index
        element={<HomePage setResults={setResults} results={results} isDarkMode={isDarkMode}/>}
        loader={allCountrysLoader}
      />
      <Route
        path="/country/:code"
        loader={countryDetailsLoader}
        element={<CountryPage isDarkMode={isDarkMode}/>}
      />
      {/* <Route path="*" element={<NotFound />} /> */}
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
