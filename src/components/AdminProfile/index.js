import React from "react";
import "./styles.scss";
import img1 from "../../assets/user2.png";

const AdminProfile = () => {
  return (
    <div className="admin-profile">
      <h2>My Profile</h2>
      <div className="image">
        <img src={img1} alt="" />
      </div>
      <div className="info">
        <div className="name">
          <h3>Ifedayo Agboola</h3> <button>Edit profile</button>
        </div>
        <p>Bitshub IT Solutions</p>
        <p>18, Oremeji Street,Computer Village, UBA, Ikeja Lagos </p>
        <p>ifedayoagboola19@gmail.com</p>
        <p>08103431851</p>
      </div>
    </div>
  );
};

export default AdminProfile;
