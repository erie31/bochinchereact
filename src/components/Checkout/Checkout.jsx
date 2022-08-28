import CartContext from "../../context/cartContext";
import { db } from "../../services/firebase";
import { useState, useContext, useEffect } from "react";
import {  addDoc,  collection,  getDocs,  query,  where,  documentId,  writeBatch, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import validator from "validator";
import swal from "sweetalert";


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
        <h2>Orden de Compra:</h2>
        <TextField  error={buyerName !== "" && !validName} required variant="filled" label="Nombre Completo" onChange={handleNameChange} value={buyerName} />
        <TextField  error={buyerPhone !== "" && !validPhone} required variant="filled" label="Número de Teléfono" onChange={handlePhoneChange} value={buyerPhone} />
        <TextField  error={buyerEmail !== "" && !validEmail} required variant="filled" label="Email" onChange={handleEmailChange} value={buyerEmail} />
        <TextField  error={buyerEmailConf !== "" && !validEmailConf} required variant="filled" label="Confirmar Email" onChange={handleEmailConfChange} value={buyerEmailConf} />
       
            <div className="cartButtons">
                <Button onClick={createOrder} variant="contained" disabled={(!validName || !validEmail || !validEmailConf || !validPhone)} color="success">Completar Compra</Button>
            </div>
        
    </>
)
}

export default Checkout;