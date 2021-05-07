import React from "react";
import "./Slider.scss";
import banner01 from "../../assets/banner_1.png";
import banner02 from "../../assets/banner_2.png";
import banner03 from "../../assets/banner_3.png";

const Slider = () => {
  return (
    <>
      <section class="hero">
        <div class="glide glide1" id="glide1">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides glide__hero">
              <li class="glide__slide">
                <div class="banner">
                  <div class="banner-content">
                    <span>Laptop Cinic products</span>
                    <h1>NEW AND USED LAPTOPS FOR YOU</h1>
                    <h3>
                      We have the best quality picks for specifically for you
                    </h3>
                    <div class="buttons-group">
                      <button>shop New</button>
                      <button>shop Used</button>
                    </div>
                  </div>
                  <img className="special_01" src={banner01} alt="" />
                </div>
              </li>

              <li class="glide__slide">
                <div class="banner banner1">
                  <div class="banner-content">
                    <span>Laptop Cinic products</span>
                    <h1>NEW AND USED LAPTOPS FOR YOU</h1>
                    <h3>
                      We have the best quality picks for specifically for you
                    </h3>
                    <div class="buttons-group">
                      <button>shop New</button>
                      <button>shop Used</button>
                    </div>
                  </div>
                  <img className="special_02" src={banner02} alt="" />
                </div>
              </li>

              <li class="glide__slide">
                <div class="banner">
                  <div class="banner-content">
                    <span>New Inspiration 2020</span>
                    <h1>CLOTHING MADE FOR YOU!</h1>
                    <h3>Trending from men and women style collection</h3>
                    <div class="buttons-group">
                      <button>shop women's</button>
                      <button>shop men's</button>
                    </div>
                  </div>
                  <img className="special_03" src={banner03} alt="" />
                </div>
              </li>
            </ul>
          </div>

          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <i class="fas fa-arrow-left"></i>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
