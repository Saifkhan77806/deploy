import React, { useState } from 'react'
import { Button } from '../../components/ui/button';
import {Link, useNavigate} from "react-router-dom"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import axios from 'axios';


const TextImg = () => {

  const navigate = useNavigate()
      const [isleft, setIsleft] = useState("0")
      const [ai,setAi] = useState("igtx")
      const [data,setData] = useState({
        modelId: '6b645e3a-d64f-4341-a6d8-7a3690fbf042',
        contrast: 3.5,
        prompt: 'rose gold bangle for women',
        num_images: 4,
        width: 1472,
        height: 832,
        alchemy: false,
        styleUUID: '8e2bc543-6ee2-45f9-bcd9-594b6ce84dcd',
        enhancePrompt: false
      })

      let imgSrc;

      const imgTest = document.getElementById("testImg")
      console.log(imgTest)

      const apiKey = "6908c695-cc19-444e-aba1-32597049b508"

      console.log(apiKey)

      const generateImages = async () => {
        try {
          // POST request to generate images
          const response = await axios.post('https://cloud.leonardo.ai/api/rest/v1/generations', {
            modelId: '6b645e3a-d64f-4341-a6d8-7a3690fbf042',
            contrast: 3.5,
            prompt: 'red dog',
            num_images: 1,
            width: 1472,
            height: 832,
            alchemy: false,
            styleUUID: '8e2bc543-6ee2-45f9-bcd9-594b6ce84dcd',
            enhancePrompt: false
          }, {
            headers: {
              'accept': 'application/json',
              'authorization': `Bearer ${apiKey}`,
              'content-type': 'application/json'
            }
          });
      
          const id = response.data.sdGenerationJob.generationId;
          console.log("gen ",id)
          // const imagesResponse = await axios.get(`https://cloud.leonardo.ai/api/rest/v1/generations/${id}`, {
          //   headers: {
          //     'accept': 'application/json',
          //     'authorization': `Bearer ${apiKey}`,
          //     'Content-Type': 'application/json'
          //   }
          // });
      
          // console.log(imagesResponse.data);

          axios.get(`https://backend-ashen-gamma.vercel.app/test/${id}`).then((res)=>{
            console.log(res.data)
          }).catch((err)=>{
            console.log("err", err)
          })
        } catch (error) {
          console.error(error);
        }
      };
      
        //  generateImages();

      
















  return (
   <>
    <div className='pt-[140px]'></div>
    
    <div className='absolute left-5 flex items-center'><FaArrowLeft /><Link to="/ai/img-img">Images to Images</Link></div>
    <div className='absolute right-5 flex items-center'><Link to="/ai/img-text">Images to Text</Link><FaArrowRight /></div>
    <h1 className='text-center luxuria font-bold text-lg my-10'>
    Text to Images
    </h1>
    <div className="relative w-[60%] mx-auto my-10 min-w-[200px]">
    <textarea
      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-950 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 poppins bg-light shadow-2xl"
      placeholder=""></textarea>
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-gray-500  leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-950 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-950 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 poppins font-semibold">
      Message
    </label>
  </div>

  <div className='mx-auto w-[60%]'>
    <p className='ml-4 my-5 poppins italic'>No. of images </p>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45] hover:text-white border border-gray-500'>1</Button>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500'>2</Button>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500'>3</Button>
    <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500'>4</Button>
  </div>
  <div className='flex justify-center items-center'>
  <Button className="my-10 px-10 w-[20%] mx-auto ac-bg hover:bg-[#5a7a45] ">Generate</Button>
  </div>

  <img id='testImg' src='https://cdn.leonardo.ai/users/8a018607-08ca-4ec9-a394-dd9b5eebfcb4/generations/383fdf34-6c00-466e-bef4-471a39a5702a/Default_rose_gold_bangle_for_women_3.jpg' alt="img" />


   </>
  )
}

export default TextImg