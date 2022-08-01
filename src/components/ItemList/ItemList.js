import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { productList } from "../asyncMock";
import swal from "sweetalert";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    //  //este es que por el momento uso para simular el pedido a una api
    setTimeout(() => {
      if (true) {
        resolve(productList);
      } else {
      }
    }, 1500);
  });

  const getProductsFromDB = async () => {
    //uso para simular el pedido a una api
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      swal.error(error);
      alert("No contamos con ese servicio por el momento");
    }
  };
  useEffect(() => {
    getProductsFromDB();
  }, []);

  return (
    <div className="d-flex justify-content-around">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <Item
                key={product.id}
                nombre={product.nombre}
                imagen={product.imagen}
                catering={product.catering}
                stock={product.stock}
                id={product.id}
              />
            );
          })}
        </>
      ) : (
        <p>Desplegando inflables...!</p>
      )}
    </div>
  );
};

export default ItemList;
