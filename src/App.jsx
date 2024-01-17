import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import UserNavBar from "./Components/UserNavBar/UserNavBar";

const App = () => {
  const location = useLocation();
  const { cropid,mentorid } = useParams();
  const cropcurrentlocation = location.pathname;
  console.log(cropcurrentlocation);

  const Footerfun = () => {
    return cropcurrentlocation === "/userprofile" ? null : <Footer />;
  };

  const NavBarfun = () => {
    switch (cropcurrentlocation) {
      case "/userprofile":
      case "/mentor":
      case `/mentor/${mentorid}`:
      case `/croppage/${cropid}`:
        return <UserNavBar />;
      default:
        return <NavBar />;
    }
  };

  return (
    <div>
      {NavBarfun()}
      <Outlet />
      {Footerfun()}
    </div>
  );
};

export default App;
