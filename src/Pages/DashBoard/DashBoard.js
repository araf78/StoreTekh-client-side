import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
// import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const admin = false;
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-emerald-700 mt-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                 {
                    
                 }
                    { admin && <>
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addtool">Add a Tool</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/managetools">Manage Tools</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;