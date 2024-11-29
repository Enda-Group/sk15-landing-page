import React from 'react'
import ImageSlider from '../ImageSlider'

export default function Content() {
  return (
    <div className='bg-[#4d1119] py-8 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            
        </div>
    )
}

const Nav = () => {
    return (
<div className='text-[#e8dfcc]'>
  <div className=' '>
    <ImageSlider/>
      <div className='flex text-left 
                      justify-start 
                      mx-10 my-4 
                      font-poppins 
                      font-semibold 
                      text-[4rem] 
                      leading-tight'>Experience it Yourself
      </div>
      <p className='mx-10 text-left 
                    font-poppins'>
      at Laman Khadijah Visitor Center, Nilai</p>   
  </div>
</div>
    )
}