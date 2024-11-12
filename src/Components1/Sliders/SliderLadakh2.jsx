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

function SliderLadakh2() {
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
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768, // For mobile devices
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
                  <button className="bg-[#F7E700] text-black text-sm font-semibold mt-5 px-36 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all">View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderLadakh2;


const data = [
    {
        name:`Prateek Mehta Ladakh itinerary`,
        location:`Leh, Ladakh • New Delhi • Pangong Tso • Nubra`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2xhZGFraC1pbi01LWRheXMtNy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Prateek Mehta`,
        price:`₹79,084/- for 2 people`
    },
    {
        name:`Week Long Ladakh Obyssey`,
        location:`Leh, Ladakh • Leh • New Delhi • Nubra`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY2NDg0NzU4MDM4MTI5MjgxOTk3NjgwNjY0MDYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
    },
    {
        name:`Pratham's Ladakh Trip Beyond the Tourist Trail`,
        location:`Kargil • Leh, Ladakh • Leh • Pangong Tso • Tso Moriri • Nubra`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY1MTAzOTQzNTU4MzY3NDkwNzY4NDMyNjE3MTg4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Pratham`,
        price:`₹26,824/- per person`
    },
    {
        name:`Week Long Ladakh Odyssey`,
        location:`Leh, Ladakh • Leh • Pangong Tso • Nubra`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvZXhwZXJpZW5jZXMvMTY2NDg0NzU4MDM4MTI5MjgxOTk3NjgwNjY0MDYyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Handcrafted by us`,
        price:`₹1,16,052/- for 4 people`
    },
    {
        name:`Kashmir Ladakh Escapade`,
        location:`Kargil • Leh, Ladakh • Srinagar • Pangong Tso • New Delhi • Nubra`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3NhbmdhbS1wb2ludC1sZWgtbGFkYWtoLTExMTh4NTMwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Curated by Amrendra`,
        price:`₹1,14,169/- for 4 people`
    },
    {
        name:`Ladakh Adventure with buddies`,
        location:`Leh, Ladakh • Uleytokpo • Leh • Pangong Tso • Nubra`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L2xlaDEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Handcrafted by us`,
        price:`₹1,17,464/- for 4 people`
    },
]