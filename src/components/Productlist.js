import React from "react";
import products from "./ProductsData.js";
import { Link } from "react-router-dom"; // Importa Link

const ProductList = ({ category, categoryId, productoId }) => {
  // Filtra los productos según la categoría, o muestra todos si la categoría es "Todos"
  const filteredProducts = category === "Todos" ? products : products.filter((product) =>
    product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h1 className="title1">Productos ({category})</h1>
      <div className="productos">
        {filteredProducts.map((product, index) => (
          <div className="producto" key={index}>
            {/* Renderiza los productos aquí */}
            <a>
              <div>
                <img className="producto_img" src={product.img} alt='' />
              </div>
            </a>
            <div className="product__footer">
              <h1 className='producttitle'>{product.title}</h1>
              <p className='productp'>{product.category}</p>
              <p className="price">{product.price}</p>
            </div>
            <div className="buttomproduct">
              <div className='buttomproddiv'>
                <button className="btn">
                  Añadir al carrito
                </button>
              </div>
              <div className='btndiv'>
                <Link to={`/${product.category}/${encodeURIComponent(product.title)}`} className="btn">VER</Link> {/* Enlace al detalle del producto */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
