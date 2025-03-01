import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import EditUser from "./components/EditUser";
import ProductsPage from "./pages/ProductsPage";  // ✅ New Product Page
import ProductDetailPage from "./pages/ProductDetailPage";  // ✅ Product Details Page
import AdminProductForm from "./components/AdminProductForm"; // ✅ Admin Add/Edit Form

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/edit/:id" element={<EditUser />} />

        {/* ✅ Product Routes */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin/products/new" element={<AdminProductForm />} />
        <Route path="/admin/products/edit/:id" element={<AdminProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
