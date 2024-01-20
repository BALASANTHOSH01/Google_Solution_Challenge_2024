import MarketSideNav from "../../Components/MarketComponents/MarketSideNav/MarketSideNav"


const Market = () => {
  return (
    <div>
      <div className="flex flex-row w-[100%] ">

        <div className="30% relative">
          <MarketSideNav/>
        </div>

        <div className="w-[70%]">

        </div>

      </div>
    </div>
  )
}

export default Market