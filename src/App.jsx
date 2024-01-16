import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import {Outlet, useLocation} from 'react-router-dom';
import UserNavBar from "./Components/UserNavBar/UserNavBar";

const App = () => {

  const location = useLocation();
  const currentlocation = location.pathname;
  console.log(currentlocation);

  return (
    <div>
      {
        currentlocation === "/userprofile" ? 
        <UserNavBar/> : <NavBar/>
      }
      <Outlet/>

      {
        currentlocation === "/userprofile" ?
        <></> : <Footer/>
      }
      
    </div>
  )
}

export default App;