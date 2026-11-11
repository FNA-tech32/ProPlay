import { useState } from 'react'
import { MdMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ['home', 'about', 'services', 'blog'];

    return (
        <header className='w-full fixed top-0 left-0 z-50 bg-white'>
            <div className='mx-auto px-4 md:px-10 flex items-center justify-between h-16'>
               
                <Link to='/' className='text-2xl font-bold text-[#1090CB] tracking-tight hover:opacity-90 transition'>
                    Pro<span className='text-gray-800'>Play</span>
                </Link>

                {/* Desktop Nav */}
                <nav className='hidden md:flex space-x-8 items-center'>
                    {navLinks.map((link) => (
                        <Link key={link} to={link=='home' ? '/' : link} className='text-gray-700 font-medium transition capitalize'>{link}</Link>
                    ))}
                    <Link to='/contact' className='px-5 py-2 bg-[#1090CB] text-white font-medium rounded-md transition active:scale-95 ease-in duration-300'>Contact Us</Link>
                </nav>

                {/* Mobile Menu Icon */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross2 size={28} /> : <MdMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white shadow-md text-center px-4 pb-4'>
                    {navLinks.map((link) => (
                        <Link key={link} to={link=='home' ? '/' : link} className='block py-2 text-gray-700 font-medium transition capitalize' onClick={() => setIsOpen(!isOpen)}>{link}</Link>
                    ))}
                    <Link to='/contact' className='mt-2 inline-block w-fit text-center px-4 py-2 bg-[#1090CB] text-white rounded-md font-medium transition capitalize' onClick={() => setIsOpen(!isOpen)}>contact us</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar
