import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Error from "./404error";
import Desc from "./assets/Components/Product-desc";
import Login from "./assets/Components/Login";
import PrivateRouters from "./assets/Components/PrivateRouters";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/product/:id" element={<Desc />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<PrivateRouters />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
