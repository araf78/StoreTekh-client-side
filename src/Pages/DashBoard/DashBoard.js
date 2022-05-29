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
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-emerald-700 mt-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                 {
                     !admin && <>
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addreview">Add Reviews</Link></li>
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                     </>
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