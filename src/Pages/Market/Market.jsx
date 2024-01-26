import { Outlet, useLocation } from "react-router-dom"
import MarketSideNav from "../../Components/MarketComponents/MarketSideNav/MarketSideNav"
import { useEffect } from "react";
import MobileBottomNav from "../../Components/MarketComponents/MobileBottomNav/MobileBottomNav";


const Market = () => {
  
  const location = useLocation();
  useEffect(()=>{
    switch(location.pathname){
      case "/market":
        return;
    }
  },[location.pathname]);

//  const MarketsideNavFun = ()=>{
//   switch (location.pathname){
//     case `/market/news`:
//       return;
//     default:
//       return <MarketSideNav/>
//   }
//  }

  document.documentElement.scrollTop = 0;
  return (
    <div>
      <div className="flex flex-row w-[100%] justify-center">

        <div className="flex-none h-screen">
          <MarketSideNav/>
        </div>
        
        <div className="sm:block hidden">
          <MobileBottomNav/>
        </div>

        <div className=" flex-1 overflow-y-auto">
          <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default Market