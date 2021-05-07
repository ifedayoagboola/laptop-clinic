import React from "react";
import "./styles.scss";

const AddProject = () => {
  return (
    <div className="container">
      <div className="project">
        <div className="title">
          <h2>Create a new Product</h2>
          <p>
            A project contains all project files, including the revision
            history. Already have a project repository elsewhere?
          </p>
        </div>
        <label>Poject Name:</label>
        <input type="text" />
        <label>Description:</label>
        <input type="text" />
        <label>Project link:</label>
        <input type="text" />
        <select name="" id="">
          <option value="">Select Stack</option>
          <option value="">Javascript</option>
          <option value="">Node JS</option>
          <option value="">React Js</option>
          <option value="">Vue</option>
          <option value="">PHP</option>
          <option value="">Others</option>
        </select>

        <button>Add Product</button>
      </div>
    </div>
  );
};

export default AddProject;
