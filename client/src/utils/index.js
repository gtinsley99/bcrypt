import { storeCookie } from "../common";

export const ListAllUsersRoute = async (
  jwt_token,
  setUsersList,
  setError,
  setShowModal
) => {
  try {
    const res = await fetch("localhost/users/listallusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt_token}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
    setUsersList(data);
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setError(error);
    setShowModal(true);
  }
};


export const LoginRoute = async (
  logUsername,
  logPassword,
  setUser,
  setError,
  setShowModal
) => {
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

export const RegisterRoute = async (
  regUsername,
  regEmail,
  regPassword,
  setUser,
  setError,
  setShowModal
) => {
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

export const DeleteUserRoute = async (
  delUsername,
  delPassword,
  setUser,
  setError,
  setShowModal
) => {
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
};

export const UpdatePasswordRoute = async (
  updUsername,
  updPassword,
  updNewPassword,
  setError,
  setShowModal
) => {
  try {
    const res = await fetch("http://localhost:80/users/updatepassword", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: updUsername,
        password: updPassword,
        newpassword: updNewPassword,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setError(error);
    setShowModal(true);
  }
};

export const AuthCheck = async (jwt_token, setUser) => {
  try {
    const res = await fetch("http://localhost/users/loginwithtoken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt_token}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    };
    const data = await res.json();
    setUser(data.user.username);

  } catch (error) {
    console.log(error);
  }
};
