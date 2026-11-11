import { FaSearch } from 'react-icons/fa'
import blogPoster from '../assets/blog/blogPoster.png'
import blogImg1 from '../assets/blog/blogImg1.png'
import blogImg2 from '../assets/blog/blogImg2.png'
import blogImg3 from '../assets/blog/blogImg3.png'
import userImg1 from '../assets/blog/userImg1.png'
import userImg2 from '../assets/blog/userImg2.png'
import userImg3 from '../assets/blog/userImg3.png'
import userImg4 from '../assets/blog/userImg4.png'
import Newsletter from '../components/Newsletter'

const Blog = () => {

  const category = ['UI/UX Design', 'Web Development', 'Digital Marketing', 'AI & Automation', 'Product Updates'];

  const blog = [
    {
      id: 1,
      title: 'Top 5 Web Development Frameworks in 2025',
      image: blogImg1,
      text: "Explore the most powerful frameworks dominating the web development space in 2025 and how they're reshaping the digital world...",
      author: {
        name: 'Daniel Moore',
        image: userImg2,
        date: 'Oct 5 2024'
      }
    },
    {
      id: 2,
      title: 'How AI is Shaping the Future of UI Design',
      image: blogImg2,
      text: "Discover how artificial intelligence is revolutionizing user interfaces by automating design workflows and enhancing personalization...",
      author: {
        name: 'Sophia Ray',
        image: userImg3,
        date: 'Aug 8 2024'
      }
    },
    {
      id: 3,
      title: 'Boost Your Business with Data-Driven Marketing',
      image: blogImg3,
      text: "Learn the impact of data analytics in crafting targeted marketing strategies that drive growth and customer engagement...",
      author: {
        name: 'Sam Park',
        image: userImg4,
        date: 'Jul 12 2024'
      }
    }
  ]

  return (
    <div className='w-full pt-24 md:pt-28'>

      {/* Heading */}
      <div className='text-center mb-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>Latest Articles & Industry Insights</h2>
        <p className='text-gray-600 max-w-xl mx-auto mt-4 px-5 md:px-0 text-base'>From tech trends to creative strategies, our blog delivers valuable knowledge to keep you informed and inspired.</p>
      </div>

      {/* Search Bar */}
      <div className='w-4/5 md:max-w-md mx-auto my-4 relative'>
        <input type='text' placeholder='search articles...' className='w-full py-2 px-4 rounded-md bg-[#F1F1F1] outline-none' />
        <FaSearch className='absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-' />
      </div>

      {/* Category */}
      <div className='flex flex-wrap justify-center gap-3 mt-6'>
        {category.map((tag, index) => (
          <button key={index} className='px-4 py-1 text-xs lg:text-sm font-medium rounded-full bg-[#E7EFF3] text-[#1090CB] cursor-pointer'>{tag}</button>
        ))}
      </div>

      {/* Middle  */}
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 my-20'>
        <div className='w-full lg:w-2/5'>
          <img src={blogPoster} alt='blog_poster' className='w-full max-w-md mx-auto lg:max-w-lg rounded-md' />
        </div>

        <div className='w-full lg:w-3/5 text-left'>
          <h2 className='text-xl md:text-2xl text-gray-800 font-bold'>Why Responsive Design Is No Longer Optional in 2025</h2>
          <p className='text-gray-600 text-sm lg:text-base py-2 lg:py-4'>In today's fast-evolving digital landscape, users access websites from a variety of devices, phones, tablets, laptops, and even smart TVs. Responsive design is no longer a luxury but a necessity for delivering seamless user experiences across all screen sizes. In 2025, businesses that fail to adopt responsive design risk higher bounce rates, lower engagement, and lost revenue. Learn why optimizing for flexibility and accessibility is now a core pillar of modern web development.</p>

          {/* Author & Date */}
          <div className='flex items-center justify-between mt-2 w-4/5'>
            <div className='flex items-center gap-3'>
              <img src={userImg1} alt='user_img' className='w-8 h-8 rounded-full' />
              <div>
                <p className='text-sm font-semibold'>Emily Carter</p>
                <p className='text-xs text-gray-600'>May 5, 2025</p>
              </div>
            </div>
            <a href='#' className='text-[#1090CB] text-sm font-medium'>Read More</a>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className='max-w-7xl mx-auto my-20 md:my-32 md:px-4 xl:px-0'>
        <h2 className='text-xl md:text-2xl text-gray-700 font-bold px-4 text-center md:text-left'>Our latest blogs</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-6 my-5'>
          {blog.map(({ id, title, image, text, author }) => (
            <a href='#blog' key={id} className='shadow-md rounded-lg overflow-hidden max-w-xs md:max-w-sm mx-auto'>
              <img src={image} alt='blog_img' className='w-full h-48 md:h-60 object-cover rounded-t-xl' />
              <div className='px-5 py-8'>
                <h4 className='text-lg font-bold text-gray-700'>{title}</h4>
                <p className='text-sm md:text-base text-gray-600 mt-2'>{text}</p>
                <div className='flex items-center mt-4'>
                  <img src={author.image} alt={author.name} className='w-8 h-8 rounded-full' />
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-800'>{author.name}</p>
                    <p className='text-xs text-gray-500'>{author.date}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>

      {/* Newsletter  */}
      <Newsletter />

    </div>
  );
};

export default Blog
