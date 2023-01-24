import "./App.css";
import ShoppingList from "./components/ShoppingList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  return (
    <div className="App">
      <ShoppingItem />
    </div>
  );
}

export default App;
