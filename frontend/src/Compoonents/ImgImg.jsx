import React, {useCallback, useState} from 'react'
import { FaArrowRight } from "react-icons/fa";
import {useDropzone} from 'react-dropzone'
import { IoCloudUpload } from "react-icons/io5";
import { Button } from '../../components/ui/button';
import { FaArrowLeft, FaGear } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';


const ImgImg = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

      const navigate = useNavigate()
    
      const [isleft, setIsleft] = useState("0")
      const [ai,setAi] = useState("igtx")

  return (
    <>
    <div className='pt-[140px]'></div>
    <div className="text-center">
      <div className='absolute left-5 top-40 flex items-center'><FaArrowLeft /><Link to="/ai/text-img">Text to Images</Link></div>
      <div className='absolute right-5 top-40 flex items-center'><Link to="/ai/img-text">Images to Text</Link><FaArrowRight /></div>
      <h1 className="text-lg font-bold luxuria my-10">
        Image to Images
      </h1>
    </div>
      <div className='flex items-center justify-center flex-col '>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
            <div className=' w-[770px] h-[200px] bg-light my-10 mx-auto px-10 rounded-lg shadow-xl flex justify-center items-center flex-col max-md:w-[200px]'>
            <FaGear  className='text-[70px] ac-color drop-shadow-md animate-spin'/>
            <p className='poppins italic font-medium'>Drop here files !</p>
            </div>
           :
              <div className='px-10 w-[770px] h-[200px] bg-light my-10 mx-auto rounded-lg shadow-xl flex justify-center items-center flex-col max-md:w-[200px]'>
                <IoCloudUpload  className='text-[70px] ac-color drop-shadow-md animate-bounce'/>
                <p className='poppins italic font-medium'>upload here through Drag 'n drop </p>
              </div>
          }
        </div>

        <div className='mx-auto w-[60%]'>
    <p className='ml-4 my-5 poppins italic'>No. of images </p>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45] hover:text-white border border-gray-500'>1</Button>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500'>2</Button>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500'>3</Button>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500'>4</Button>
  </div>
        <Button className="my-10 px-10 ac-bg hover:bg-[#5a7a45] ">Generate</Button>
</div>
    </>
  )
}

export default ImgImg