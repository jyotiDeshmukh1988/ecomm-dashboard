import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import NoPage from "./components/NoPage";
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<Protected/>}>
            <Route path="updateproduct" element={<UpdateProduct />} />
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
