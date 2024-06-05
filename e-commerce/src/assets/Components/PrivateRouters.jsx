import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouters({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  return isAuth ? children : <Navigate to="/login" />;
}
