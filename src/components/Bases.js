// bases.js
import React from "react";
import ProductList from "./Productlist.js"; // Asegúrate de usar la letra "L" mayúscula en "ProductList"

function Bases() {
  return (
    <div>
      <h1>Página de Bases</h1>
      <ProductList category="Bases" /> {/* Pasa la categoría "Bases" como prop */}
    </div>
  );
}

export default Bases;