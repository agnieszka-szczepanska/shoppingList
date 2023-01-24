import React from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingList from "./ShoppingList";
import { useState } from "react";

function ShoppingItem() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([
      ...products,
      { name: inputValue, id: uuidv4(), isCompleted: false },
    ]);
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add product"
          value={inputValue}
        />
        <button onClick={handleSubmit}>Add product</button>
      </form>
      <ShoppingList
        setInputValue={setInputValue}
        inputValue={inputValue}
        products={products}
        setProducts={setProducts}
      ></ShoppingList>
    </>
  );
}

export default ShoppingItem;
