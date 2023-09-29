import "./App.css";
import { useEffect, useState } from "react";

// components
import Title from "./components/title/Title";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ChangeUserData from "./components/changeUserData/ChangeUserData";
import AllUsersModal from "./components/modal/AllUsersModal";
import LoginErrorModal from "./components/modal/ErrorModal";
import RegErrorModal from "./components/modal/RegErrorModal";
import DeleteUserModal from "./components/modal/DelModal";
import UpdateEmailModal from "./components/modal/UpdateEmailModal";
import UpdatePassModal from "./components/modal/UpdatePassModal";
import { readCookie } from "./common";
import { AuthCheck } from "./utils";
import Orders from "./components/orders/Orders";
import OrdersModal from "./components/modal/OrdersModal";
import CancelOrderModal from "./components/modal/CancelOrderModal";
import AddOrderModal from "./components/modal/AddOrderModal";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [usersList, setUsersList] = useState();
  const [error, setError] = useState(null);
  const [showLogErrorModal, setShowLogErrorModal] = useState(false);
  const [user, setUser] = useState("");
  const [showRegErrorModal, setShowRegErrorModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [showUpdPassModal, setShowUpdPassModal] = useState(false);
  const [showUpdEmailModal, setShowUpdEmailModal] = useState(false);
  const [ordersList, setOrdersList] = useState(null);
  const [showOrdersModal, setShowOrdersModal] = useState(false);
  const [showCancelOrderModal, setShowCancelOrderModal] = useState(false);
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);

  const loginWithToken = async (cookie) => {
    await AuthCheck(cookie, setUser);
  };

  useEffect(() => {
    let cookie = readCookie("jwt_token");
    if (cookie !== false) {
      loginWithToken(cookie);
    }
  }, []);

  return (
    <div className="App">
      <Title user={user} setUser={setUser} />
      {user === "" && <Register
        setShowModal={setShowRegErrorModal}
        setUser={setUser}
        setError={setError}
        error={error}
      />}
      {user === "" && <Login
        setShowModal={setShowLogErrorModal}
        setUser={setUser}
        setError={setError}
      />}
      {user !== "" && <ChangeUserData
        setShowUsers={setShowUsers}
        setError={setError}
        setUser={setUser}
        setShowDelModal={setShowDelModal}
        setShowUpdPassModal={setShowUpdPassModal}
        setShowUpdEmailModal={setShowUpdEmailModal}
        setUsersList={setUsersList}
      />}
      {user !== "" && (
        <Orders
          setError={setError}
          setOrdersList={setOrdersList}
          setShowOrdersModal={setShowOrdersModal}
          setShowCancelOrderModal={setShowCancelOrderModal}
          setShowAddOrderModal={setShowAddOrderModal}
        />
      )}
      {showUsers && (
        <AllUsersModal
          setShowModal={setShowUsers}
          usersList={usersList}
          setError={setError}
        />
      )}
      {showLogErrorModal && (
        <LoginErrorModal
          setShowModal={setShowLogErrorModal}
          setError={setError}
        />
      )}
      {showRegErrorModal && (
        <RegErrorModal
          setShowModal={setShowRegErrorModal}
          error={error}
          setError={setError}
        />
      )}
      {showDelModal && (
        <DeleteUserModal
          setShowModal={setShowDelModal}
          error={error}
          setError={setError}
          user={user}
        />
      )}
      {showUpdPassModal && (
        <UpdatePassModal
          setShowModal={setShowUpdPassModal}
          error={error}
          setError={setError}
        />
      )}
      {showUpdEmailModal && (
        <UpdateEmailModal
          setShowModal={setShowUpdEmailModal}
          error={error}
          setError={setError}
        />
      )}
      {showOrdersModal && (
        <OrdersModal
          setShowModal={setShowOrdersModal}
          error={error}
          setError={setError}
          ordersList={ordersList}
          setOrdersList={setOrdersList}
        />
      )}
      {showCancelOrderModal && (
        <CancelOrderModal
          setShowModal={setShowCancelOrderModal}
          error={error}
          setError={setError}
        />
      )}
      {showAddOrderModal && (
        <AddOrderModal
          setShowModal={setShowAddOrderModal}
          error={error}
          setError={setError}
        />
      )}
    </div>
  );
}

export default App;
