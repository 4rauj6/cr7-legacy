import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import "./index.css";
import Error404 from "./utilities/404Error";
import BiografyPage from "./pages/BiografyPage";

function App() {
  const basename = import.meta.env.DEV ? "" : "/cr7-legacy";
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/404" element={<Error404 />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/biografy" element={<BiografyPage />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
