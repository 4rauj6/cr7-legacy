import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import "./index.css";
import Error404 from "./utilities/404Error";

function App() {
  return (
    <>
      <BrowserRouter basename="/cr7-legacy">
        <Routes>
          <Route path="/404" element={<Error404 />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
