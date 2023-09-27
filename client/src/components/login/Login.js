const Login = () => {
  return (
    <div>
      <h2>Login here</h2>
      <form className="userLogin">
        <div className="inputField">
          <label for="usernameLogin">Username:</label>
          <input
            useId="usernameLogin"
            placeholder="Insert username here..."
          ></input>
        </div>
        <div className="inputField">
          <label for="emailLogin">Email:</label>
          <input
            type="email"
            useId="emailLogin"
            placeholder="Insert email here..."
          ></input>
        </div>
        <div className="inputField">
          <label for="passwordLogin">Password:</label>
          <input
            type="password"
            useId="passwordLogin"
            placeholder="Insert password here..."
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Login;
