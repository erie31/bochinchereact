import CartContext from "../../context/cartContext";
import { db } from "../../services/firebase";
import { useState, useContext, useEffect } from "react";
import {  addDoc,  collection,  getDocs,  query,  where,  documentId,  writeBatch, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import validator from "validator";


const Checkout = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalQuantity = getQuantity();
  const total = getTotal();

  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerEmailConf, setBuyerEmailConf] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validEmailConf, setValidEmailConf] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  useEffect(() => {
    setValidName(validator.isAlpha(buyerName, "es-ES", { ignore: " " }));
    setValidEmail(validator.isEmail(buyerEmail));
    setValidEmailConf(validator.equals(buyerEmail, buyerEmailConf));
    setValidPhone(validator.isNumeric(buyerPhone, "es-ES"));
}, [buyerName, buyerEmail, buyerEmailConf, buyerPhone]);

  const createOrder = async () => {
    setIsLoading(true);
    
    try {
        const objOrder = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: cart,
        totalQuantity,
        total,
        date: serverTimestamp(),
        }

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
      console.log("Algo no anda bien",error);
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
  const handleNameChange = (e) => {
    setBuyerName(e.target.value);
}

const handleEmailChange = (e) => {
    setBuyerEmail(e.target.value);
}

const handleEmailConfChange = (e) => {
    setBuyerEmailConf(e.target.value);
}

const handlePhoneChange = (e) => {
    setBuyerPhone(e.target.value);
}




return (
    <>
        <h2>Checkout Information:</h2>
        <TextField className="formItems" error={buyerName !== "" && !validName} required variant="filled" label="Full Name" onChange={handleNameChange} value={buyerName} />
        <TextField className="formItems" error={buyerPhone !== "" && !validPhone} required variant="filled" label="Phone Number" onChange={handlePhoneChange} value={buyerPhone} />
        <TextField className="formItems" error={buyerEmail !== "" && !validEmail} required variant="filled" label="Email Address" onChange={handleEmailChange} value={buyerEmail} />
        <TextField className="formItems" error={buyerEmailConf !== "" && !validEmailConf} required variant="filled" label="Confirm Email Address" onChange={handleEmailConfChange} value={buyerEmailConf} />
       
            <div className="cartButtons">
                <Button onClick={createOrder} variant="contained" disabled={(!validName || !validEmail || !validEmailConf || !validPhone)} color="success">Complete Purchase</Button>
                <Button onClick={clearCart} variant="contained" color="error">Clear Cart</Button>
            </div>
        
    </>
)
}

export default Checkout;