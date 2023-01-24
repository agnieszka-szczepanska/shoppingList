import "./App.css";
import ShoppingList from "./components/ShoppingList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([
      ...products,
      { name: inputValue, id: uuidv4(), isCompleted: false },
    ]);
  };

  const removeTask = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const scratchProduct = (product) => {
    product.isCompleted = !product.isCompleted;
    setProducts([...products]);
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add product"
          value={inputValue}
        />
        <button onClick={handleSubmit}>Add product</button>
      </form>

      <div>
        {products.map((product) => (
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
    </div>
  );
}

export default App;
