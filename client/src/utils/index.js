export const Usersapi = async (setUsersList) => {
    try {
        const res = await fetch("http://localhost/users/listallusers");
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setUsersList(data);
      } catch (error) {
        console.log(error);
      }
}