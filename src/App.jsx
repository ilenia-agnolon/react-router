import "./App.css";

//import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import delle pagine di riferimento
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/prodotti" element={<Prodotti />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
