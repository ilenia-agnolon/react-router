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
      <div>
        <h2>Products List</h2>

        <ul>
          {prodotti.map((prodotto) => (
            <li key={prodotto.id}>
              <h3>{prodotto.title}</h3>
              <img src={prodotto.image} alt={prodotto.title} />
              <p>{prodotto.description}</p>
              <p>{prodotto.price}</p>
              <p>{prodotto.category}</p>
              <p>Rate: {prodotto.rating.rate}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Prodotti;
