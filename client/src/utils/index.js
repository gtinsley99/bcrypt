import { storeCookie } from "../common";

export const Usersapi = async (setUsersList) => {
  try {
    const res = await fetch("localhost/users/listallusers");
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUsersList(data);
  } catch (error) {
    console.log(error);
  }
};

export const LoginRoute = async (logUsername, logPassword, setUser, setError, setShowModal) => {
  try {
    const res = await fetch("http://localhost/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: logUsername,
        password: logPassword,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUser(data.user.username);
    storeCookie("jwt_token", data.user.token, 7);
  } catch (error) {
    console.log(error);
    setError(error);
    setShowModal(true);
  }
};

export const RegisterRoute = async (regUsername, regEmail, regPassword, setUser, setError, setShowModal) => {
    try {
      const res = await fetch("http://localhost:80/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: regUsername,
          email: regEmail,
          password: regPassword,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setUser(data.user.username);
      storeCookie("jwt_token", data.user.token, 7);
    } catch (error) {
      console.log(error);
      setError(error);
      setShowModal(true);
    }
  };

  export const DeleteUserRoute = async (delUsername, delPassword, setUser, setError, setShowModal) => {
    try {
      const res = await fetch("http://localhost:80/users/deleteuser", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: delUsername,
          password: delPassword,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setUser("");
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setError(error);
      setShowModal(true);
    }
  }