import { Link, NavLink } from "react-router-dom";

const MainNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
          <NavLink to="/chi-siamo">Chi Siamo</NavLink>
          <NavLink to="/prodotti">Prodotti</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
