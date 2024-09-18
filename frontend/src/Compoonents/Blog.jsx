import React from 'react'
import IMAGES from '../images'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
   <>
   <div className="pt-[120px]"></div>
   <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 px-3'>

    <div className='bg-light mx-3 rounded-lg py-3 my-5'>
        <div className='px-2 flex gap-3 relative'>
                <span className='w-[50px] h-[50px] bg-sky-400 rounded-[50%]'></span>
                <span className='absolute bottom-0 left-20 poppins font-semibold'>
                    Saif khan
                    <br />
                    <span className='text-gray-400 font-normal text-sm'>Provider</span>
                </span>
        </div>

        <div className=' my-2 '>
            <img src={IMAGES.blog1} alt="" />
        </div>
        <div className='pl-3'>
            <h1 className='my-2 luxuria font-bold'>Title</h1>
            <p className='luxuria font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo minus, dolorem veritatis ratione, optio commodi ex ad repudiandae cupiditate veniam!
            </p>
            <Link to="/blog" className='poppins underline font-light my-3'>Read more</Link>
        </div>
    </div>

    <div className='bg-light mx-3 rounded-lg py-3 my-5'>
        <div className='px-2 flex gap-3 relative'>
                <span className='w-[50px] h-[50px] bg-sky-400 rounded-[50%]'></span>
                <span className='absolute bottom-0 left-20 poppins font-semibold'>
                    Saif khan
                    <br />
                    <span className='text-gray-400 font-normal text-sm'>Provider</span>
                </span>
        </div>

        <div className=' my-2 '>
            <img src={IMAGES.blog2} alt="" />
        </div>
        <div className='pl-3'>
            <h1 className='my-2 luxuria font-bold'>Title</h1>
            <p className='luxuria font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo minus, dolorem veritatis ratione, optio commodi ex ad repudiandae cupiditate veniam!
            </p>
            <Link to="/blog">Read more</Link>
        </div>
    </div>
    <div className='bg-light mx-3 rounded-lg py-3 my-5'>
        <div className='px-2 flex gap-3 relative'>
                <span className='w-[50px] h-[50px] bg-sky-400 rounded-[50%]'></span>
                <span className='absolute bottom-0 left-20 poppins font-semibold'>
                    Saif khan
                    <br />
                    <span className='text-gray-400 font-normal text-sm'>Provider</span>
                </span>
        </div>

        <div className=' my-2 '>
            <img src={IMAGES.blog3} alt="" />
        </div>
        <div className='pl-3'>
            <h1 className='my-2 luxuria font-bold'>Title</h1>
            <p className='luxuria font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo minus, dolorem veritatis ratione, optio commodi ex ad repudiandae cupiditate veniam!
            </p>
            <Link to="/blog">Read more</Link>
        </div>
    </div>
    <div className='bg-light mx-3 rounded-lg py-3 my-5'>
        <div className='px-2 flex gap-3 relative'>
                <span className='w-[50px] h-[50px] bg-sky-400 rounded-[50%]'></span>
                <span className='absolute bottom-0 left-20 poppins font-semibold'>
                    Saif khan
                    <br />
                    <span className='text-gray-400 font-normal text-sm'>Provider</span>
                </span>
        </div>

        <div className=' my-2 '>
            <img src={IMAGES.blog4} alt="" />
        </div>
        <div className='pl-3'>
            <h1 className='my-2 luxuria font-bold'>Title</h1>
            <p className='luxuria font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo minus, dolorem veritatis ratione, optio commodi ex ad repudiandae cupiditate veniam!
            </p>
            <Link to="/blog">Read more</Link>
        </div>
    </div>
    <div className='bg-light mx-3 rounded-lg py-3 my-5'>
        <div className='px-2 flex gap-3 relative'>
                <span className='w-[50px] h-[50px] bg-sky-400 rounded-[50%]'></span>
                <span className='absolute bottom-0 left-20 poppins font-semibold'>
                    Saif khan
                    <br />
                    <span className='text-gray-400 font-normal text-sm'>Provider</span>
                </span>
        </div>

        <div className=' my-2 '>
            <img src={IMAGES.blog5} alt="" />
        </div>
        <div className='pl-3'>
            <h1 className='my-2 luxuria font-bold'>Title</h1>
            <p className='luxuria font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo minus, dolorem veritatis ratione, optio commodi ex ad repudiandae cupiditate veniam!
            </p>
            <Link to="/blog">Read more</Link>
        </div>
    </div>
    <div className='bg-light mx-3 rounded-lg py-3 my-5'>
        <div className='px-2 flex gap-3 relative'>
                <span className='w-[50px] h-[50px] bg-sky-400 rounded-[50%]'></span>
                <span className='absolute bottom-0 left-20 poppins font-semibold'>
                    Saif khan
                    <br />
                    <span className='text-gray-400 font-normal text-sm'>Provider</span>
                </span>
        </div>

        <div className=' my-2 '>
            <img src={IMAGES.blog6} alt="" />
        </div>
        <div className='pl-3'>
            <h1 className='my-2 luxuria font-bold'>Title</h1>
            <p className='luxuria font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo minus, dolorem veritatis ratione, optio commodi ex ad repudiandae cupiditate veniam!
            </p>
            <Link to="/blog">Read more</Link>
        </div>
    </div>
    
   </div>
   </>
  )
}

export default Blog