import React from 'react'
import Content from './Content'

export default function Footer() {
  return (
    <div 
      className=' h-[1000px] w-[430px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[800px] w-[430px]'>
        <Content />
      </div>
    </div>
  )
}