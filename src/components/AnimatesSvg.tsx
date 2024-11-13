import React from 'react';
import Image from 'next/image';

const AnimatesSvg = () => {
  return (<div>
    <div
      className="relative  bg-no-repeat h-full w-[full] "
      style={{ backgroundImage: "url('/images/timeline2.png')" ,width:'100%'}}
    >
      {/* <div className="flex flex-row-6 mt-8  ">
        <div className='w-[348px] h-[526px] border '>
        <h1 className="text-black text-xl">Your Overlay Text</h1>
        <p className="text-black text-md" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>

      </div>  */}
<div className="flex flex-row items-center justify-center m-4">
  <div className="w-full mt-8 h-[526px] border px-6 flex flex-col items-center justify-center mb-5">
    <h1 className="text-black text-xl mb-2">Your Overlay Text</h1>
    <p className="text-black text-md text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </p>
  </div>
</div>

<div className="flex flex-row items-center justify-center m-4">
  <div className="w-full  h-[450px] border px-6 flex flex-col items-center justify-center mb-5">
    <h1 className="text-black text-xl mb-2">Your Overlay Text</h1>
    <p className="text-black text-md text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </p>
  </div>
</div>

<div className="flex flex-row items-center justify-center m-4">
  <div className="w-full mt-2 h-[500px] border px-6 flex flex-col items-center justify-center mb-5">
    <h1 className="text-black text-xl mb-2">Your Overlay Text</h1>
    <p className="text-black text-md text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </p>
  </div>
</div>
<div className="flex flex-row items-center justify-center m-4">
  <div className="w-full  h-[450px] border px-6 flex flex-col items-center justify-center mb-5">
    <h1 className="text-black text-xl mb-2">Your Overlay Text</h1>
    <p className="text-black text-md text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </p>
  </div>
</div>

<div className="flex flex-row items-center justify-center m-4">
  <div className="w-full  h-[550px] border px-6 flex flex-col items-center justify-center mb-5">
    <h1 className="text-black text-xl mb-2">Your Overlay Text</h1>
    <p className="text-black text-md text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </p>
  </div>
</div>






  


     
    </div></div>
  );
};

export default AnimatesSvg;
