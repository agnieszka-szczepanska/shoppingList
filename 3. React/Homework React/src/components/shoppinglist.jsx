import React from "react";

function ShoppingList(props) {
  const removeTask = (id) => {
    props.setProducts(props.products.filter((product) => product.id !== id));
  };

  const scratchProduct = (product) => {
    product.isCompleted = !product.isCompleted;
    props.setProducts([...props.products]);
  };

  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <input
            type="checkbox"
            checked={product.isCompleted}
            onChange={() => scratchProduct(product)}
          />
          <button onClick={() => removeTask(product.id)}>Delete</button>
          <div
            style={{
              textDecoration: product.isCompleted ? "line-through" : "none",
            }}
          >
            {product.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
