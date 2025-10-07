//import dell'hook per il parametro
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  //recupero id (il parametro dinamico)
  const { id } = useParams();
  return (
    <div className="ProductDetailPage-main-container">
      <h1>questa è la pagina di dettaglio</h1>
      <h2>questo invece è l'ID prodotto: {id}</h2>
    </div>
  );
};

export default ProductDetailPage;
