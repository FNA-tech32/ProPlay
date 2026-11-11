import { FaMobileAlt, FaRocket, FaGlobe, FaVrCardboard } from 'react-icons/fa'
import speakerImg from '../assets/services/speakerImg.png'
import serviceImg from '../assets/services/serviceImg.png'
import { Link } from 'react-router';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: 'Mobile Applications',
      description: 'Custom mobile apps that perform across devices.',
      style: 'bg-[#F1E8FF] text-[#6E00FA]'
    },
    {
      id: 2,
      icon: <FaGlobe />,
      title: 'Web Application',
      description: 'Responsive web apps built for speed and reliability.',
      style: 'bg-[#FFF2F2] text-[#FF4E4E]'
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: 'SEO',
      description: 'Smarter SEO to get you ranked, found, and growing.',
      style: 'bg-[#E2F3FF] text-[#0073C6]'
    },
    {
      id: 4,
      icon: <FaVrCardboard />,
      title: 'AR/VR Solutions',
      description: 'Immersive AR/VR experiences that elevate user interaction.',
      style: 'bg-[#FFE7FB] text-[#B50097]'
    }
  ]

  const stats = [
    {
      id: 1,
      num: '6',
      title: 'Countries'
    },
    {
      id: 2,
      num: '81',
      title: 'Projects'
    },
    {
      id: 3,
      num: '7M',
      title: 'Transactions'
    },
    {
      id: 4,
      num: '6000+',
      title: 'Customers'
    }
  ]

  return (
    <div>
      {/* Top Section*/}
      <div className='flex flex-col items-center text-center px-4 w-full bg-blue-400/10 py-28'>
        <div className='bg-white p-3 rounded-full shadow-md mb-4'>
          <img src={speakerImg} alt='speaker_icon' className='w-10 h-10' />
        </div>
        <h2 className='text-2xl md:text-3xl font-bold'>
          Our <span className='text-[#1090CB]'>Services</span>
        </h2>
        <p className='max-w-xl text-gray-500 my-2 md:my-4 text-sm md:text-base'>
          At Pro Play, we deliver cutting-edge digital solutions designed to help your business grow, scale, and stand out in a competitive market.
        </p>
      </div>

      {/* Services */}
      <div className='max-w-4xl mx-auto bg-white rounded md:shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 -mt-24'>
        {services.map(({ id, icon, title, description, style }, index) => (
          <div key={id} className={`flex items-center justify-center w-full my-3 md:my-0 md:p-5 ${(index === 0) ? 'md:border-b-[0.5px] md:border-r-[0.5px] md:border-gray-200' : ''} ${(index === 1) ? 'md:border-b-[0.5px] md:border-l-[0.5px] md:border-gray-200' : ''} ${(index === 2) ? 'md:border-t-[0.5px] md:border-r-[0.5px] md:border-gray-200' : ''} ${(index === 3) ? 'md:border-t-[0.5px] md:border-l-[0.5px] md:border-gray-200' : ''} `} >
            <div className={`p-4 rounded-2xl text-xl md:text-2xl ${style}`}>{icon}</div>
            <div className='ml-5'>
              <h3 className='text-gray-700 text-lg font-semibold'>{title}</h3>
              <p className='text-sm text-gray-600 py-1'>{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle part  */}
      <div className='my-5 md:my-14 py-10'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12'>

          <div className='w-full lg:w-1/2 text-left'>
            <h1 className='text-xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight'>Transforming <span className='text-[#1090CB]'>Ideas</span> into <span className='text-[#1090CB]'>Impactful Digital Experiences</span> for Modern Brands</h1>

            <p className='text-gray-600 py-2'>At Pro Play, we specialize in building intuitive, scalable, and high-performing digital products that align with your business goals. From strategy to execution, we help turn vision into measurable success.</p>

            <p className='text-gray-600 py-2'>Our mission is to transform bold ideas into impactful digital experiences that captivate users, drive engagement, and fuel long-term business growth.</p>

            <div className='flex justify-center lg:justify-start'>
              <Link to='/contact' className='mt-4 px-6 md:px-8 py-2 text-sm md:text-base bg-transparent border-2 border-[#1090CB] text-[#1090CB] rounded-md font-medium transition active:scale-95 duration-300'>Contact Us</Link>
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            <img src={serviceImg} alt='service_poster' className='w-full p-4 max-w-md mx-auto lg:max-w-lg' />
          </div>
        </div>
      </div>

      {/* Bottom  */}
      <div className='w-full bg-[#1090CB] text-white py-16 md:py-24'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-5'>
          {stats.map(({ id, num, title }) => (
            <div key={id} className='flex flex-col items-center justify-center'>
              <h2 className='text-3xl md:text-6xl font-semibold'>{num}</h2>
              <p className='py-1'>{title}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services
