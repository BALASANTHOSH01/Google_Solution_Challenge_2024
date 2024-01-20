import { Outlet } from "react-router-dom";
import TrainingNav from "../../Components/TrainingComponent/TrainingNav/TrainingNav";

const Training = () => {
  return (
    <div>
      <div className="flex flex-row relative">
        <div className="w-[14%]">
          <TrainingNav />
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Training