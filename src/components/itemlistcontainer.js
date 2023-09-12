// ItemListContainer.js
import React from "react";
import ProductList from "./Productlist.js";

function ItemListContainer() {
  return (
    <div>
      <h1>Todos los Productos</h1>
      <ProductList category="Todos" /> {/* Pasa la categoría "Todos" como prop */}
    </div>
  );
}

export default ItemListContainer;
