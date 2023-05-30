import { Link } from "react-router-dom";
import Login from "./Login";
import { CurrentUserContext } from "../Contexts/CurrentUser";
import { useContext } from "react";

const Nav = ({ categories }) => {
  const { currentUser } = useContext(CurrentUserContext);
  let loginMessage;
    if (!currentUser) {
        loginMessage = <li className="navbar-item">Not logged in</li>
    } else {
        loginMessage = <li className="navbar-item">You are logged in as {currentUser}</li>
    }
  return (
    <section className="navbar">
      <ul>
        <li>
          <Link to="/reviews">Home</Link>
        </li>
        {/* <li>
          <p className="navbar-item">Review By Category</p>
          <ul className="nav-category-list">
            {categories.map((category) => {
              return (
                <li key={category.slug} className="nav-category">
                  <Link to={`/reviews?category=${category.slug}`}>
                    {category.slug}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li> */}
      </ul>
      <ul className="login-box">
        <li className="navbar-item">
          <Login />
        </li>
        {loginMessage}
      </ul>
    </section>
  );
};

export default Nav;
