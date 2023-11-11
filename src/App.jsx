import { Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import RequisitionView from "./components/RequisitionView";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requisitionView" element={<RequisitionView />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
