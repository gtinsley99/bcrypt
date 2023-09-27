import "./App.css";
import { useState } from "react";

// components
import Title from "./components/title/Title";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ChangeUserData from "./components/changeUserData/ChangeUserData";
import AllUsersModal from "./components/modal/AllUsersModal";
import ResModal from "./components/modal/ResModal";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [usersList, setUsersList] = useState();
  const [res, setRes] = useState(null);
  const [showResModal, setShowResModal] = useState(false);

  return (
    <div className="App">
      <Title />
      <Register setRes={setRes}/>
      <Login setRes={setRes} setShowModal={setShowResModal}/>
      <ChangeUserData setShowUsers={setShowUsers} />
      {showUsers && <AllUsersModal setShowUsers={setShowUsers} usersList={usersList}/>}
      {showResModal && <ResModal setShowModal={setShowResModal} res={res} />}
    </div>
  );
}

export default App;
