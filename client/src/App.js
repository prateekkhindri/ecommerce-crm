import "./App.css";
import Login from "./pages/login-registration/Login";
import Registration from "./pages/login-registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EmailVerification from "./pages/login-registration/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import PaymentMethod from "./pages/payment-method/PaymentMethod";
import Users from "./pages/users/Users";
import Orders from "./pages/orders/Orders";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import Settings from "./pages/settings/Settings";
import ResetPassword from "./pages/reset-password/ResetPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
          <Route path="/password-reset" element={<ResetPassword />} />

          {/* Private routes todo */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
