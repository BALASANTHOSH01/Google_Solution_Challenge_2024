import { useState } from "react"
import UserContent from "../../UserProfile/UserContent/UserContent.jsx";


const PeopleActivity = ({props}) => {
  const Profile = props.profile;
  const Name = props.Name;
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
        <div className="flex flex-row justify-around sm:w-[80%] w-[50%]">
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


        <UserContent profile={Profile} name={Name} username={Username} />
      </div>

      <div className="mt-[2%] py-[4%]  bg-white rounded-[10px] border ">
        <div className="w-[90%] sm:w-[95%] block mx-auto">
          <h1 className="text-[20px] font-medium">About&#160;</h1>

          <div className="my-[2%]">
            <p className="text-gray-600 text-[15px]">{About}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleActivity