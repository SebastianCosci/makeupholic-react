import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";
import Bases from "./components/Bases.js";
import Labiales from "./components/Labiales.js";
import ProductDetail from "./components/productdetail.js"; // Importa 


function App() {
  // Estado del carrito
  const [cart, setCart] = useState([]);

  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
          <Routes>
            <Route path="/" exact element={<ItemListContainer/>} />
            <Route path="/bases" element={<Bases/>} />
            <Route path="/labiales" element={<Labiales/>} />
            <Route path="/:categoryId/:productName" element={<ProductDetail />} /> {/* Ruta para las páginas de detalle */}
          </Routes>
      </Router>
    </div>
  );
}



export default App;
