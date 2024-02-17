import React, { useState } from "react";
import "./Hero.scss";
import Mebel_1 from "../Img/mebel_1.svg"
import Mebel_2 from "../Img/mebel_2.svg"
import Mebel_3 from "../Img/mebel_3.svg"
import F from "../Img/f.svg"
import I from "../Img/instagram.svg"
import T from "../Img/twitter.svg"

const mebels = [
  {
    id: 1,
    name: "Comfort Launge Chairs",
    thumbnail: Mebel_1,
    fullImage: Mebel_1,
  },
  {
    id: 2,
    name: "Comfort Launge Chairs",
    thumbnail: Mebel_2,
    fullImage: Mebel_2,
  },
  {
    id: 3,
    name: "Comfort Launge Chairs",
    thumbnail: Mebel_3,
    fullImage: Mebel_3,
  },
];
function Hero() {
  const [selectedMebel, setSelectedMebel] = useState(Mebel_1);

  const selectMebel = (mebel) => {
    setSelectedMebel(mebel);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="websites">
            <img src={F} alt="logo" width={11} height={23} style={{cursor: "pointer"}}/>
            <img src={I} alt="logo" width={17} height={16} style={{cursor: "pointer"}}/>
            <img src={T} alt="logo" width={19} height={15} style={{cursor: "pointer"}}/>
          </div>
          <div className="hero__flex">
            <p className="hero__foiz">100% Quality Guranty</p>
            <h1 className="hero__text">
              Find Classy Furnitures For Your Comfort
            </h1>
            <p className="hero__text-p">
              All the Lorem Ipsum generators on the Internet tend to predefined
              chunks this the first true generator on the Internet.{" "}
            </p>
            <p className="hero__foiz-2">Start From</p>
            <h1 className="hero__money">102.99 USD</h1>
            <button className="hero__btn">Buy Now</button>
          </div>
          <div className="color">
            <p className="color__text">Popular shades</p>
            <span className="color__span"></span>
            <span className="color__span-2"></span>
            <span className="color__span-3"></span>
            <span className="color__span-4"></span>
          </div>
          <ul className="qiyin">
            {selectedMebel && (
              <div className="qiyin-image">
                <img
                  className="qiyin__img"
                  src={selectedMebel.fullImage}
                  alt={selectedMebel.name}
                />
              </div>
            )}
            <div className="qiyin__flex">
              {mebels.map((mebel) => (
                <li className="qiyin__item" key={mebel.id}>
                  <img
                    className="qiyin__logo"
                    src={mebel.thumbnail}
                    onClick={() => selectMebel(mebel)}
                    style={{ margin: "10px", cursor: "pointer" }}
                  />
                  <p className="qiyin__text">{mebel.name}</p>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;
