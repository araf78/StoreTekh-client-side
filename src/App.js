import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PurchaseTools from "./Pages/Home/PurchaseTools";
import RequireAuth from "./Pages/RequireAuth";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import DetailTool from "./Pages/Home/DetailTool";
import AddTool from "./Pages/Home/AddTool";
import MyProfile from "./Pages/MyProfile";
import MyOrders from "./Pages/DashBoard/MyOrders";
import Dashboard from "./Pages/DashBoard/DashBoard";
import AddReview from "./Pages/DashBoard/AddReview";
import ManageAllOrders from "./Pages/DashBoard/ManageAllOrders";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin";
import ManageTools from "./Pages/DashBoard/ManageTools";
import MyProfileShow from "./Pages/MyProfile/MyProfileShow";

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tools/:id" element={
          <RequireAuth>
            <PurchaseTools></PurchaseTools>
          </RequireAuth>
        }></Route>
        <Route path="/tool/:toolId" element={
          <RequireAuth>
           <DetailTool></DetailTool>
          </RequireAuth>
        }></Route>
        <Route path="/addorder" element={
          <RequireAuth>
           <AddTool></AddTool>
          </RequireAuth>
        }></Route>
        <Route path="showmyprofile" element={<MyProfileShow></MyProfileShow>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          {/* <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
        <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
        
        <Route path="addreview" element={<AddReview></AddReview>}></Route>
        <Route path="manageorders" element={<ManageAllOrders></ManageAllOrders>}></Route>
        <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path="managetools" element={<ManageTools></ManageTools>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
