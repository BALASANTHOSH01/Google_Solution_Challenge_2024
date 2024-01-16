import { useEffect, useState } from "react";
import { HomeItem } from "../../assets/HomeItem/HomeItem.js";
import { useParams } from "react-router-dom";

const CropPage = () => {

  const [cropcontent,setCropContent]=useState(false);
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
    const Ylink = cropcontent.youtubelink;

    return (
      <div>
        <div className="my-[5%]">
          <img src={image} alt="image" className="block w-[80%] h-[300px] rounded-[10px] object-cover mx-auto"/>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Created at: {createdAt}</p>
          <p>{
            tags.map((tag)=>(
              <p key={tag}>{tag}</p>
            ))
          }</p>

          <p>{userId}</p>
          <p>{Ylink}</p>
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