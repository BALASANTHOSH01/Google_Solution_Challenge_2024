import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TrainingNav from "../../Components/TrainingComponent/TrainingNav/TrainingNav";
import { useEffect } from "react";
import TrainingBottomNav from "../../Components/TrainingComponent/TrainingBottomNav/TrainingBottomNav";

const Training = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(()=>{
    switch(location.pathname){
      case "/training":
        navigate("/training/event");
        break;
    }
  },[location.pathname])
  return (
    <div>
      <div className="flex flex-row relative">
        <div className="w-[14%] sm:w-[0%]" >
          <TrainingNav />
        </div>
        <div>
          <TrainingBottomNav/>
        </div>
        <div className="w-[80%] sm:w-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Training