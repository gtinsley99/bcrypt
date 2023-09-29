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
  const [res, setRes] = useState(null);
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
        setRes={setRes}
        res={res}
      />}
      {user === "" && <Login
        setShowModal={setShowLogErrorModal}
        setUser={setUser}
        setRes={setRes}
      />}
      {user !== "" && <ChangeUserData
        setShowUsers={setShowUsers}
        setRes={setRes}
        setUser={setUser}
        setShowDelModal={setShowDelModal}
        setShowUpdPassModal={setShowUpdPassModal}
        setShowUpdEmailModal={setShowUpdEmailModal}
        setUsersList={setUsersList}
      />}
      {user !== "" && (
        <Orders
          setRes={setRes}
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
          setRes={setRes}
        />
      )}
      {showLogErrorModal && (
        <LoginErrorModal
          setShowModal={setShowLogErrorModal}
          setRes={setRes}
        />
      )}
      {showRegErrorModal && (
        <RegErrorModal
          setShowModal={setShowRegErrorModal}
          res={res}
          setRes={setRes}
        />
      )}
      {showDelModal && (
        <DeleteUserModal
          setShowModal={setShowDelModal}
          res={res}
          setRes={setRes}
          user={user}
        />
      )}
      {showUpdPassModal && (
        <UpdatePassModal
          setShowModal={setShowUpdPassModal}
          res={res}
          setRes={setRes}
        />
      )}
      {showUpdEmailModal && (
        <UpdateEmailModal
          setShowModal={setShowUpdEmailModal}
          res={res}
          setRes={setRes}
        />
      )}
      {showOrdersModal && (
        <OrdersModal
          setShowModal={setShowOrdersModal}
          res={res}
          setRes={setRes}
          ordersList={ordersList}
          setOrdersList={setOrdersList}
        />
      )}
      {showCancelOrderModal && (
        <CancelOrderModal
          setShowModal={setShowCancelOrderModal}
          res={res}
          setRes={setRes}
        />
      )}
      {showAddOrderModal && (
        <AddOrderModal
          setShowModal={setShowAddOrderModal}
          res={res}
          setRes={setRes}
        />
      )}
    </div>
  );
}

export default App;
