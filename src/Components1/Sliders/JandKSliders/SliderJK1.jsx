import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PrevArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full left-[-30px] top-[35%] transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronLeft className='text-white' size={20} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full right-[-30px] top-[35%] transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={20} />
  </div>
);

function SliderJK() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <div className='w-5/6 h-[500px] m-auto'>
      <h1 className='text-2xl text-center xs:text-lg md:text-left md:text-4xl font-bold ml-2'>Top locations across Jammu & Kashmir</h1>
      <div className='mt-20 xs:mt-5'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='h-full text-black rounded-xl overflow-hidden relative'>
              <div onClick={() => handleImageClick(d.route)}
                className='w-full h-52 aspect-square bg-cover bg-center rounded-xl'
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              />
              <div className="text-left mt-4 w-full">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="text-sm text-black font-medium truncate">{d.title}</p>
                {d.price && <p className="text-md font-normal mt-1 text-black">{d.price}</p>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderJK;


const data = [
    {
      route:`/jandk/srinagar`,
        name:`Srinagar`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODUzMDEwMTU0MzQ3NDg4ODgwMTU3NDcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=`,
        title:`Kashmir Valley, Houseboats, Dal Lake`,
        price:`From ₹9,543/- per day`
    },
    {
      route:`/jandk/sonamarg`,
        name:`Sonamarg`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTQwMDM1MDgwMDM4NjAyMzUyMTQyMzMzOTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=`,
        title:`Mountains, Trekking, Glaciers`,
        price:`From ₹18,131/- per day`
    },
    {
      route:`/jandk/gulmarg`,
        name:`Gulmarg`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTc1MzIyNzY4NzExMzgwOTU4NTU3MTI4OTA2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Skiing, Gondela, Mountains`,
        price:`From ₹11,455/- per day`
    },
    {
      route:`/jandk/pahalgam`,
        name:`Pahalgam`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0Mjk0OTEyNzg0MjI4MzI0ODkwMTM2NzE4OC53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Adventure, Treks, Mountains`,
        price:`From ₹12,000/- per day`
    },
    {
      route:`/jandk/sanasar`,
        name:`Sanasar`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI5MTEzMTc2MDE2ODA3NTU2MTUyMzQzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Mountains, Nature, Treks`,
    },
    {
      route:`/jandk/pulwama`,
        name:`Pulwama`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI4MDM0MzUyNTk4MTkwMzA3NjE3MTg3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Kashmir Valley, Apple Orchards`
    },
    {
      route:`/jandk/anantnag`,
        name:`Anantnag`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwOTM1NDU5NTc1NjUzMDc2MTcxODc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Kashmir Valley, Mountains, Treks`
    },
    {
      route:`/jandk/vaishnodevi`,
        name:`Vaishno Devi`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2MDYyMjg1MzQ0NjAwNjc3NDkwMjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Pilgrimage, Temple, Hiking`
    },
    {
      route:`/jandk/dachigamnationalpark`,
        name:`Dachigam National Park`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzOTQwNTkxMzg3NzQ4NzE4MjYxNzE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Wildlife, Kashmir Valley`
    },
    {
      route:`/jandk/patnitop`,
        name:`Patnitop`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMzE0Mzc2OTQ3MDAwMDI2NzAyODgwODU5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Mountains, Treks, Snow`
    },
    {
      route:`/jandk/bhaderuah`,
        name:`Bhaderuah`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEyODY0Mjc5NjY4MzMxMTQ2MjQwMjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Mountains, Trekking, Nature`
    },
    {
      route:`/jandk/aruvalley`,
        name:`Aru Valley`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjA2OTE3OTE2MzY0NjY5Nzk5ODA0Njg3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Adventure, Treks, Mountains`
    },
    {
      route:`/jandk/jammu`,
        name:`Jammu`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwOTgzNzA0MDYyOTkzNTI2NDU4NzQwMjM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Historical Temples, Mountains`,
        price:`From ₹5,346/- per day`
    }
]