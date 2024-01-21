import { Outlet, useLocation } from "react-router-dom"
import MarketSideNav from "../../Components/MarketComponents/MarketSideNav/MarketSideNav"
import { useEffect } from "react";


const Market = () => {
  
  const location = useLocation();
  useEffect(()=>{
    switch(location.pathname){
      case "/market":
        return;
    }
  },[location.pathname]);


  return (
    <div>
      <div className="flex flex-row w-[100%] ">

        <div className="30% block relative">
          <MarketSideNav/>
        </div>

        <div className="w-[90%] ml-[15%] sm:ml-[0] sm:mx-auto">
          <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default Market