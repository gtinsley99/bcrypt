import './App.css';

// components
import Title from "./components/title/Title";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import ChangeUserData from './components/changeUserData/ChangeUserData';

function App() {
  return (
    <div className="App">
      <Title />
      <Register />
      <Login />
      <ChangeUserData />
    </div>
  );
}

export default App;
