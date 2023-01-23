import React from "react";
// import ShoppingItem from "./ShoppingItem";
import { useState } from "react";

function ShoppingList() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([...products, { product: inputValue }]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add product</button>
        {/* <p>{inputValue}</p> */}
        {/* <p>{products}</p> */}

        {/* <ShoppingItem products={products}></ShoppingItem> */}
      </form>

      {products.map((product) => (
        <form>
          <input
            type="checkbox"
            key="product.product"
            name={product.product}
            id={products.indexOf(product)}
          ></input>
          <label htmlFor="{product.product}">
            {" "}
            {product.product}
            {/* UDAŁO SIE DOTRZEC DO INDEXU- umieścić w ID -*/}
            {/* {products.indexOf(product)} */}
          </label>
          <button>Delete</button>
        </form>
      ))}
    </>
  );
}

export default ShoppingList;
