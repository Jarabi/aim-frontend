import { Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import RequisitionView from "./components/RequisitionView";
import NewRequisition from "./components/NewRequisition";
import ViewUser from "./components/ViewUser";
import ViewUsers from "./components/ViewUsers";
import NewUser from "./components/NewUser";
import NewAsset from "./components/NewAsset";
import ViewAssets from "./components/ViewAssets";
import ProtectedRoute from "./components/ProtectedRoute";
import Requisitions from "./components/Requisitions";
import MyRequisitions from "./components/MyRequisitions";
import { useEffect, useState } from 'react';
import { AUTH_TOKEN } from './api/constants';
import ApproveRequisition from "./components/ApproveRequisition";

function App () {
  const [ isLoggedIn, setIsLoggedIn ] = useState( false );
  const checkLoggedInStatus = () => {
    const token = localStorage.getItem( AUTH_TOKEN );
    if ( !token ) setIsLoggedIn( false );
    else setIsLoggedIn( true );
  }

  useEffect( () => {
    checkLoggedInStatus();
  }, [])
  return (
    <>
      <Header isLoggedIn={ isLoggedIn} checkLoggedInStatus={checkLoggedInStatus}/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={ <Login checkLoggedInStatus={ checkLoggedInStatus} />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/requisitionView' element={<RequisitionView />} />
          <Route path='/newRequisition' element={<NewRequisition />} />
          <Route path='/viewUsers' element={<ViewUsers />} />
          <Route path='/viewUser' element={<ViewUser />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/newAsset' element={<NewAsset />} />
          <Route path='/viewAssets' element={<ViewAssets />} />
          <Route path='/requisitions' element={<Requisitions />} />
          <Route path='/myRequisitions' element={<MyRequisitions />} />
          <Route path='/approveRequisition' element={<ApproveRequisition />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
