const Register = () => {
  return (
    <div>
      <h2>Make an account</h2>
      <form className="userLogin">
      <div className="inputField">
        <label for="usernameRegister">Username:</label>
        <input
          useId="usernameRegister"
          placeholder="Insert username here..."
        ></input>
        </div>
        <div className="inputField">
        <label for="emailRegister">Email:</label>
        <input
          type="email"
          useId="emailRegister"
          placeholder="Insert email here..."
        ></input>
        </div>
        <div className="inputField">
        <label for="passwordRegister">Password:</label>
        <input
          type="password"
          useId="passwordRegister"
          placeholder="Insert password here..."
        ></input>
        </div>
      </form>
    </div>
  );
};

export default Register;
