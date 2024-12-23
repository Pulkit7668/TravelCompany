import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const PrevArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronLeft className='text-white' size={24} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={24} />
  </div>
);

function SliderPage() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
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
    <div className='w-5/6 h-[400px] m-auto'>
      <h1 className='text-2xl text-center md:text-left md:text-4xl font-bold ml-2 xs:text-xl'>Plan as per the best destinations in India</h1>
      <div className='mt-10'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-full text-black rounded-xl overflow-hidden relative'>
              <div
                className='h-64 rounded-xl flex items-center justify-center bg-cover bg-center transition-transform duration-300 transform hover:scale-110 cursor-pointer'
                onClick={() => handleImageClick(d.route)}
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-100"></div>
                
                <div className="absolute flex flex-col p-4 mt-32 text-center md:text-left md:mt-40">
                  <h3 className="text-xl md:text-base font-bold text-white xs:text-2xl">{d.name}</h3>
                  <p className="text-white text-base md:text-sm xs:text-xl">{d.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage;


const data = [
    {
      route:`/jandk`,
      name:`Jammu & Kashmir`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM1MDYxMDA4NTA0MzkwNzE2NTUyNzM0MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`From ₹11,295/- per day`
    },
    {
      route:`/ladakh`,
      name:`Ladakh`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjMyMzQxMjI0NjIxNTM0MzQ3NTM0MTc5NjkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`From ₹6,133/- per day`
    },
    {
      route:`/kerala`,
      name:`Kerala`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM2MjM4NzMwNzEyNDEzNzg3ODQxNzk2ODguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`From ₹6,551/- per day`
    },
    {
      route:`/rajasthan`,
      name:`Rajasthan`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc1MzU3OTQwODA0MDg5MzA3Nzg1MDM0MTc5NjkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`From ₹6,916/- per day`
    },
    {
      route:`/andaman&nicobar`,
      name:`Andaman & Nicobar`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM4NjQ2MDQ4NTg3NTYwNjUzNjg2NTIzNDQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`Tropical Paradise`
    },
    {
      route:`/himachalpradesh`,
      name:`Himachal Pradesh`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM5OTc3MjI3NTczODcxNjEyNTQ4ODI4MTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`From ₹4,337/- per day`
    },
    {
      route:`/uttarakhand`,
      name:`Uttarakhand`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzE1NDc1NDU1NzMyMzQ1NTgxMDU0Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹7,006/- per day`
    },
    {
      route:`/sikkim`,
      name:`Sikkim`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzA1OTY3MDQ2NTc1NTQ2MjY0NjQ4NDM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹4,810/- per day`
    },
    {
      route:`/goa`,
      name:`Goa`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM2NzY0MTM1Njg3MzUxMjI2ODA2NjQwNjIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`Pearl od the  Orient`
    },
    {
      route:`/arunachalpradesh`,
      name:`Arunachal Pradesh`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTUwNDQ0ODI0MjI1OTAyNTU3MzczMDQ2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹1,404/- per day`
    },
    {
      route:`/meghalya`,
      name:`Meghalaya`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNjAyNDA0MTQ4MDQ5MzU0NTUzMjIyNjU2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹6,555/- per day`
    },
    {
      route:`/assam`,
      name:`Assam`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTU2ODY0NzQyOTk2NjkyNjU3NDcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹2,554/- per day`
    },
    {
      route:`/pondacherry`,
      name:`Pondacherry`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1Mjk2ODQ3NDUyNTMwODYwOTAwODc4OTA2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹6,479/- per day`
    },
    {
      route:`/punjab`,
      name:`Punjab`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzAxNDM5Njc0NDQxODE0NDIyNjA3NDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹3,852/- per day`
    },
    {
      route:`/chhattisgarh`,
      name:`Chhattisgarh`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTY5ODg3NjAzNDczNjYzMzMwMDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹3,860/- per day`
    },
    {
      route:`/manipur`,
      name:`Manipur`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTk3MDEwNzMyNjkxMjg3OTk0Mzg0NzY1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹4,237/- per day`
    },
    {
      route:`/tamilnadu`,
      name:`Tamil Nadu`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE1ODk5MDUxMzQ5NTE3NzU3ODkyNjA4NjQyNTc4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹5,780/- per day`
    },
    {
      route:`/telangana`,
      name:`Telangana`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzExNzU3ODcxNTc1MzU1NTI5Nzg1MTU2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹4,329/- per day`
    },
    {
      route:`/westbengal`,
      name:`West Bengal`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzE4ODk2ODEyODEwODk3ODI3MTQ4NDM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹3,954/- per day`
    },
    {
      route:`/uttarpradesh`,
      name:`Uttar Pradesh`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzE2MjgyMTU5MTE2MjY4MTU3OTU4OTg0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      price:`From ₹4,654/- per day`
    },
    {
      route:`/bihar`,
      name:`Bihar`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTYxNTEzMTU4MzQ5OTkwODQ0NzI2NTYyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹3,631/- per day`
    },
    {
      route:`/tripura`,
      name:`Tripura`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1MzE0ODMxNjkwNTgzMjI5MDY0OTQxNDA2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹1,451/- per day`
    },
    {
      route:`/nagaland`,
      name:`Nagaland`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzU1Mjk0NjIyMDk1MjQzOTMwODE2NjUwMzkwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹3,393/- per day`
    },
    {
      route:`/andhrapradesh`,
      name:`Andhra Pradesh`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvc3RhdGVzLzE2NzUzNTQ4MjYwOTYzNTYzOTE5MDY3MzgyODEyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      price:`From ₹4,253/- per day`
    },
]