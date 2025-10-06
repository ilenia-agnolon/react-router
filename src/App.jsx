import "./App.css";

//import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import delle pagine di riferimento
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<ChiSiamo />} />
          <Route path="/products" element={<Prodotti />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
