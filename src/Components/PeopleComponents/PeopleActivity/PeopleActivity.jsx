import { useState } from "react"
import UserContent from "../../UserProfile/UserContent/UserContent.jsx";
import AwardSection from "../../UserProfile/AwardSection/AwardSection.jsx";


const PeopleActivity = ({props}) => {
  const Profile = props.profile;
  const Name = props.name;
  const Username = props.username;
  const About = props.about;
  const [profileactivity, setProfileActivity] = useState("posts");
  const handleActivityToggle = (activity) => {
    setProfileActivity(activity);
  }
  return (
    <div className="my-[1%] pb-[10%]">

      <div className="flex flex-col  bg-white rounded-[10px]  pt-[4%] border">
        {/**Activity Nav elements */}
        <div className="flex flex-row justify-around sm:w-[80%] w-[50%] mb-[2%]">
          {
            profileactivity === "posts" ?
              <p className="text-[18px] cursor-pointer text-black" onClick={() => handleActivityToggle("posts")}>Posts<hr className="bg-green-500 w-full h-[2px]" /></p> :
              <p className="text-[18px] cursor-pointer text-gray-400" onClick={() => handleActivityToggle("posts")}>Posts</p>
          }

          {
            profileactivity === "awards" ?
              <p className="text-[18px] cursor-pointer text-black" onClick={() => handleActivityToggle("awards")}>Awards<hr className="bg-green-500 w-full h-[2px]" /></p> :
              <p className="text-[18px] cursor-pointer text-gray-400" onClick={() => handleActivityToggle("awards")}>Awards</p>
          }

          {
            profileactivity === "recommends" ?
              <p className="text-[18px] cursor-pointer text-black" onClick={() => handleActivityToggle("recommends")}>Recommends<hr className="bg-green-500 w-full h-[2px]" /></p> :
              <p className="text-[18px] cursor-pointer text-gray-400" onClick={() => handleActivityToggle("recommends")}>Recommends</p>
          }
        </div>


        
        <div className="h-screen overflow-auto">
        {
          profileactivity === "posts" && <div className=" overflow-auto">
            <UserContent profile={Profile} name={Name} username={Username} />
          </div>
        }

        {
          profileactivity === "awards" && <div className=" overflow-auto">
            <AwardSection/>
          </div>
        }
        </div>
      </div>

      
    </div>
  )
}

export default PeopleActivity