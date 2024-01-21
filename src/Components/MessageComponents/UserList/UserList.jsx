import { Link } from "react-router-dom";


const UserList = ({ props }) => {
  const User = props;
  return (
    <div >
      <div className="sm:hidden block ">
        <Link to={`/message/${User.id}`}>
          <div className="flex flex-row gap-2 items-center">
            <img src={User.Image} alt="userImg" className="rounded-[50%] w-[50px] h-[50px]" />
            <div className="flex flex-col p-2 gap-2">
              <h2 className="text-[17px] text-black">{User.name}</h2>
              <p className="text-[13px] text-gray-500 Custom-truncate">{User.role}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="hidden sm:block">
      <Link to={`/message/mobile/${User.id}`}>
          <div className="flex flex-row gap-2 items-center">
            <img src={User.Image} alt="userImg" className="rounded-[50%] w-[50px] h-[50px]" />
            <div className="flex flex-col p-2 gap-2">
              <h2 className="text-[17px] text-black">{User.name}</h2>
              <p className="text-[13px] text-gray-500 Custom-truncate">{User.role}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UserList