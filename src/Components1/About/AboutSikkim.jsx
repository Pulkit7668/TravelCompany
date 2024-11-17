import React from 'react'

function AboutSikkim() {
  return (
    <div className='mx-6 md:mx-28 text-center'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6 md:mb-10 xs:text-2xl'>A little about Sikkim</h1>
      <p className='text-gray-500 text-xs md:text-md font-normal sm:font-medium mb-5'> 
        Sikkim is a small yet beautiful state in India, nestled in the Himalayas. It is a paradise for nature  <br className='xs:hidden' /> 
        lovers and adventure seekers. The state is home to some of the most spectacular mountain views, <br className='xs:hidden' /> 
        lush green valleys, pristine lakes, and breathtaking waterfalls. For trekking enthusiasts, there are <br className='xs:hidden' /> 
        numerous trails to explore, ranging from easy to challenging. The state is also known for its rich <br className='xs:hidden' /> 
        cultural heritage and Buddhist monasteries. The locals are warm and friendly and the food is <br className='xs:hidden' /> 
        delicious. Sikkim is also home to the world’s third highest peak, Kanchenjunga, making it a great <br className='xs:hidden' /> 
        destination for mountaineers. With its stunning natural beauty and unique culture, Sikkim is an ideal <br className='xs:hidden' />
        destination for travellers looking for an unforgettable experience.
      </p>
      <button className="text-black text-lg md:text-lg font-semibold mt-5 px-8 py-2 md:px-10 md:py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">
        Craft a trip to Sikkim now!
      </button>
    </div>
  )
}

export default AboutSikkim