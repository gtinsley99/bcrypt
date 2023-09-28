import "./App.css";
import { useState } from "react";

// components
import Title from "./components/title/Title";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ChangeUserData from "./components/changeUserData/ChangeUserData";
import AllUsersModal from "./components/modal/AllUsersModal";
import LoginErrorModal from "./components/modal/ErrorModal";
import RegErrorModal from "./components/modal/RegErrorModal";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [usersList, setUsersList] = useState();
  const [error, setError] = useState(null);
  const [showLogErrorModal, setShowLogErrorModal] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegErrorModal, setShowRegErrorModal] = useState(false);

  return (
    <div className="App">
      <Title user={user}/>
      <Register setShowModal={setShowRegErrorModal} setUser={setUser} setError={setError} error = {error}/>
      <Login setShowModal={setShowLogErrorModal} setUser={setUser} setError={setError}/>
      <ChangeUserData setShowUsers={setShowUsers} />
      {showUsers && <AllUsersModal setShowUsers={setShowUsers} usersList={usersList}/>}
      {showLogErrorModal && <LoginErrorModal setShowModal={setShowLogErrorModal} />}
      {showRegErrorModal && <RegErrorModal setShowModal = {setShowRegErrorModal} error={error} setError={setError} />}
    </div>
  );
};

export default App;
