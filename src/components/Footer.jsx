import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='py-12 px-10 border-t border-gray-300'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>

                <div>
                    <h1 className='text-2xl font-bold mb-3 text-[#1090CB]'>Pro<span className='text-gray-800'>Play</span></h1>
                    <p className='text-gray-600 text-sm'>Crafting high-performance digital products, interactive applications, and scalable web solutions that empower modern brands.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-800'>Quick Links</h3>
                    <ul className='space-y-2 text-gray-600 text-sm'>
                        <li><Link to='/' className='hover:text-[#1090CB] transition'>Home</Link></li>
                        <li><Link to='/about' className='hover:text-[#1090CB] transition'>About</Link></li>
                        <li><Link to='/services' className='hover:text-[#1090CB] transition'>Services</Link></li>
                        <li><Link to='/blog' className='hover:text-[#1090CB] transition'>Blog</Link></li>
                        <li><Link to='/contact' className='hover:text-[#1090CB] transition'>Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info: Primary & Alternative */}
                <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-800'>Contact Details</h3>
                    <div className='space-y-2 text-sm text-gray-600'>
                        <div>
                            <span className='text-xs font-semibold uppercase tracking-wider text-[#1090CB] block'>Primary Inquiries:</span>
                            <a href='mailto:hello@proplay.agency' className='hover:text-[#1090CB] transition'>hello@proplay.agency</a>
                            <span className='block text-xs text-gray-500'>+1 (800) 482-9173</span>
                        </div>
                        <div className='pt-1'>
                            <span className='text-xs font-semibold uppercase tracking-wider text-gray-500 block'>Alternative / Support:</span>
                            <a href='mailto:support@proplay.agency' className='hover:text-[#1090CB] transition'>support@proplay.agency</a>
                            <span className='block text-xs text-gray-500'>+1 (415) 890-5421 (WhatsApp)</span>
                        </div>
                        <p className='text-xs text-gray-500 pt-1'>Bangalore (HQ) • San Francisco</p>
                    </div>
                </div>

                {/* Social Links & Hours */}
                <div>
                    <h3 className='text-lg font-semibold mb-3 text-gray-800'>Connect & Hours</h3>
                    <p className='text-xs text-gray-600 mb-3'>Mon – Fri: 9:00 AM – 6:00 PM<br/>Sat: 10:00 AM – 2:00 PM (Emergency)</p>
                    <div className='flex items-center gap-3'>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer' aria-label='Facebook' className='text-blue-700 p-2 rounded-full shadow-md shadow-gray-200 hover:scale-105 transition bg-white'><FaFacebookF className='w-4 h-4' /></a>
                        <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram' className='text-pink-700 p-2 rounded-full shadow-md shadow-gray-200 hover:scale-105 transition bg-white'><FaInstagram className='w-4 h-4' /></a>
                        <a href='https://twitter.com' target='_blank' rel='noreferrer' aria-label='Twitter' className='text-gray-900 p-2 rounded-full shadow-md shadow-gray-200 hover:scale-105 transition bg-white'><FaXTwitter className=' w-4 h-4' /></a>
                        <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='text-blue-700 p-2 rounded-full shadow-md shadow-gray-200 hover:scale-105 transition bg-white'><FaLinkedinIn className='w-4 h-4' /></a>
                    </div>
                </div>
            </div>

            <hr className='text-gray-200 my-8' />

            <div className='text-center text-gray-500 text-sm'>
                Copyright © {new Date().getFullYear()} Pro Play. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
