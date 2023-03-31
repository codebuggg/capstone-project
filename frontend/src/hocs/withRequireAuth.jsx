import { Navigate } from "react-router-dom";
import withAuth from "./withAuth";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function withRequireAuth(Component) {
  return withAuth(() => {
    const {
      currentUser
    } = useContext(AppContext);

    if (currentUser == null) {
      return <Navigate to="/login" />;
    }

    return <Component />
  })
}