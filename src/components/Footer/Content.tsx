import React from 'react'
import ImageSlider from '../ImageSlider'

export default function Content() {
  return (
    <div className='bg-[#6e1824] py-8 h-full w-full flex flex-col justify-between'>
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
            {/* <h1 className='text-[14vw] leading-[0.8] mt-10'>Sticky Footer</h1>
            <p>©copyright</p> */}
        </div>
    )
}

const Nav = () => {
    return (
        <div className='text-[#e8dfcc]'>
            <div className=' '>
                {/* <h3 className='mb-2 mt-[2rem] text-[1.5rem] font-medium font-poppins'>Siti Khadijah Visitor Center</h3> */}
                <ImageSlider/>
                {/* <div className=' grid grid-rows-2'>   
<a href="https://sitikhadijah.com/products/laman-khadijah-admission-with-sewing-experience
" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#e8dfcc] w-60 rounded-xl text-[#721824] px-6 py-4 font-poppins font-semibold text-[1.5rem] mb-4">
    Book a Slot <br/> <p className='text-[0.7rem]'> with sewing experience</p>
  </button>
</a>
                
<a href="https://sitikhadijah.com/products/laman-khadijah-admission-with-sewing-experience
" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#e8dfcc] w-60 rounded-xl text-[#721824] px-6 py-4 font-poppins font-semibold text-[1.5rem]">
    Book a Slot <p className='text-[0.7rem]'> without sewing experience</p>
  </button>
</a>
</div> */}
          
                <div className='flex  text-left justify-start mx-10 my-4 font-poppins font-medium text-[4rem] leading-tight'>Experience it Yourself</div>
            <p className='mx-10 text-left font-poppins'>at Laman Khadijah Visitor Center, Nilai</p>    
            </div>
        </div>
    )
}