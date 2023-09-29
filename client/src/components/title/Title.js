import Logout from "../logout/Logout";

const Title = ({ user, setUser }) => {
  return (
    <div className="title">
      <div></div>
      {!user ? <h1>Welcome to the site</h1> : <h1>Welcome {user}</h1>}
      <div id="logoutCard">
        {user !== "" && <Logout setUser={setUser}/>}
      </div>
    </div>
  );
};

export default Title;
