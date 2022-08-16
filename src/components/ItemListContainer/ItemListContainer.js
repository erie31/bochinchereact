import React from "react";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionR = !categoryId  ? collection(db, "products") : query(collection(db, "products"), where("category", "==", categoryId));

    getDocs(collectionR)
      .then((response) => {
        const productsA = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsA);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Desplegando inflables, ensillando toros...</h1>;
  }

  return (
    <div>
      <h1>{`${categoryId || ""}`}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
