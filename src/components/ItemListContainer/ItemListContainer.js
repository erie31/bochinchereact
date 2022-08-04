import React from "react";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProductsByCategory, getProducts } from "../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
