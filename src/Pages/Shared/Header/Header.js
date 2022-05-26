import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
    const menuItems =
     <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">purchase</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/myorders">my orders</Link></li>
        {user?.uid ? (
          <button
            onClick={() => signOut(auth)}
          >
            Sign Up
          </button>
        ) : 
          <li><Link className='flex justify-items-center' to="/login">Login</Link></li>
        }
    </>
    return (
        <div class="navbar  bg-neutral text-white ">
  <div class="navbar-start mx-12">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        
        {menuItems}
        
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl ">StoreTekh</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      
        {menuItems}

    </ul>
  </div>
</div>
    );
};

export default Header;