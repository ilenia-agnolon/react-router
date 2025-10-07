import { useState, useEffect } from "react";
//import dell'hook per il parametro
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  //recupero id (il parametro dinamico)
  const { id } = useParams();

  //stato dove salverò i dati del prodotto selezionato
  const [prodotto, setProdotto] = useState({});

  //AXIOS
  //quando il componente si carica, parte la chiamata all'API per prendere i dati
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="ProductDetailPage-main-container">
      <h1>questa è la pagina di dettaglio</h1>
      <h2>questo invece è l'ID prodotto: {id}</h2>
    </div>
  );
};

export default ProductDetailPage;
