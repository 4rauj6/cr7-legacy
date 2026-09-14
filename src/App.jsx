import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
