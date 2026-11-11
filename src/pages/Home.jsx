import Hero from '../components/Hero'
import { MdDashboard } from 'react-icons/md';
import { TbSeo } from 'react-icons/tb';
import { PiVirtualReality } from 'react-icons/pi';
import { FiSmartphone } from 'react-icons/fi';
import TextCard from '../components/TextCard'
import mobileImg from '../assets/home/mobileImg.png'
import webImg from '../assets/home/webImg.png'
import VRImg from '../assets/home/VRImg.png'
import brand1 from '../assets/brands/brand1.png'
import brand2 from '../assets/brands/brand2.png'
import brand3 from '../assets/brands/brand3.png'
import brand4 from '../assets/brands/brand4.png'
import Newsletter from '../components/Newsletter';

const Home = () => {

  const services = [
    {
      id: 1,
      icon: <MdDashboard size={22} />,
      title: 'Web Application',
      description: 'Modern, scalable web apps',
      style: 'bg-[#EFEAFF] text-[#4628A4]'
    },
    {
      id: 2,
      icon: <TbSeo size={22} />,
      title: 'SEO',
      description: 'Boost search visibility',
      style: 'bg-[#ECFFDA] text-[#5FC300]'
    },
    {
      id: 3,
      icon: <PiVirtualReality size={22} />,
      title: 'AR/VR Solution',
      description: 'Immersive digital experiences',
      style: 'bg-[#DAE6FF] text-[#00329B]'
    },
    {
      id: 4,
      icon: <FiSmartphone size={22} />,
      title: 'Mobile Application',
      description: 'iOS & Android apps',
      style: 'bg-[#FFE5DA] text-[#BB3800]'
    }
  ]

  return (
    <div>
      <Hero />

      {/* Services  */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-y-4'>
          {services.map(({ id, icon, title, description, style }) => (
            <div key={id} className='flex items-center justify-center w-fit mx-4 lg:mx-0'>
              <div className={`p-4 rounded-2xl ${style}`}>{icon}</div>
              <div className='ml-4'>
                <h3 className='font-medium'>{title}</h3>
                <p className='text-gray-500'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='w-full text-gray-300' />

      {/* Service Details  */}
      <div className='flex flex-col py-20 items-center justify-center'>
        <h2 className='font-bold text-[#252525] text-2xl md:text-3xl lg:text-4xl text-center mx-2 lg:mx-0'>Crafting Impactful Digital Experiences That Scale</h2>
        <p className='py-3 text-gray-600 w-full md:w-4/5 lg:w-2/5 text-center'>We offer a range of modern digital services designed to elevate your brand, optimize operations, and deliver meaningful results in a rapidly evolving online world.</p>
      </div>

      <div>
        <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-3 md:gap-12 py-10'>
          <TextCard heading='Building Seamless Mobile Experiences' description="We create high-performance mobile applications tailored to your business goals and user needs, Whether it's iOS Android, or cross-platform, our apps combine sleek design with robust functionality to keep your brand connected, accessible, and competitive in the mobile-first world." className='w-full md:w-2/5' head_class='font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl' desc_class='text-gray-600 py-2' />
          <img src={mobileImg} alt='mobile-application' className='w-full max-w-md mx-auto md:max-w-sm lg:max-w-xl' />
        </div>

        <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row-reverse items-center gap-3 md:gap-12 py-10'>
          <TextCard heading='Custom Web Solutions That Scale With You' description="We build secure, scalable, and high-performing web applications tailored to your business needs. From dynamic dashboards to full-fledged platforms, our solutions combine modern technology with seamless user experience to help you grow, adapt, and lead in the digital space." className='w-full md:w-2/5' head_class='font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl' desc_class='text-gray-600 py-2' />
          <img src={webImg} alt='web-solution' className='w-full max-w-md mx-auto md:max-w-sm lg:max-w-xl' />
        </div>

        <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-3 md:gap-12 py-10'>
          <TextCard heading='Immersive AR/VR Experiences That Redefine Interaction' description="We craft cutting-edge augmented and virtual reality solutions that transform how users engage with digital environments. From virtual tours to interactive product showcases, our AR/VR applications bring stories, services, and spaces to life—enhancing engagement, training, and customer experience across industries." className='w-full md:w-2/5' head_class='font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl' desc_class='text-gray-600 py-2' />
          <img src={VRImg} alt='AR/VR-solution' className='w-full max-w-md mx-auto md:max-w-sm lg:max-w-xl' />
        </div>
      </div>

      {/* Additional Services  */}
      <div className='w-full lg:max-w-7xl mx-auto flex flex-col md:flex-row gap-3 md:gap-12 my-20'>
        <div className='text-center mx-2 md:mx-0 my-5 p-8 md:p-14 bg-gray-200 rounded-xl'>
          <TextCard heading='Reliable Support That Has Your Back' description="From project kickoff to post-launch, our team is always here for you. We believe in clear communication, fast responses, and ongoing guidance—so you're never left wondering what's next or dealing with issues alone." head_class='text-xl md:text-2xl font-bold text-gray-800 py-2' desc_class='text-gray-700 py-2' />
          <button className='my-4 bg-[#1090CB] text-white px-7 py-2 font-medium rounded-lg active:scale-95 transition duration-300 cursor-pointer'>View More</button>
        </div>
        <div className='text-center mx-2 md:mx-0 my-5 p-8 md:p-14 bg-[#1090CB] rounded-xl'>
          <TextCard heading='Digital Strategy Rooted in Your Goals' description="Before writing a single line of code, we help you shape a clear digital roadmap. Our consultative approach ensures your vision aligns with real-world user needs and business growth—turning ideas into actionable, scalable solutions." head_class='text-xl md:text-2xl font-bold text-gray-100 py-2' desc_class='text-gray-100 py-2' />
          <button className='my-4 bg-gray-100 text-[#1090CB] px-7 py-2 font-medium rounded-lg active:scale-95 transition duration-300 cursor-pointer'>View More</button>
        </div>
      </div>

      {/* Brands  */}
      <div className='flex flex-col items-center justify-center m-4 md:mx-auto'>
        <h2 className='text-gray-700 font-bold text-xl md:text-2xl my-4'>Companies, we have worked with</h2>
        <div className='w-full lg:max-w-7xl flex flex-wrap items-center justify-center mt-3'>
          <img src={brand4} alt="brand4" className='w-[80px] md:w-[150px] mx-3 md:mx-6 lg:mx-10' />
          <img src={brand3} alt="brand3" className='w-[80px] md:w-[150px] mx-3 md:mx-6 lg:mx-10' />
          <img src={brand2} alt="brand2" className='w-[80px] md:w-[150px] mx-3 md:mx-6 lg:mx-10' />
          <img src={brand1} alt="brand1" className='w-[80px] md:w-[150px] mx-3 md:mx-6 lg:mx-10' />
        </div>
      </div>

      {/* Newsletter  */}
      <Newsletter />

    </div>
  )
}

export default Home
