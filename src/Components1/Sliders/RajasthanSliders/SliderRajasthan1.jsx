import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

function SliderRajasthan1() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

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

  return (
    <div className='w-5/6 h-[500px] m-auto'>
      <h1 className='text-2xl text-center xs:text-lg md:text-left md:text-4xl font-bold ml-2'>Top locations across Rajasthan</h1>
      <div className='mt-20 xs:mt-5'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='h-full text-black rounded-xl overflow-hidden relative'>
              <div
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

export default SliderRajasthan1;


const data = [
    {
        name:`Jaipur`,
        image:`https://lh5.googleusercontent.com/p/AF1QipNNCNn4A9ujrP0drFeNWF0ewQJllcIA7CuLUEmT=w675-h390-n-k-no`,
        title:`Pink City, Historical Sites, Forts`,
        price:`From ₹9,335/- per day`
    },
    {
        name:`Jodhpur`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjM3MDU5MTczMTQyMDA2Mzk3MjQ3MzE0NDUzMS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Historical, Forts, Palaces`,
        price:`From ₹10,381/- per day`
    },
    {
        name:`Udaipur`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjIyNzQxNjkwODUzNjI0MzQzODcyMDcwMzEyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Romantic, Palaces, Lakes`,
        price:`From ₹9,489/- per day`
    },
    {
        name:`Pushkar`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODUxMjk1NDI2OTQwNzE1MzEyOTU3NzYzNjcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Camel Fair, Brahma Temple`,
        price:`From ₹6,865/- per day`
    },
    {
        name:`Jaisalmar`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQyODM2OTIzMzEwMzUzNzU1OTUwOTI3NzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Desert, Forts, Culture, History`,
        price:`From ₹12,578/- per day`
    },
    {
        name:`Bikaner`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjU2NzI1NzAyNDA4NTExNjM4NjQxMzU3NDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Camel Safari, Forts, History`,
        price:`From ₹8,042/- per day`
    },
    {
        name:`Shekhawati`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzUzMzQ5NDU0NjAzMTk1MTkwNDI5Njg3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Historical, Havelis, Forts`
    },
    {
        name:`Jhunjhun`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIzMDA1MTgxOTkyMDUzOTg1NTk1NzAzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`History, Forts, Temple, Culture`,
        price:`From ₹2,808/- per day`
    },
    {
        name:`Deeg`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE0MjI3MjA1NTU1NDM4OTk1MzYxMzI4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Historical, Palaces, Heritage`,
    },
    {
        name:`Ranakpur`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI4NDg1NDAyNTg0MDc1OTI3NzM0Mzc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Temple, Jainism, Architecture`,
        price:`From ₹4,063/- per day`
    },
    {
        name:`Churu`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzODc3MTQwNjg2NTExOTkzNDA4MjAzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Desert, Heritage, Forts, Culture`
    },
    {
        name:`Neemrana`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2OTczNjEzNTYwMTk5NzM3NTQ4ODI4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Historical, Palaces, Forts`,
    },
    {
        name:`Nathdwara`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2ODk5NDEwMzUwMzIyNzIzMzg4NjcxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Shrine, Temple, Pilgrimage`,
        price:`From ₹3,417/- per day`
    },
    {
      name:`Bundi`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzMzI1NzUyNDAzNzM2MTE0NTAxOTUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`History, Forts, Palaces`,
      price:`From ₹3,413/- per day`
    },
    {
      name:`Ranthambore`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2ODU1MzA2MTEwNzc0NTQwOTAxMTg0MDgyMDMxMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`Wildlife, Tigers, Safari, `,
      price:`From ₹11,436/- per day`
    },
    {
      name:`Bhandarej`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEyOTQyMzQxNjQ5NTMyMzE4MTE1MjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`Beaches, Scuba Diving`,
    },
    {
      name:`Bharatpur`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEyOTY5ODYwNTY1NjYyMzg0MDMzMjAzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`Wildlife, Birdwatching`,
    },
    {
      name:`Pilani`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI3OTMwMTk1NzY3ODc5NDg2MDgzOTg0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`Education, Heritage, History`,
    },
]