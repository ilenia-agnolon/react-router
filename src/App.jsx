import "./App.css";

//import della libreria di routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import delle pagine di riferimento
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
