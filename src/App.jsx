import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CareerDetails from "./pages/CareerDetails";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/career-details" element={<CareerDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
