const LoginErrorModal = (props) => {
  const handleClick = () => {
    props.setShowModal(false);
    props.setRes(null);
  };

  return (
    <div className="modalBackgrnd">
      <div className="modal">
        <p>Error: Username or password invalid.</p>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default LoginErrorModal;
