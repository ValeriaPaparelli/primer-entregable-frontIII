import React from "react";
import "./Card.css";

const Card = ({ userName, email, password }) => {
  return (
    <div className="container-card">
      <h2>¡Felicitaciones {userName}!!!</h2>
      <h3>Tu registro ha sido exitoso</h3>
      <h4>Tu email para ingresar es: {email}</h4>
      <h4>Contraseña: {password}</h4>
    </div>
  );
};

export default Card;
