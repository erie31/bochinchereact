import CartContext from "../../context/cartContext";
import { db } from "../../services/firebase";
import { useState, useContext } from "react";
import {  addDoc,  collection,  getDocs,  query,  where,  documentId,  writeBatch,} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Form from "../Form";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const totalQuantity = getQuantity();
  const total = getTotal();

  const createOrder = async () => {
    setIsLoading(true);
    
    try {
      const objOrder = {
        nombre: "",
        telefono:"",
        email:"",


        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      const sinStock = [];

      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          sinStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (sinStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        swal(`El id de su orden es: ${orderAdded.id}`);
        clearCart();
        setOrderCreated(true);
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        swal("No contamos con stock de algunos productos");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Generando orden</h1>;
  }

  if (orderCreated) {
    return <h1>Orden realizada con éxito</h1>;
  }

  return (
    <>
      <h1>Orden de compra</h1>
      <h2><Form/></h2>
      <button className="" onClick={createOrder}>
        Realizar compra
      </button>
    </>
  );
};

export default Checkout;
