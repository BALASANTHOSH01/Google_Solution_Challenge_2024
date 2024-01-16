import user from '../../assets/Images/man.png';
// import banner from '../../assets/Images/banner.jpg';
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdWorkspacePremium } from "react-icons/md";
import UserContent from './UserContent/UserContent';

const UserProfile = () => {
  return (
    <div>

      {/**User Profile Image */}
      <div className='p-2 bg-white border border-black rounded-[50%]  w-[10%]  h-[10%]  sm:w-[35%] cursor-pointer relative block mx-auto sm:my-[5%]'>
        <img src={user} alt="user" />
      </div>

      {/**User details */}
      <div className='block mx-auto text-center my-[1%]'>
        <h1 className='text-2xl font-semibold'>User Name</h1>
        <p className='text-gray-400'>@Username</p>

        <div className='flex flex-row mx-auto sm:w-[100%] justify-center gap-[7%] my-[2%]'>
          <div className='flex flex-row gap-1 text-[13px] items-center text-gray-400'>
            <IoLocationOutline />
            <p>Location</p>
          </div>

          <div className='flex flex-row gap-1 text-[13px] items-center text-gray-400'>
            <CiCalendar />
            <p>Joined On 2024</p>
          </div>

          <div className='flex flex-row gap-1 text-[13px] items-center text-gray-400'>
            <MdWorkspacePremium />
            <p>Profession of the user</p>
          </div>
        </div>
      </div>

      {/**User content (Post,achievments,clients,recommendations) */}
      <UserContent />

    </div>
  )
}

export default UserProfile