const Title = ({user}) => {
  return (
    <div className="title">
      {!user ? (
        <h1>Welcome to the site</h1>
      ) : (
        <h1>Welcome {user}</h1>
      )}
    </div>
  );
};

export default Title;
