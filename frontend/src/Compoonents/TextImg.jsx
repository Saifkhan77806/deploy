import React, { useState } from 'react'
import { Button } from '../../components/ui/button';
import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import axios from 'axios';


const TextImg = () => {

  const navigate = useNavigate()
  const [isleft, setIsleft] = useState("0")
  const [ai, setAi] = useState("igtx")
  const [prompt, setPrompt] = useState({
    msg: "",
    noImG: 1
  })
  const [data, setData] = useState()


  //    generateImages();
  const [status, setStatus] = useState(true);  // Initialize status as true
  const [message, setMessage] = useState("Generate")
  const [disable, setDisable] = useState(false)

  const generate = async () => {
    try {
      // First axios call to "/text" endpoint
      if (prompt.msg == "") {
        alert("please enter prompt !")
      } else {
        setDisable(true)
        setMessage("Pending ...")
        // const responses = await fetch("https://backend-kappa-drab.vercel.app/texts",{
        //   method: "POST",
        // })
        const response = await axios.post("https://backend-kappa-drab.vercel.app/texts");
        console.log(response.data);
        // Start a loop that continues while status is true
        while (status) {
          try {
            // Make the second axios call inside the loop
         
            setMessage("Generating ...")

            const res = await axios.get("https://backend-kappa-drab.vercel.app/re");
            console.log(res.data.data.generations_by_pk.status);
            // If status from the response is "COMPLETE", update the status and break the loop
            if (res.data.data.generations_by_pk.status === "COMPLETE") {
              setStatus(false);  // This will cause the loop to stop
              console.log(res.data);
              setData(res.data.data)
              setDisable(false)
              setMessage("Generated !!👍")
              setPrompt({msg: "", noImG: 0})
              break;  // Exit the while loop
            }
          } catch (err) {
            console.log("Error while generating images:", err);
          }
        }
        setStatus(true)
        setMessage("Generate")
      }
    } catch (err) {
      console.log("Error from storing id:", err);
    }
    setMessage("Generate")
    console.log(prompt)
  };



  const changed = (e) => {
    setPrompt({ ...prompt, msg: e.target.value })
  }

  const nums = (e) => {
    setPrompt({ ...prompt, noImG: e })
  }



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
          placeholder="" value={prompt.msg} onChange={(e) => changed(e)}></textarea>
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-gray-500  leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-950 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-950 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 poppins font-semibold">
          Message
        </label>
      </div>

      <div className='mx-auto w-[60%]'>
        <p className='ml-4 my-5 poppins italic'>No. of images </p>
        <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45] hover:text-white border border-gray-500' onClick={(e) => nums(1)} >1</Button>
        <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500' onClick={(e) => nums(2)} >2</Button>
        <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500' onClick={(e) => nums(3)} >3</Button>
        <Button className='p-5 bg-light mx-5 my-5 rounded-lg poppins font-semibold shadow-lg text-gray-600 active:bg-gray-200 hover:bg-[#5a7a45]  hover:text-white border border-gray-500' onClick={(e) => nums(4)} >4</Button>
      </div>
      <div className='flex justify-center items-center'>

        <Button className="my-10 px-10 w-[20%] mx-auto ac-bg hover:bg-[#5a7a45]" disabled={disable} onClick={generate}>{message}</Button>
      </div>
      {
        data?.generations_by_pk?.generated_images.map((el) => {
          return <img id='testImg' src={el?.url} key={el?.url} alt="img" />
        })
      }


    </>
  )
}

export default TextImg