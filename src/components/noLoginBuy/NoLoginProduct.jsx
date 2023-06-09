//import libreries
import React from 'react';
import login_img from '/assets/socialmedia_img/nologinbuy.svg';
import "./Nologinproduct.css";
import { useNavigate } from 'react-router-dom';

const NoLoginProduct = () => {
  const navigate =useNavigate();
  return (
    <>
      <section className="container-no-buy">
        <div className="content">
            <img className="IMG" src={login_img} alt="no login" />
            <h1 className="titulo">SERVICIO DE VENTAS</h1>
            <h1 className="texto_1">RedWheels cuenta con un equipo de vendedores experimentados que le brindaran la mejor ascesoria para la compra de su vehiculo.</h1>
            <h1 className="texto_2"> Para acceder a este servicio, presione el botón de ingresar</h1>
            <a onClick={() => navigate("/login")} className="buy-button">INGRESA</a>       
          </div>
      </section>
    </>
  );
};


export default NoLoginProduct;