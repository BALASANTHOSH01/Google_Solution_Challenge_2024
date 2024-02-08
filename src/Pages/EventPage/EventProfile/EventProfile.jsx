import { useParams } from "react-router-dom";
import NewEventProfile from "../NewEventProfile/NewEventProfile.jsx";
import OldEventProfile from "../OldEventProfile/OldEventProfile.jsx";

const EventProfile = () => {
  const { eventid,oldeventid } = useParams();
  document.documentElement.scrollTop = 0;

  return (

    <div>
      {
        eventid && <NewEventProfile/>
      }
      {
        oldeventid && <OldEventProfile/>
      }
    </div>

  );
};

export default EventProfile;
