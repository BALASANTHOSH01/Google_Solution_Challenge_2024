import { Link } from 'react-router-dom';
import hero from '../../../assets/Images/About/mentor.jpg';
import event from "../../../assets/Images/About/events.jpg";
import news from "../../../assets/Images/About/searching.jpg";
import modernAgriculture from '../../../assets/Images/About/droneWatering.jpg';
import awarness from "../../../assets/Images/About/mentor.jpg";
import support from "../../../assets/Images/About/smartFarming.jpg";
import { useEffect, useState } from 'react';

const AboutHero = () => {
  const [readmore,setReadMore]=useState(false);
  const [showReadBtn,setShowReadBtn]=useState(true);
  useEffect(()=>{
    if(readmore){
       setTimeout(()=>setShowReadBtn(false),0);
    } 
  },[readmore]);

  return (
    <div className={`bg-white font-Nunito tracking-wide sm:mt-[17%] ${!readmore && `mb-[20%]`}`}>

      <div className='flex flex-row sm:flex-col w-[90%] items-center justify-center'>
        <h1 className='text-center text-black text-[30px] w-[50%] font-medium font-Nunito '>About&#160;<span className='text-green-500'>Agro&#160;Assistent</span></h1>
        <img src={hero} alt="Img" className='w-[40%] sm:w-[80%] sm:mx-auto rounded-[10px]' />
      </div>

      <div className='w-[80%] sm:w-[95%] block mx-auto my-[4%]'>
        <p className='text-[25px] sm:text-[22px] block mx-auto'>Why&#160;Agro&#160;Assistent&#160;?</p>
        <p className='w-[70%] text-[20px]  sm:w-[90%] sm:text-[18px]  text-gray-600 mx-auto my-[2%]'>
          Farmers often lack awareness of newly introduced seeds and their associated benefits due to limited access to agricultural experts. Through the <Link to={"/"}><span className='text-green-500 underline'>Agro Assistant</span></Link> platform, we aim to bridge this gap by leveraging modern technology to connect farmers with agricultural experts.
        </p>
      </div>

      
      { showReadBtn &&
         <div className=' absolute right-[50%] left-[45%] w-[150px] text-center mx-auto rounded-[25px] p-2 px-3 hover:shadow-md cursor-pointer bg-green-500' onClick={()=>setReadMore((prev)=>!prev)}>
         <button className=' font-medium text-white'>Read {readmore ? "Less" : "More"}</button>
       </div>
      }

      {
        readmore && <>
          <div className='my-[3%] w-[80%] mx-auto'>
        <p className='text-[30px] block mx-auto my-[2%] underline'>Goals&#160;:</p>
        <ul>
          <li className='text-[22px] block mx-auto underline'>1.Modern&#160;Agriculture&#160;Practice&#160;:</li>
          <img src={modernAgriculture} alt='modernAgricultureImage' className='w-[70%] h-[320px] sm:h-[200px] sm:w-[80%] block mx-auto my-[2%]' />
          <p className='w-[70%] text-[18px]  sm:w-[90%] sm:text-[18px] text-gray-600 mx-auto my-[2%]'>Agro Assistent is on a mission to modernize agriculture by harnessing the power of the latest and most beneficial technologies. We strive to integrate innovative solutions into farming practices, empowering farmers with tools that enhance efficiency, sustainability, and productivity</p>
        </ul>

        <ul>
          <li className='text-[22px] block mx-auto underline'>2.Spread&#160;Awarness&#160;About&#160;Agriculture&#160;:</li>
          <img src={awarness} alt='modernAgricultureImage' className='w-[70%] h-[320px] block mx-auto my-[2%] sm:h-[200px] sm:w-[80%]' />
          <p className='w-[70%] text-[18px]  sm:w-[90%] sm:text-[18px] text-gray-600 mx-auto my-[2%]'>At Agro Assistent, our primary goal is to sow the seeds of awareness about agriculture across the globe. We are on a mission to foster a deeper understanding of the crucial role agriculture plays in our world. <br /><br /> Through educational initiatives, outreach programs, and the dedicated efforts of our team, we aim to spread awareness about sustainable farming practices, environmental impact, and the vital significance of agriculture in shaping our shared future. </p>
        </ul>

        <ul>
          <li className='text-[22px] block mx-auto underline'>3.Build&#160;a&#160;Support&#160;System&#160;for&#160;Agriculture&#160;:</li>
          <img src={support} alt='modernAgricultureImage' className='w-[70%] h-[500px] block mx-auto my-[2%] sm:h-[200px] sm:w-[80%]' />
          <p className='w-[70%] text-[18px]  sm:w-[90%] sm:text-[18px] text-gray-600 mx-auto my-[2%]'>At Agro Assistent, our mission is clear: to establish a resilient support system for agriculture. We are dedicated to creating a platform where farmers can access the knowledge, tools, and mentorship needed to navigate the complexities of modern farming. <br /><br /> By fostering collaboration and sharing expertise, we aim to build a strong foundation for the agricultural community, ensuring sustainable growth and prosperity for farmers worldwide.</p>
        </ul>
      </div>


      <div className='w-[80%] block mx-auto'>
        <p className='text-[25px] block mx-auto'>Solution&#160;we&#160;have&#160;:</p>

        <div className='my-[3%] w-[90%] mx-auto'>
          <p className='text-[22px] block mx-auto'>1.Mentor&#160;support&#160;:</p>
          <p className='w-[70%] text-[20px]  sm:w-[90%] sm:text-[18px] text-gray-600 mx-auto my-[2%]'>
            At Agro Assistent, we believe in empowering farmers with knowledge and guidance. Our dedicated team of mentors, seasoned experts in agriculture, is committed to supporting farmers on their journey to success. <br /><br />

            From crop management to sustainable practices, our mentors are here to share their wealth of experience and knowledge, ensuring that every farmer has the guidance they need to thrive. Join hands with our mentors, and let&apos;s cultivate a brighter future for agriculture together.
          </p>
        </div>

        <div className='my-[3%] w-[90%] mx-auto'>
          <p className='text-[22px] block mx-auto'>2.Regular&#160;Events&#160;:</p>

          <div className='flex flex-col'>
            <p className='w-[70%] text-[20px]  sm:w-[90%] sm:text-[18px] text-gray-600 mx-auto my-[2%]'>
              Discover a community of experienced mentors at Agro Assistent&apos;s regular events. Our mentors, passionate about agricultural innovation, are here to guide you through the latest trends, best practices, and solutions.
            </p>
            <img src={event} alt='event' className='w-[60%] h-[250px] block mx-auto my-[2%]' />
          </div>
        </div>

        <div className='my-[3%] w-[90%] mx-auto'>
          <p className='text-[22px] block mx-auto'>3.Current&#160;News&#160;:</p>
          <p className='w-[70%] text-[20px]  sm:w-[90%] sm:text-[18px] text-gray-600 mx-auto my-[2%]'>
            Explore the pulse of agriculture with our &#34;Agro News&#34; section. We curate the latest and most relevant updates from the farming world, delivering a daily dose of insights, breakthroughs, and trends.
          </p>
          <img src={news} alt='news' className='w-[60%] h-[350px] block mx-auto my-[2%]' />
        </div>

        <div className='text-[20px] block mx-auto w-[75%] sm:w-[100%] pb-[5%] my-[10%]'>
        <p className=' font-medium text-center mx-auto text-green-500'>WE ARE STILL IN PROGRESS ....</p>
        <p className='w-[70%] sm:w-[100%]  text-[20px] sm:text-[15px] text-gray-600 mx-auto my-[2%]'>This project is for the <span className='underline'>2024 Google Solution Challenge.</span></p>
        <p className='w-[70%] sm:w-[100%]  text-[20px] sm:text-[15px] text-gray-600 mx-auto my-[2%]'>The Source code is in my Github Repository.</p>
        </div>
      </div>
        </>
      }
    </div>
  )
}

export default AboutHero;