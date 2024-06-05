import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Error from "./404error";
import Desc from "./assets/Components/Product-desc";
import Login from "./assets/Components/Login";
import PrivateRouters from "./assets/Components/PrivateRouters";
import Cart from "./assets/Components/Cart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouters>
              <App />
            </PrivateRouters>
          }
        ></Route>
        <Route path="/product/:id" element={<Desc />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
