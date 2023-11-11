import React from "react";
import AdminView from "./AdminView";

export default function Dashboard({ id, role }) {
  if (role === "admin") return <AdminView />;

  return <div>Dashboard</div>;
}
