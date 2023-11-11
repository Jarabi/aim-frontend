import { Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import UserView from "./components/UserView";
import Footer from "./components/Footer";
import RequisitionView from "./components/RequisitionView";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserView />} />
          <Route path="/requisitionView" element={<RequisitionView />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
