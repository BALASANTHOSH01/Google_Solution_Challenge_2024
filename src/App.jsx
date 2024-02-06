import Footer from "./Components/Footer/Footer";
// import NavBar from "./Components/NavBar/NavBar";
import Nav from "./Components/Nav/Nav";
import { Outlet, useLocation, useParams } from "react-router-dom";
import UserNavBar from "./Components/UserNavBar/UserNavBar";
import MessageNav from "./Components/MessageComponents/MessageNav/MessageNav";
import MarketSideNav from "./Components/MarketComponents/MarketSideNav/MarketSideNav";
import NewsNav from "./Components/NewsComponents/NewsNav/NewsNav";

const App = () => {
  const location = useLocation();
  const { cropid,peopleid,eventid,mobilemessageid,messageid,productid } = useParams();
  const cropcurrentlocation = location.pathname;
  console.log(cropcurrentlocation);

  const Footerfun = () =>{
    switch (cropcurrentlocation){
      case "/userprofile":
      case `/message/mobile/${mobilemessageid}`:
      case `/message/${messageid}`:
      case "/market":
      case "/training":
      case "/bot":
      case `/market/cart`:
      case `/market/additem`:
      case `/market/buy`:
      case `/market/buy/${productid}`:
      case `/training/event/${eventid}`:
        return;
      default:
        return <Footer/>
    }
  }

  const NavBarfun = () => {
    switch (cropcurrentlocation) {
      case "/userprofile":
      case `/people/${peopleid}`:
      case `/croppage/${cropid}`:
      case `/training/event/${eventid}`:
        return <UserNavBar />;
      case "/bot":
        return;
      case "/news":
        return <NewsNav/>;
      case `/message/mobile/${mobilemessageid}`:
        return <MessageNav/>;
      default:
        return <Nav />;
    }
  };

  return (
    <div>
      {NavBarfun()}

      <div className="mt-[7%] md:mt-[10%] ">
      <Outlet />
      </div>

      {Footerfun()}
    </div>
  );
};

export default App;
