const Logout = (props) => {
    const handleClick = () => {
       document.cookie = "jwt_token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
       props.setUser("")
    };
    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

export default Logout;