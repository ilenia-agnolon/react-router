import { Link, NavLink } from "react-router-dom";

//dati menù
const links = [
  { path: "/", label: "Home" },
  { path: "/chi-siamo", label: "Chi Siamo" },
  { path: "/prodotti", label: "Prodotti" },
];

const MainNavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className="nav-element">
                {link.label}
              </NavLink>
            </li>
          ))}
          {/* <li>
          <Link to="/">Home Page</Link>
          <NavLink to="/chi-siamo">Chi Siamo</NavLink>
          <NavLink to="/prodotti">Prodotti</NavLink>
        </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavBar;
