// labiales.js
import React from "react";
import ProductList from "./Productlist.js"; // 

function Labiales() {
  return (
    <div>
      <h1>Página de Labiales</h1>
      <ProductList category="Labiales" /> {/* Pasa la categoría "Labiales" como prop */}
    </div>
  );
}

export default Labiales;