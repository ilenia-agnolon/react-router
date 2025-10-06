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
      <div className="main-container-products">
        <h2>Products List</h2>

        {/* contenitore bootstrap */}
        <div className="container">
          <div className="row">
            {prodotti.map((prodotto) => (
              <div className="product-card" key={prodotto.id}>
                {/* card bootstrap */}
                <div className="card">
                  {/* id */}
                  {/* <p>ID: {prodotto.id}</p> */}

                  {/* img */}
                  <img
                    src={prodotto.image}
                    className="card-img"
                    alt={prodotto.title}
                  />

                  {/* corpo card */}
                  <div className="card-body">
                    {/* nome prodotto */}
                    <h3 className="card-title">{prodotto.title}</h3>

                    {/* descrizione */}
                    {/* <p className="card-text">{prodotto.description}</p> */}

                    {/* prezzo */}
                    <p>Price: ${prodotto.price}</p>

                    {/* categoria */}
                    <p>Category: {prodotto.category}</p>

                    {/* voto */}
                    <p>Rate: {prodotto.rating.rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prodotti;
