import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white py-16 px-32 xs:py-5 xs:px-0">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="flex items-center relative xs:-left-5 md:-left-20">
              <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="logo" className="w-16 h-16 invert" />
              <span className="text-xl font-bold text-white absolute left-12 bottom-2">thetarzanway</span>
             </div>
          </div>
          <p className="text-white mb-5 mt-8 xs:text-sm xs:-ml-5 md:-ml-20">
            The Tarzan Way is a travel-based startup <br className='xs:hidden' /> with the vision to simplify travel and build <br className='xs:hidden' /> immersive travel programs across India.
          </p>
          <div className="flex gap-4 mb-4 xs:-ml-5 md:-ml-20">
            <div className="p-2 lg:p-2 md:p-1 border border-white rounded-full hover:bg-[#1D9BF0] hover:border-[#1D9BF0] transition-all">
              <FaTwitter className="text-white" size={24} />
            </div>
            <div className="p-2 lg:p-2 md:p-1 border border-white rounded-full hover:bg-[#3B5998] hover:border-[#3B5998] transition-all">
              <FaFacebook className="text-white" size={24} />
            </div>
            <div className="p-2 lg:p-2 md:p-1 border border-white rounded-full group hover:bg-gradient-to-bl hover:from-[#515BD4] hover:via-[#DD2A7B] hover:to-[#F58529] transition-all">
              <FaInstagram className="text-white" size={24} />
            </div>
            <div className="p-2 lg:p-2 md:p-1 border border-white rounded-full hover:bg-[#0072B1] hover:border-[#0072B1] transition-all">
              <FaLinkedin className="text-white" size={24} />
            </div>
            <div className="p-2 lg:p-2 md:p-1 border border-white rounded-full hover:bg-[#E60023] hover:border-[#E60023] transition-all">
              <FaPinterest className="text-white" size={24} />
            </div>
          </div>
          <div>
            <p className="font-bold mb-3 xs:-ml-5 xs:text-lg md:-ml-20">Contact Us</p>
            <p className="text-white xs:-ml-5 md:-ml-20">+91 95821 25476</p>
            <p className="text-white xs:-ml-5 md:-ml-20">info@thetarzanway.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 xs:-ml-5 xs:gap-14 text-white">
          <div className='xs:-mb-10'>
            <h3 className="text-xl xs:text-base font-bold text-white mb-5">Travel Destinations</h3>
            <ul className='text-sm'>
              <li className='mb-5'>Europe</li>
              <li className='mb-5'>Asia</li>
              <li className='mb-5'>North America</li>
              <li className='mb-5'>South America</li>
              <li className='mb-5'>Australia & New Zealand</li>
              <li className='mb-5'>Africa</li>
              <li className='mb-5'>Caribbean</li>
            </ul>
          </div>
          <div className='xs:ml-5'>
            <h3 className="text-xl xs:text-base font-bold text-white mb-5">Travel Styles</h3>
            <ul className='text-sm'>
              <li className='mb-5'>Personalise</li>
              <li className='mb-5'>Workcation</li>
              <li className='mb-5'>Volunteer</li>
              <li className='mb-5'>Road Trips</li>
              <li className='mb-5'>Unique</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl xs:text-base font-bold text-white mb-5">Company</h3>
            <ul className='text-sm'>
              <li className='mb-5'>Blogs</li>
              <li className='mb-5'>For Corporates</li>
              <li className='mb-5'>Testimonials</li>
              <li className='mb-5'>About Us</li>
              <li className='mb-5'>Contact Us</li>
            </ul>
          </div>
          <div className='xs:ml-5'>
            <h3 className="text-xl xs:text-base font-bold text-white mb-5">Terms & Policies</h3>
            <ul className='text-sm'>
              <li className='mb-5'>Terms of Service</li>
              <li className='mb-5'>Privacy Policy</li>
              <li className='mb-5'>COVID-19 Safety</li>
              <li className='mb-5'>Subscribe</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-t-2 border-[#919191] mt-10 mx-10 p-4 flex items-center justify-center text-xs font-bold">
        <p>&copy; 2018 - 2024 Tarzan Way Travels Private Limited • All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

  