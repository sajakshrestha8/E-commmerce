import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouters() {
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
