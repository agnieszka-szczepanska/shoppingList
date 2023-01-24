import React from "react";
import ShoppingList from "./ShoppingList";
import { useState } from "react";

function ShoppingProductToAdd() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([
      ...products,
      { name: inputValue, id: products.length, isCompleted: false },
    ]);
    setInputValue("");
  };

  return (
    <>
      <h1 className="heading">Shopping list:</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add product"
          value={inputValue}
        />
        <button className="btn" onClick={handleSubmit}>
          Add product
        </button>
      </form>
      <ShoppingList
        products={products}
        setProducts={setProducts}
      ></ShoppingList>
    </>
  );
}

export default ShoppingProductToAdd;
