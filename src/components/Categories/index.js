import React from "react";
import "./Categories.scss";
import cat1 from "../../assets/cat1.jpg";
import cat2 from "../../assets/cat2.jpg";
import cat3 from "../../assets/cat3.jpg";

const Categories = () => {
  return (
    <>
      <section class="section category">
        <h2 class="title">Allow your style to match your ambition!</h2>
        <div class="category-center container">
          <div class="category-box">
            <img src={cat1} alt="" />
            <div class="content">
              <h2>Shop for Man</h2>
              <span>155 Products</span>
              <a href="#">shop now</a>
            </div>
          </div>

          <div class="category-box">
            <img src={cat2} alt="" />
            <div class="content">
              <h2>Shop for Woman</h2>
              <span>155 Products</span>
              <a href="#">shop now</a>
            </div>
          </div>

          <div class="category-box">
            <img src={cat3} alt="" />
            <div class="content">
              <h2>Shop for Man and Woman</h2>
              <span>155 Products</span>
              <a href="#">shop now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
