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
// import { readCookie } from "./common";

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

  const loginWithToken = async (cookie) => {
    const user = await AuthCheck(cookie, setUser);
  };

  useEffect(() => {
    let cookie = readCookie("jwt_token");
    if (cookie !== false){
      loginWithToken(cookie);
    };
  }, []);


  return (
    <div className="App">
      <Title user={user} />
      <Register
        setShowModal={setShowRegErrorModal}
        setUser={setUser}
        setError={setError}
        error={error}
      />
      <Login
        setShowModal={setShowLogErrorModal}
        setUser={setUser}
        setError={setError}
      />
      <ChangeUserData
        showUsers={setShowUsers}
        setError={setError}
        setUser={setUser}
        setShowDelModal={setShowDelModal}
        setShowUpdPassModal={setShowUpdPassModal}
        setShowUpdEmailModal={setShowUpdEmailModal}
        setUsersList={setUsersList}
      />
      {showUsers && (
        <AllUsersModal setShowModal={setShowUsers} usersList={usersList} setError={setError} />
      )}
      {showLogErrorModal && (
        <LoginErrorModal setShowModal={setShowLogErrorModal} setError={setError} />
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
    </div>
  );
}

export default App;
