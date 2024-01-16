import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTwitterXLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import logo from '../../assets/Images/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-screen text-center mt-5 font-Roboto'>

            <div className='w-[80%] items-center text-center mx-auto'>
                <img src={logo} alt='Logo' className='w-[15%] mx-auto rounded-[50%]' />
                <p className=' font-Mochiy font-semibold my-[1%]'>Agro<span className=' font-Mochiy text-green-500'> Uzhagam</span></p>

                <div className='flex gap-[7%] text-base font-medium items-center mt-7 mx-auto justify-center'>

                    <Link>
                        <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer hover:text-green-500'>Home</motion.li>
                    </Link>

                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer hover:text-green-500'>Agro&#160;News</motion.li>
                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer hover:text-green-500'>Popular</motion.li>
                    <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer hover:text-green-500'>Mentor</motion.li>

                    <Link to={'/about'} >
                        <motion.li whileTap={{ scale: 0.6 }} className=' list-none cursor-pointer hover:text-green-500'>About&#160;Us</motion.li>
                    </Link>
                    
                </div>

                <div className='flex gap-[4%] mx-auto justify-center mt-7 mb-7'>
                    <a href='#insta' className=' no-underline text-2xl p-2 rounded-[50%] hover:bg-gray-200'> <AiFillInstagram /> </a>
                    <a href='#linkedin' className=' no-underline text-2xl p-2 rounded-[50%] hover:bg-gray-200'> <AiFillLinkedin /> </a>
                    <a href='#x.com' className=' no-underline text-2xl p-2 rounded-[50%] hover:bg-gray-200'> <RiTwitterXLine /> </a>
                </div>
            </div>
            <hr />
            <p className=' text-gray-500 mb-3 mt-3'>©All the rights are reserved for 2024</p>
            <hr className='mb-7' />

        </div>
    );
}

export default Footer;