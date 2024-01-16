import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import UserNavBar from "./Components/UserNavBar/UserNavBar";

const App = () => {
  const location = useLocation();
  const { cropid } = useParams();
  const currentlocation = location.pathname;
  console.log(currentlocation);

  const Footerfun = () => {
    return currentlocation === "/userprofile" ? null : <Footer />;
  };

  const NavBarfun = () => {
    switch (currentlocation) {
      case "/userprofile":
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
