import RectangleImg1 from '../assets/about/RectangleImg1.png'
import RectangleImg2 from '../assets/about/RectangleImg2.png'
import RectangleImg3 from '../assets/about/RectangleImg3.png'
import RectangleImg4 from '../assets/about/RectangleImg4.png'
import TextCard from '../components/TextCard'
import { CgWebsite } from 'react-icons/cg'
import { IoIosRocket } from 'react-icons/io'
import { CiMobile3 } from 'react-icons/ci'
import { BsHeadsetVr } from 'react-icons/bs';
import Newsletter from '../components/Newsletter'
import { Link } from 'react-router'

const About = () => {

  const services = [
    {
      id: 1,
      icon: <CgWebsite />,
      title: 'Web Application',
      style: 'text-[#FF4E4E] bg-[#FFF2F2]'
    },
    {
      id: 2,
      icon: <IoIosRocket />,
      title: 'SEO',
      style: 'text-[#0073C6] bg-[#E2F3FF]'
    },
    {
      id: 3,
      icon: <CiMobile3 />,
      title: 'Mobile Application',
      style: 'text-[#6E00FA] bg-[#F1E8FF]'
    },
    {
      id: 4,
      icon: <BsHeadsetVr />,
      title: 'AR / VR',
      style: 'text-[#900078] bg-[#FFE7FB]'
    }
  ]

  return (
    <div className='bg-gray-50'>
      {/* Top  */}
      <div className='max-w-7xl mx-auto pt-28 md:pt-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-3 items-start lg:m-10 xl:m-0'>

          <div className='flex justify-center lg:justify-end items-end'>
            <img src={RectangleImg1} alt='about_img1' className='mx-2 w-[150px] md:w-[250px] lg:w-full' />
            <img src={RectangleImg2} alt='about_img2' className='mx-2 w-[150px] md:w-[250px] lg:w-full' />
          </div>

          <div className='px-6 lg:px-0 mt-5 lg:mt-0'>
            <h1 className='text-[#1090CB] text-xl font-semibold'>About us</h1>
            <TextCard heading='Driving Digital Transformation with Creativity, Strategy & Technology' description="At Pro Play, we combine design thinking, cutting-edge technology, and a passion for innovation to help businesses grow and thrive in the digital world. Our team of strategists, designers, and developers work closely with clients to turn ideas into impactful, user-focused digital experiences. From concept to launch, we ensure every detail aligns with your brand vision and user needs." head_class='text-xl font-bold text-gray-700 my-4 w-full lg:w-4/5' desc_class='my-4 text-gray-600 w-full lg:w-4/5' />
          </div>

          <div className='flex items-start justify-center lg:justify-end m-5 md:m-0'>
            <img src={RectangleImg3} alt='about_img3' />
          </div>

          <div className='hidden lg:block'>
            <img src={RectangleImg4} alt='about_img4' />
          </div>

        </div>
      </div>

      {/* Heading  */}
      <div className='my-20'>
        <TextCard heading='Crafting digital journeys that drive impact, innovation, and identity' description="At Pro Play, we blend creativity with technology to build powerful digital experiences. From innovative designs to scalable web solutions, our mission is to help businesses grow, connect, and thrive in the digital age." className='flex flex-col items-center justify-center' head_class='font-bold text-[#1090BC] text-2xl lg:text-3xl text-center mx-3 lg:mx-0' desc_class='p-3 text-gray-600 w-full md:w-4/5 lg:w-3/5 text-center' />
      </div>

      {/* Bottom  */}
      <div className='flex flex-col lg:flex-row items-center justify-center mt-20 md:mb-32'>
        <div className='w-[90%] lg:w-1/2 md:ml-20 md:mr-10'>
          <TextCard heading='Driven by Creativity, Focused on Results' description="We believe in creating more than just beautiful interfaces — we build meaningful digital experiences. Our multidisciplinary team collaborates with forward-thinking brands to craft solutions that engage, inspire, and deliver real results. By blending creativity with strategy and technology, we help businesses grow with confidence in the digital era." className='flex flex-col items-center md:items-start' head_class='py-5 text-xl md:text-2xl font-bold text-gray-700' desc_class='text-gray-600' />

          <Link to='/contact' className='inline-block mt-7 px-5 md:px-8 py-2 bg-transparent border-2 border-[#1090CB] text-[#1090CB] text-sm md:text-base rounded-md font-medium transition active:scale-95 duration-300 cursor-pointer'>Contact Us</Link>
        </div>

        <div className='w-full lg:w-1/2 bg-white md:shadow-lg shadow-gray-300 p-5 md:p-10 mt-10 lg:mt-0'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {services.map(({ id, title, icon, style }) => (
              <div key={id} className='flex items-center justify-center w-fit m-5'>
                <div className={`p-4 rounded-2xl text-xl md:text-2xl lg:text-3xl ${style}`}>{icon}</div>
                <h3 className='ml-5 text-gray-700 text-lg font-medium'>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter  */}
      <Newsletter />

    </div>
  );
};

export default About
