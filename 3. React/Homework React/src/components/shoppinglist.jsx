import React from "react";

function ShoppingList(props) {
  const removeProduct = (id) => {
    props.setProducts(props.products.filter((product) => product.id !== id));
  };

  const scratchProduct = (product) => {
    product.isCompleted = !product.isCompleted;
    props.setProducts([...props.products]);
  };

  return (
    <div className="shoppingList">
      {props.products.map((product) => (
        <div key={product.id} className="product">
          <input
            type="checkbox"
            checked={product.isCompleted}
            onChange={() => scratchProduct(product)}
          />
          <div
            style={{
              textDecoration: product.isCompleted ? "line-through" : "none",
            }}
          >
            {product.name}
          </div>
          <button onClick={() => removeProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
