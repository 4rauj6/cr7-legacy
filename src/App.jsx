import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import "./index.css";
import Error404 from "./utilities/404Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" elememt={<Error404 />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
