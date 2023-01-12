import React from "react";

const ProductFeed = ({ productId }) => {
  return (
    <div>
      {productId.map((product) => {
        return (
          <div>
            <p>{product.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFeed;
