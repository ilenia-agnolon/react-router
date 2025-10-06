import { useEffect, useState } from "react";

const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);

  //   AXIOS
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProdotti(response.data);
      })
      .catch((error) => {
        console.error("errore recupero dati prodotti", error);
      });
  }, []);

  //   LISTA PRODOTTI
  return (
    <>
      <div>Questa è la pagina prodotti</div>
    </>
  );
};

export default Prodotti;
