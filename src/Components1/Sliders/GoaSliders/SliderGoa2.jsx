import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronLeft className='text-white' size={20} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full right-[-25px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={20} />
  </div>
);

function SliderGoa2() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => {
      setHidePrev(next === 0);
      setHideNext(next >= data.length - settings.slidesToShow);
    },
    prevArrow: <PrevArrow hidden={hidePrev} />,
    nextArrow: <NextArrow hidden={hideNext} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-5/6 h-[600px] m-auto'>
      <h1 className='text-4xl font-bold ml-2'>Trips by our users</h1>
      <div className='mt-8'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-full text-black rounded-xl overflow-hidden shadow-lg relative flex flex-col items-center p-4'>
              <div
                className='w-full h-52 bg-cover bg-center rounded-xl'
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              />
              <div className="text-left mt-4 w-full">
                <h3 className="text-md font-bold mb-2">{d.name}</h3>
                <p className='text-gray-500 text-sm font-normal mb-2'>{d.location}</p>
                <p className="text-md text-black font-medium mb-10">{d.title}</p>
                {d.price && <p className="text-lg font-bold mt-1 text-black">{d.price}</p>}
              </div>
              <div>
                  <button className="bg-[#F7E700] text-black text-sm font-semibold mt-5 px-36 xs:px-28 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all">View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderGoa2;


const data = [
    {
        name:`Teja's Getaway with Friends to North India`,
        location:`Vrindavan • Varanasi • New Delhi`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjI1NDMxMTE5MjA2OTE3Mjg1OTE5MTg5NDUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Teja`,
        price:`₹87,207/- for 25 people`
    },
    {
        name:`Shaik's Getaway with Frineds to Agonda`,
        location:`Agonda`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjMxNzIxNDY3NDc0NTA1OTAxMzM2NjY5OTIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Shaik imaad hassain`,
        price:`₹7,822/- for 2 people`
    },
    {
        name:`Teja's Getaway with Freinds to Uttar Pradesh`,
        location:`Allahabad • Ayodhya • Varanasi`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjEyODM5MTM2ODY3NTIzMTkzMzU5Mzc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Teja`,
        price:`₹2,80,356/- for 25 people`
    },
    {
        name:`Teja's Getaway with Freinds to Uttar Pradesh`,
        location:`Allahabad • Ayodhya • Varanasi`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwNjQ1MzU4OTEwNTYwNjA3OTEwMTU2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Teja`,
        price:`₹2,38,773/- for 25 people`
    },
    {
        name:`Purvai's Family Excursion in Agonda`,
        location:`Agonda`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjMxNzIxNDY3NDc0NTA1OTAxMzM2NjY5OTIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Purvai Naik`,
        price:`₹17,880/- for 4 people`
    },
    {
        name:`Ajay's Getaway to Goa`,
        location:`Calangute • Agonda`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2ODU1Mjk1MzIyMzMyNzUxNzUwOTQ2MDQ0OTIxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Ajay Baldaniya`,
        price:`₹27,786/- for 2 people`
    },
]