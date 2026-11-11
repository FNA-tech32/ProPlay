import { Link } from 'react-router';
import heroImage from '../assets/home/heroImage.png'

const Hero = () => {
    return (
        <section className='pt-28 lg:pt-24 pb-16 bg-blue-400/10'>
            <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12'>

                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>Designing & Developing <span className='text-[#1090CB]'>Web Experiences</span> That Drive Growth</h1>

                    <p className='text-gray-600 md:text-lg mb-8'>Pro Play is a modern web agency crafting high-performance websites and digital solutions that drive business growth. From design to deployment, we build with purpose and precision.</p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                        <Link to='/contact' className='px-8 py-2 bg-[#1090CB] text-white rounded-md font-medium transition active:scale-95 duration-300'>Contact Us</Link>
                        <Link to='/services' className='px-8 py-2 bg-transparent border-2 border-[#1090CB] text-[#1090CB] rounded-md font-medium transition active:scale-95 duration-300'>View more</Link>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <img src={heroImage} alt='poster' className='w-full max-w-md mx-auto lg:max-w-xl'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
