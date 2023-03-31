import React from 'react';
import { HOST } from '../const';
import { AppContext } from "../contexts/AppContext";

const withAuth = (Component) => {
  return () => {

    const [currentUser, setCurrentUser] = React.useState(null);
    const [isFetching, setIsFetching] = React.useState(true);

    const validateToken = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${HOST}/user`, {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        if (res.ok) {
          const body = await res.json();
          setCurrentUser(body);
        }
      } catch (e) {
        console.log(e);

      } finally {
        setIsFetching(false);
      }
    }

    React.useEffect(() => {
      validateToken()
    }, []);

    const signOut = () => {
      localStorage.removeItem("token");
      setCurrentUser(null);
    }


    const appContext = {
      currentUser,
      isFetching,
      signOut,
      setCurrentUser,
    }

    if (isFetching) return null;

    return (
      <AppContext.Provider
        value={appContext}
      >
        <Component />
      </AppContext.Provider>
    );
  }
}

export default withAuth;