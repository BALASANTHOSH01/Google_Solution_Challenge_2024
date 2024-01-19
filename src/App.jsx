import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import UserNavBar from "./Components/UserNavBar/UserNavBar";

const App = () => {
  const location = useLocation();
  const { cropid,mentorid,eventid } = useParams();
  const cropcurrentlocation = location.pathname;
  console.log(cropcurrentlocation);

  const Footerfun = () =>{
    switch (cropcurrentlocation){
      case "/userprofile":
      case "/bot":
        return;
      default:
        return <Footer/>
    }
  }

  const NavBarfun = () => {
    switch (cropcurrentlocation) {
      case "/userprofile":
      case `/mentor/${mentorid}`:
      case `/croppage/${cropid}`:
      case `/event/${eventid}`:
        return <UserNavBar />;
      case "/bot":
        return;
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
