
const Newsletter = () => {
    return (
        <div className='bg-[#E8F4FA] py-20 md:py-36 mt-10 flex flex-col items-center justify-center'>
            
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold w-full md:w-3/4 lg:w-2/5 px-4 text-center text-gray-800'>Stay informed with the latest news, tips, and updates</h2>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-2 mt-10 w-4/5 md:w-3/5 lg:w-2/5'>

                <input type='text' placeholder='Enter your email...' className='bg-white text-gray-700 font-medium rounded-lg outline-none py-3 px-5 w-full' />

                <button className='w-fit px-5 py-3 md:py-4 bg-black text-white text-xs font-semibold uppercase rounded-lg cursor-pointer active:scale-95 transition duration-300'>subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter
