import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import CareerDetails from "./pages/CareerDetails";

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
