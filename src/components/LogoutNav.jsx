import { Link } from "react-router-dom";
import authApi from "../api/auth";
import { MdOutlineLogout } from "react-icons/md";

const LogoutNav = ({ userInfo }) => {
  const logoutHandler = () => {
    authApi.logUserOut();
  };

  return (
    <div
      className='d-flex justify-content-around align-items-center'
      style={{ width: "200px" }}
    >
      <div className='user-badge'>
        <span className='badge text-bg-primary'>{userInfo.email}</span>
      </div>
      <button className='btn btn-outline-danger btn-sm' onClick={logoutHandler}>
        <MdOutlineLogout />
      </button>
    </div>
  );
};

export default LogoutNav;
