import React, { useState } from "react";

const Form = () => {

  const [data, setData] = useState({
    nombre: "",
    tel: "",
    email: "",
  });

  const handleChange = (e) => {
  
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log("data :", data);

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
 
  return (
    <div style={{ width: "100%" }}>
      <h1>Complete con sus datos para continuar el pago</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Completo"
          value={data.nombre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="tel"
          placeholder="Teléfono"
          value={data.tel}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={data.email}
          onChange={handleChange}
        />

        
      </form>
    </div>
  );
};

export default Form;
