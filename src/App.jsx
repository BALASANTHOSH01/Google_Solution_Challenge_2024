import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;