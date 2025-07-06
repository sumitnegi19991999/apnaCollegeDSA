import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Redirect to home page
    navigate("/");
  }, [navigate]);

  return null; // Component doesn't render anything since it redirects immediately
}
