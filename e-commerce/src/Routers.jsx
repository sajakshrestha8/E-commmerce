import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Error from "./404error";
import Desc from "./assets/Components/Product-desc";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/product/:id" element={<Desc />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
