import { useEffect } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    auth.logout();
    navigate("/");
  });

  return <div>Logging out...</div>;
};

export default Logout;
