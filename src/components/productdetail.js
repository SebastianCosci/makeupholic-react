// ProductDetail.js
import React from "react";
import { useParams , useNavigate } from "react-router-dom"; // Importa useParams para obtener el productId
import products from "./ProductsData.js";



function ProductDetail() {
  const navigate = useNavigate();
  const { categoryId, productName } = useParams(); // Obtiene el productId de la URL

  // Encuentra el producto correspondiente según el productId
  const decodedProductName = decodeURIComponent(productName);
  const product = products.find((product) => product.title === decodedProductName);


  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="divproductdetail">
      <h1 className="h1-productdetail">Detalle del Producto</h1>
      {/* Muestra la información detallada del producto */}
      <img className="productodetail_img" src={product.img} alt='' />
      <h1 className='producttitle'>{product.title}</h1>
      <p className='productp'>{product.category}</p>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
      <p className="marca">{product.marca}</p>
      <div className='buttomproddiv buttomproduct'>
        <button className="btn">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
