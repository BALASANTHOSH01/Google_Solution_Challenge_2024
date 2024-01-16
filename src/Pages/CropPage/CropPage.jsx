import { useEffect, useState } from "react";
import { HomeItem } from "../../assets/HomeItem/HomeItem.js";
import { useParams } from "react-router-dom";

const CropPage = () => {

  const [cropcontent, setCropContent] = useState(false);
  const { cropid } = useParams();

  useEffect(() => {
    const cleanedCropId = cropid.replace(":", "");
    const Crop = HomeItem.find((item) => item.id === Number(cleanedCropId));
    setCropContent(Crop);
    console.log(Crop);
  }, [cropid]);


  if (cropcontent) {
    const userId = cropcontent.userId;
    const image = cropcontent.image;
    const title = cropcontent.title;
    const description = cropcontent.description;
    const createdAt = cropcontent.createdAt;
    const tags = cropcontent.tags;

    return (
      <div>
        <div className="my-[5%]">

          <h2 className="text-black text-2xl block text-center mx-auto my-[2%] font-semibold uppercase">{title}</h2>
          <img src={image} alt="image" className="block w-[80%] sm:w-[90%] h-[300px] rounded-[10px] object-cover mx-auto my-[4%]"/>

          <div className="w-[80%] sm:w-[90%] mx-auto">

            <h2 className="text-black font-semibold text-[20px] uppercase tracking-wide my-[4%]">How it was achieved ?</h2>
            <p className=" block mx-auto my-[4%] text-[18px] tracking-wider">{description}</p>

          </div>


          <iframe width="80%" height="400" src="https://www.youtube.com/embed/J_mMS3EkHok?si=-c-RgQd5VnaddlyQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="mx-auto rounded-[10px] sm:w-[90%] my-[4%]"></iframe>

          <h2 className="text-black text-[16px] sm:w-[90%] w-[80%] mx-auto font-semibold my-[3%] uppercase">Tags :</h2>

          <div className="flex flex-row sm:flex-col w-[80%] sm:w-[90%] mx-auto items-center">

            <div className="flex flex-row w-[60%] sm:w-[100%] gap-4">
              {
                tags.map((tag) => (
                  <div key={tag} className=" text-green-500 p-1 px-2 rounded-[25px] ">
                    <p>#{tag}</p>
                  </div>
                ))
              }
            </div>

            <div className="flex flex-row justify-between  text-gray-500 sm:w-[100%]  w-[40%] my-[2%]">
              <p>{userId}</p>
              <p  className="text-gray-500">{createdAt}</p>
            </div>
          </div>


        </div>
      </div>
    )
  } else {
    return (
      <div className="my-[5%] block mx-auto text-[30px] text-black">
        <h2>No such Data found</h2>
      </div>
    );
  }

}

export default CropPage