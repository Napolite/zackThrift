import { useEffect } from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 4200);
  });
  return (
    <div className="landing-root">
      <div className="before"></div>
      <div className="name">ZackLaunren Thrift Collection</div>
      <div className="after"></div>
    </div>
  );
}

export default LandingPage;
