import { storeCookie } from "../common";

export const ListAllUsersRoute = async (
  cookie,
  setUsersList,
  setRes,
  setShowModal
) => {
  try {
    const res = await fetch("http://localhost/users/listallusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUsersList(data.userlist);
    setShowModal(true);
  } catch (error) {
    console.log(error);
    console.log(cookie);
    setRes(error);
    setShowModal(true);
  }
};

export const LoginRoute = async (
  logUsername,
  logPassword,
  setUser,
  setRes,
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
    setRes(error);
    setShowModal(true);
  }
};

export const RegisterRoute = async (
  regUsername,
  regEmail,
  regPassword,
  setUser,
  setRes,
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
    setRes(error);
    setShowModal(true);
  }
};

export const DeleteUserRoute = async (
  delUsername,
  delPassword,
  setUser,
  setRes,
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
    setUser("");
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setRes(error);
    setShowModal(true);
  }
};

export const UpdatePasswordRoute = async (
  updUsername,
  updPassword,
  updNewPassword,
  setRes,
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
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setRes(error);
    setShowModal(true);
  }
};

export const AuthCheck = async (jwt_token, setUser) => {
  try {
    const res = await fetch("http://localhost/users/loginwithtoken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateEmailRoute = async (
  cookie,
  updEmail,
  setRes,
  setShowModal
) => {
  try {
    const res = await fetch("http://localhost:80/users/updateemail", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify({
        newemail: updEmail,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setRes(error);
    setShowModal(true);
  }
};

export const AddOrderRoute = async (
  cookie,
  orderItem,
  orderQuantity,
  setRes,
  setShowModal
) => {
  try {
    const res = await fetch("http://localhost:80/orders/addorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify({
        item: orderItem,
        quantity: orderQuantity,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setRes(data);
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setRes(error);
  }
};

export const ShowOrdersRoute = async (
  cookie,
  setOrdersList,
  setRes,
  setShowModal
) => {
  try {
    const res = await fetch("http://localhost/orders/showorders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setOrdersList(data.list);
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setRes(error);
  }
};

export const CancelOrderRoute = async (
  cookie,
  orderId,
  setRes,
  setShowModal
) => {
  try {
    const res = await fetch("http://localhost:80/orders/cancelorder", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify({
        id: orderId,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
    setRes(data);
    setShowModal(true);
  } catch (error) {
    console.log(error);
    setRes(error);
    setShowModal(true);
  }
};
