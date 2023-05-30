import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUser";
import { getAllUsers } from "../utils/api";

const Login = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [userInput, setUserInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((UsersFromApi) => {
      const usernames = UsersFromApi.map((user) => user.username);
      setAllUsers(usernames);
    });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const loginForm = document.getElementById("username-form");
    const loginError = document.createElement("p");
    const loginErrMsg = document.getElementById("login-err-msg");
    if (allUsers.includes(userInput)) {
        setCurrentUser(userInput);
        if (loginErrMsg) {
            loginForm.removeChild(loginErrMsg);
        }
    } else {
      loginError.setAttribute("id", "login-err-msg");
      loginError.innerText = "Invalid Username";
      if (!loginErrMsg) {
        loginForm.appendChild(loginError);
      }
    }
    setUserInput("");
  };

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form className="login" onSubmit={handleLogin} id="username-form">
      <label htmlFor="username" >Username: </label>
      <input
        id="username"
        type="Text"
        aria-label="username"
        onChange={handleInput}
        value={userInput}
      />
      <button type="Submit">Submit</button>
    </form>
  );
};

export default Login;
