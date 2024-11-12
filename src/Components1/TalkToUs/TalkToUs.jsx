import React from 'react'

function TalkToUs() {
  return (
    <div className='md:flex md:items-center md:justify-center mt-28'>
        <div className='h-[500px] w-full md:h-[500px] md:w-[500px]'>
            <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS90YWxrdG91cy5zdmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19" alt="" />
        </div>
        <div className='text-center ml-10 mb-40'>
            <h1 className='text-4xl font-bold mb-5'>Come On! Talk to Us.</h1>
            <p className='text-lg font-normal'>We’ve a large community of bloggers, influencers, travelers and of <br /> course travel experts to help you out.</p>
            <button className='text-lg font-medium border border-black rounded-full px-8 py-1 hover:bg-black hover:text-white transition-all duration-300 shadow-lg mt-5'>Contact Us</button>
        </div>
    </div>
  )
}

export default TalkToUs