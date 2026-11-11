import { useState } from 'react'
import mapImg from '../assets/contact/mapImg.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoLocationSharp, IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdEmail, MdAccessTimeFilled, MdSupportAgent } from 'react-icons/md'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Web Development',
    channel: 'Email',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: 'Web Development',
      channel: 'Email',
      message: ''
    })
    setSubmitted(false)
  }

  return (
    <div>
      {/* Top Section */}
      <div className='py-20 lg:py-24 mt-5'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12'>
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <span className='inline-block text-[#1090CB] font-semibold text-sm uppercase tracking-wider mb-2'>
              Get In Touch With Pro Play
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
              Let's Collaborate & Build Something Exceptional
            </h2>
            <p className='text-gray-600 lg:text-lg w-full md:w-4/5 md:mx-auto lg:mx-0'>
              We're here to help bring your ideas to life with seamless digital solutions, custom web applications, and immersive experiences tailored for modern brands.
            </p>

            {/* Social Links */}
            <div className='mt-8 flex items-center justify-center lg:justify-start gap-3'>
              <a href='https://facebook.com' target='_blank' rel='noreferrer' aria-label='Facebook' className='text-blue-700 p-2.5 rounded-full shadow-md shadow-gray-200 bg-white hover:scale-105 transition'>
                <FaFacebookF className='w-4 h-4' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram' className='text-pink-600 p-2.5 rounded-full shadow-md shadow-gray-200 bg-white hover:scale-105 transition'>
                <FaInstagram className='w-4 h-4' />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noreferrer' aria-label='Twitter' className='text-black p-2.5 rounded-full shadow-md shadow-gray-200 bg-white hover:scale-105 transition'>
                <FaXTwitter className='w-4 h-4' />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='text-blue-700 p-2.5 rounded-full shadow-md shadow-gray-200 bg-white hover:scale-105 transition'>
                <FaLinkedinIn className='w-4 h-4' />
              </a>
              <a href='https://wa.me/14158905421' target='_blank' rel='noreferrer' aria-label='WhatsApp' className='text-emerald-600 p-2.5 rounded-full shadow-md shadow-gray-200 bg-white hover:scale-105 transition'>
                <FaWhatsapp className='w-4 h-4' />
              </a>
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            <img src={mapImg} alt='Pro Play Office Map' className='w-full max-w-md mx-auto lg:max-w-xl rounded-xl shadow-sm' />
          </div>
        </div>
      </div>

      {/* Primary & Alternative Contact Details Cards */}
      <div className='max-w-7xl mx-auto px-4 md:px-8 pb-16'>
        <div className='text-center max-w-2xl mx-auto mb-10'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>Direct Contact Channels</h3>
          <p className='text-gray-600 text-sm md:text-base mt-2'>
            Choose between our primary desk or alternative support channels for immediate assistance.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Primary Channel */}
          <div className='bg-white p-6 rounded-2xl border-2 border-[#1090CB]/30 shadow-md hover:shadow-lg transition flex flex-col justify-between'>
            <div>
              <div className='flex items-center justify-between mb-4'>
                <span className='px-3 py-1 bg-[#1090CB]/10 text-[#1090CB] text-xs font-bold uppercase rounded-full tracking-wider'>
                  Primary Channel
                </span>
                <BiSolidPhoneCall className='w-6 h-6 text-[#1090CB]' />
              </div>
              <h4 className='text-lg font-bold text-gray-800 mb-2'>Headquarters & Sales Desk</h4>
              <p className='text-gray-600 text-sm mb-4'>
                For new project inquiries, client onboarding, and general partnerships.
              </p>
              <div className='space-y-2 text-sm text-gray-700'>
                <div className='flex items-center gap-2'>
                  <BiSolidPhoneCall className='text-[#1090CB] shrink-0' />
                  <a href='tel:+18004829173' className='hover:text-[#1090CB] font-medium'>+1 (800) 482-9173</a>
                  <span className='text-xs text-gray-400'>/ +91 98765 43210</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MdEmail className='text-[#1090CB] shrink-0' />
                  <a href='mailto:hello@proplay.agency' className='hover:text-[#1090CB] font-medium'>hello@proplay.agency</a>
                </div>
                <div className='flex items-start gap-2 pt-1'>
                  <IoLocationSharp className='text-[#1090CB] shrink-0 mt-0.5' />
                  <span className='text-xs text-gray-600'>Tech Hub Tower, 4th Floor, Silicon Avenue, Bangalore, Karnataka 560100, India</span>
                </div>
              </div>
            </div>
            <div className='mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-600 font-medium'>
              <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
              Available Mon – Fri (9 AM – 6 PM IST)
            </div>
          </div>

          {/* Alternative / Secondary Channel */}
          <div className='bg-white p-6 rounded-2xl border-2 border-emerald-500/30 shadow-md hover:shadow-lg transition flex flex-col justify-between'>
            <div>
              <div className='flex items-center justify-between mb-4'>
                <span className='px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-full tracking-wider'>
                  Alternative Channel
                </span>
                <MdSupportAgent className='w-6 h-6 text-emerald-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-800 mb-2'>Support & WhatsApp Desk</h4>
              <p className='text-gray-600 text-sm mb-4'>
                For active projects, technical troubleshooting, and direct instant messaging.
              </p>
              <div className='space-y-2 text-sm text-gray-700'>
                <div className='flex items-center gap-2'>
                  <FaWhatsapp className='text-emerald-600 shrink-0' />
                  <a href='https://wa.me/14158905421' target='_blank' rel='noreferrer' className='hover:text-emerald-600 font-medium'>+1 (415) 890-5421</a>
                  <span className='text-xs text-gray-400'>/ +91 98765 43211</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MdEmail className='text-emerald-600 shrink-0' />
                  <a href='mailto:support@proplay.agency' className='hover:text-emerald-600 font-medium'>support@proplay.agency</a>
                </div>
                <div className='flex items-start gap-2 pt-1'>
                  <IoLocationSharp className='text-emerald-600 shrink-0 mt-0.5' />
                  <span className='text-xs text-gray-600'>548 Market Street, Suite 3200, San Francisco, CA 94104, United States</span>
                </div>
              </div>
            </div>
            <div className='mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-emerald-600 font-medium'>
              <span className='w-2 h-2 rounded-full bg-emerald-500'></span>
              Direct Support & WhatsApp Active
            </div>
          </div>

          {/* Working Hours & SLAs */}
          <div className='bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition flex flex-col justify-between md:col-span-2 lg:col-span-1'>
            <div>
              <div className='flex items-center justify-between mb-4'>
                <span className='px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider'>
                  Working Hours
                </span>
                <MdAccessTimeFilled className='w-6 h-6 text-blue-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-800 mb-2'>Service Availability</h4>
              <p className='text-gray-600 text-sm mb-4'>
                Our cross-functional teams operate across global timezones to ensure seamless delivery.
              </p>
              <div className='space-y-2.5 text-xs text-gray-600'>
                <div className='flex justify-between border-b border-gray-100 pb-1.5'>
                  <span className='font-medium text-gray-800'>Monday – Friday:</span>
                  <span>9:00 AM – 6:00 PM EST / IST</span>
                </div>
                <div className='flex justify-between border-b border-gray-100 pb-1.5'>
                  <span className='font-medium text-gray-800'>Saturday:</span>
                  <span>10:00 AM – 2:00 PM (Emergency)</span>
                </div>
                <div className='flex justify-between border-b border-gray-100 pb-1.5'>
                  <span className='font-medium text-gray-800'>Sunday:</span>
                  <span className='text-gray-400'>Closed (Ticket Monitoring)</span>
                </div>
                <div className='flex justify-between'>
                  <span className='font-medium text-gray-800'>Typical Response:</span>
                  <span className='text-[#1090CB] font-semibold'>Under 2 Hours</span>
                </div>
              </div>
            </div>
            <div className='mt-5 pt-3 border-t border-gray-100 text-xs text-gray-500'>
              Need expedited assistance? Ping us via WhatsApp.
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form */}
      <div className='bg-blue-400/10 py-16 md:py-20 px-6 lg:px-48 border-t border-blue-100'>
        <div className='text-center mb-10'>
          <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>Say Hello to Pro Play!</h3>
          <p className='text-gray-600 md:text-lg mt-2'>Have an idea? Let's discuss requirements and provide a transparent quote.</p>
        </div>

        {submitted ? (
          <div className='max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md text-center'>
            <div className='w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <IoCheckmarkCircleSharp className='w-8 h-8' />
            </div>
            <h4 className='text-2xl font-bold text-gray-800 mb-2'>Thank You!</h4>
            <p className='text-gray-600 mb-6'>
              Your message has been dispatched to both our primary inquiry desk and client success managers. We will review your project details and respond within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className='bg-[#1090CB] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0c78a8] transition active:scale-95 cursor-pointer'
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white'>
            <div className='flex flex-col'>
              <label htmlFor='firstName' className='mb-1 text-gray-700 text-sm font-medium'>First Name *</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='e.g. Alex'
                required
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='lastName' className='mb-1 text-gray-700 text-sm font-medium'>Last Name *</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='e.g. Morgan'
                required
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='email' className='mb-1 text-gray-700 text-sm font-medium'>Email Address *</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='alex@company.com'
                required
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='phone' className='mb-1 text-gray-700 text-sm font-medium'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+1 (555) 000-0000'
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='service' className='mb-1 text-gray-700 text-sm font-medium'>Service Required</label>
              <select
                id='service'
                name='service'
                value={formData.service}
                onChange={handleChange}
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              >
                <option value='Web Development'>Web Application Development</option>
                <option value='Mobile Application'>Mobile App Development (iOS & Android)</option>
                <option value='SEO & Performance'>SEO & Search Visibility</option>
                <option value='AR/VR Solutions'>AR / VR Solutions & 3D Web</option>
                <option value='Full Digital Strategy'>Full Digital Transformation</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor='channel' className='mb-1 text-gray-700 text-sm font-medium'>Preferred Communication</label>
              <select
                id='channel'
                name='channel'
                value={formData.channel}
                onChange={handleChange}
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              >
                <option value='Email'>Primary Email (hello@proplay.agency)</option>
                <option value='Phone'>Direct Phone Call (+1 800 482 9173)</option>
                <option value='WhatsApp'>WhatsApp Hotline (+1 415 890 5421)</option>
                <option value='Support'>Technical Support Desk</option>
              </select>
            </div>

            <div className='flex flex-col md:col-span-2'>
              <label htmlFor='message' className='mb-1 text-gray-700 text-sm font-medium'>Project Brief & Message *</label>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell us about your project goals, scope, timeline, and requirements...'
                required
                className='px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#1090CB] focus:ring-2 focus:ring-[#1090CB]/20 outline-none w-full transition text-sm'
              ></textarea>
            </div>

            <div className='md:col-span-2 flex justify-center mt-2'>
              <button
                type='submit'
                className='bg-[#1090CB] hover:bg-[#0c78a8] text-white font-medium px-8 py-3 rounded-lg transition active:scale-95 duration-300 cursor-pointer shadow-md shadow-blue-500/20'
              >
                Get In Touch With Pro Play
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
