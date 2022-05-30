import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
    const menuItems =
     <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/addorder">Add Tool</Link></li>
        <li><Link to="/myportfolio">my portfolio</Link></li>
        <li><Link to="/showmyprofile">My Profile</Link></li>
        {user?.uid ? (
          <button
            onClick={logOut}
          >
          Log Out
          </button>
        ) : 
          <li><Link className='flex justify-items-center' to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar  bg-neutral text-white ">
  <div className="navbar-start mx-12">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        
        {menuItems}
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl ">StoreTekh</a>
  </div>
  <div className="navbar-center hidden lg:flex mr-6">
    <ul className="menu menu-horizontal p-0">
      
        {menuItems}

    </ul>
  </div>
</div>
    );
};

export default Header;