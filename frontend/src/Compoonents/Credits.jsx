import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'

const Credits = () => {
  return (
    <>
    <div className='max-md:pt-[64px] max-[620px]:pt-[87px]'></div>
     <div className='w-full rounded-lg bg-gray-200'>
    <div className='flex justify-center'>
            <div className='flex gap-3 py-2 mx-auto w-[50%] max-md:w-[80%] max-sm:w-full max-sm:px-1 max-sm:py-2'>
            <input type="text" placeholder='Search user!' className='rounded-md w-[80%] outline-none border-none poppins font-semibold shadow-md max-sm:w-[60%]'/>
            <Button className='ac-bg flex justify-center w-[20%] max-sm:w-[20%] max-[330px]:px-10'>Search</Button>
            </div>
        </div>
      </div>
    <div className='max-md:flex max-md:justify-center '>
      <div className='bg-gray-600 h-[300px] right-2 my-2 relative max-md:w-[55%] max-md:right-0 mx-5 rounded-lg max-[620px]:w-[70%] '>
        <div className='w-[50px] h-[50px] rounded-[25px] mx-auto my-5 flex justify-center items-center poppins font-semibold bg-sky-600'>
            S
        </div>
        <div>
            <h1 className='text-center poppins font-light'>
                Saif khan
                <br />
                saif4354@gmail.com
            </h1>
            <div
  className="relative flex flex-col w-full h-full text-gray-200 poppins">
  <table className=" text-left table-auto min-w-max">
  
    <tbody>
      <tr>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Subcription 
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Monthly Advance
          </p>
        </td>
      </tr>
      <tr>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Credits 
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            0
          </p>
        </td>
      </tr>
      <tr>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Subcription 
          </p>
        </td>
        <td className="p-4">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Monthly Advance
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    </div>
    </div>
      <div className="relative w-[60%] mx-auto my-10 min-w-[200px]">
    <input
      className="peer h-full py-4 w-full resize-none rounded-lg border border-blue-gray-200 border-t-transparent bg-transparent  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 poppins bg-light shadow-2xl"
      placeholder="" type='number' min={0} />
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-gray-500  leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 poppins font-semibold">
      No. of token of send
    </label>

<div className='flex justify-center items-center'>
    <Button className='ac-bg my-5'>Send</Button>
</div>
    

  </div>
    </>
  )
}

export default Credits