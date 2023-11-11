import UserView from "./UserView";

export default function Dashboard() {
  //fetch user, user role to render the right dashboard
  const role = "regular"; // obtain from store i.e user.role

  if (role === "regular") return <UserView />;

  //admin
  //manager

  return (
    <div className="container" style={{ height: "500px", marginTop: "100px" }}>
      Hello Dashboard
    </div>
  );
}
