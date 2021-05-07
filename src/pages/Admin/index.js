import React from "react";
import "./styles.scss";
import AdminProfile from "../../components/AdminProfile";
import MyProduct from "../../components/AdminProduct";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <div className="admin-content">
          <AdminProfile />
          <div className="admin-products">
            <div className="admin-header">
              <h2>My Products</h2>
              <Link to="/add_product">
                <i class="fas fa-shopping-basket"></i>
              </Link>
            </div>
            <div className="product-list">
              <MyProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
