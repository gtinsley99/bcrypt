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

export const LoginRoute = async (logUsername, logPassword, setRes, setShowModal) => {
  try {
    const res = await fetch("http://localhost:80/users/login", {
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
    console.log(data);
    setRes(data);
    setShowModal(true);
  } catch (error) {
    console.log(error);
  }
};

export const RegisterRoute = async (regUsername, regEmail, regPassword, setRes) => {
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
      console.log(data);
      setRes(data);
    } catch (error) {
      console.log(error);
    }
  };