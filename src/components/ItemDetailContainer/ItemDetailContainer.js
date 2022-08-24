import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";

import { db } from "../../services/firebase";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState();

  const { product: productId } = useParams();

  useEffect(() => {

    getDoc(doc(db, "products", productId))

      .then((res) => {

        const data = res.data();

        const productDb = { id: res.id, ...data };

        setProduct(productDb);

        console.log(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, [productId]);

  return (

    <div>

      <h1>Detalle</h1>

      <ItemDetail {...product} />

    </div>

  );

};

export default ItemDetailContainer;