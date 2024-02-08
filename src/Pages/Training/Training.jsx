import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import TrainingNav from "../../Components/TrainingComponent/TrainingNav/TrainingNav";
import { useEffect } from "react";
import TrainingBottomNav from "../../Components/TrainingComponent/TrainingNav/TrainingBottomNav/TrainingBottomNav";

const Training = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {eventid}=useParams();
  
  useEffect(()=>{
    switch(location.pathname){
      case "/training":
        navigate("/training/event");
        break;
    }
  },[location.pathname]);


  return (
    <div>
      <div className="flex flex-row relative">
        <div>
          <TrainingBottomNav/>
        </div>
        <div className={`mx-auto sm:w-[100%] ${location.pathname === eventid ? `w-[100%]` : `w-[95%]`}`}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Training