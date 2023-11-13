import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  console.log("=== is logged in ====", isLoggedIn);

  if (!isLoggedIn()) return <Navigate to={"/login"} />;

  return <Outlet />;
}
