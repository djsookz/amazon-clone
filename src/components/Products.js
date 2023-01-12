import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const Products = () => {
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const results = await data.json();
    setProductId(results);
    console.log(results);
  };

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="products">
      {productId.slice(0, 4).map((product) => {
        return (
          <div className="products__container">
            <p className="product__category">{product.category}</p>
            <img className="product__image" src={product.image} alt="product" />
            <h4 className="product__title">{product.title}</h4>
            <div>
              {Array(Math.floor(product.rating.rate))
                .fill()
                .map((_) => (
                  <AiFillStar className="product__star" />
                ))}
            </div>

            <p className="product__description">{product.description}</p>
            <div className="product__price">BGN {product.price}</div>

            {Array(Math.floor(hasPrime))
              .fill()
              .map((_) => (
                <div className="product__prime">
                  <img
                    className="product__prime__image"
                    src="https://links.papareact.com/fdw"
                  />
                  <p className="product__prime__text">Free Next-day Delivery</p>
                </div>
              ))}

            <button className="product__button">Add to Basket</button>
          </div>
        );
      })}
      <img
        className="home__image__banner2"
        src="https://links.papareact.com/dyz"
        alt="banner2"
      />
      <div className="products__section2">
        {productId.slice(4, 5).map((product) => {
          return (
            <div className="products__container">
              <p className="product__category">{product.category}</p>
              <img
                className="product__image"
                src={product.image}
                alt="product"
              />
              <h4 className="product__title">{product.title}</h4>
              <div>
                {Array(Math.floor(product.rating.rate))
                  .fill()
                  .map((_) => (
                    <AiFillStar className="product__star" />
                  ))}
              </div>

              <p className="product__description">{product.description}</p>
              <div className="product__price">BGN {product.price}</div>

              {Array(Math.floor(hasPrime))
                .fill()
                .map((_) => (
                  <div className="product__prime">
                    <img
                      className="product__prime__image"
                      src="https://links.papareact.com/fdw"
                    />
                    <p className="product__prime__text">
                      Free Next-day Delivery
                    </p>
                  </div>
                ))}

              <button className="product__button">Add to Basket</button>
            </div>
          );
        })}
      </div>
      {productId.slice(5, productId.length).map((product) => {
        return (
          <div className="products__container">
            <p className="product__category">{product.category}</p>
            <img className="product__image" src={product.image} alt="product" />
            <h4 className="product__title">{product.title}</h4>
            <div>
              {Array(Math.floor(product.rating.rate))
                .fill()
                .map((_) => (
                  <AiFillStar className="product__star" />
                ))}
            </div>

            <p className="product__description">{product.description}</p>
            <div className="product__price">BGN {product.price}</div>

            {Array(Math.floor(hasPrime))
              .fill()
              .map((_) => (
                <div className="product__prime">
                  <img
                    className="product__prime__image"
                    src="https://links.papareact.com/fdw"
                  />
                  <p className="product__prime__text">Free Next-day Delivery</p>
                </div>
              ))}

            <button className="product__button">Add to Basket</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
