import React from 'react';
import MyImage from '../assets/600.jpg';
import bgImage from '../assets/backgroundImg.png';
// import Instagram from '../assets/logo2.jpg'
// import Facebook from '../assets/logo3.jpg'
// import Linkedin from '../assets/logo4.jpg'
import { TfiTwitter } from "react-icons/tfi";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
// import play from "/src/assets/immaigration1.jpg"
// import google from "/src/assets/immaigration1.jpg"
import { FaWhatsapp } from "react-icons/fa6";
import logo from "/src/assets/logo.png"
import mySelf from "/src/assets/imges.png";

const skills = [
  { name: 'HTML', level: 'Advanced', width: 'w-[96%]' },
  { name: 'CSS & Bootstrap & Tailwind CSS', level: 'Advanced', width: 'w-[90%]' },
  { name: 'JavaScript', level: 'Advanced', width: 'w-[70%]' },
  { name: 'UI Design in Figma', level: 'Advanced', width: 'w-[85%]' },
  { name: 'React js', level: 'Advanced', width: 'w-[74%]' },
  { name: 'Node js', level: 'Advanced', width: 'w-[60%]' },
  { name: 'Flutter', level: 'Advanced', width: 'w-[50%]' }
];
const softSkills = ['Git', 'TeamWork', 'Quick Learning', 'VS Code'];

const Home = () => {

  return (
    <>
      <div className='px-6'>
        {/* This section is the header */}
        <section>
          <div className='container px-12 py-10 flex gap-8'>
            <div>
              <h1 className='font-bold text-4xl'> Hello, I am PRABU</h1>
              <h1 className='font-bold text-4xl mt-1 gradiant-text'> MEAN stack developer</h1>
              <h1 className='mt-4 text-gray-400 ml'>It is the core of both frontend and backend development using React and Node.js. Therefore, MERN stack developers must possess proficiency in ES6+ features, asynchronous programming, and functional programming concepts to effectively build websites. </h1>

            </div>
            <div className='relative'>
              <img src={MyImage} width={150} height={150} alt="MyImage" className='rounded-tl-lg relative rounded-br-lg z-10' />
              <img src={bgImage} alt="bg" width={350} height={850} className='absolute rounded-br-lg top-2 left-2 z-2' />
            </div>
          </div>
        </section>
        {/* Project Details */}
        <section>
          <div>
            {/*1.Project*/}
            <div>

            </div>
          </div>
        </section>
        {/* Technology section */}
        <section>
          <div className='container'>
            <h1 className='text-3xl font-semibold pl-6 hover:text-[#00df9a]'>Technologies</h1>
            <div className='mt-6 ml-10'>
              {skills.map((skill, index) => (
                <div key={index} className={`mt-4 ml-3 ${index >= 3 ? 'mt-6' : ''}`}>
                  <div className='flex justify-between items-center'>
                    <h2 className='font-semibold'>{skill.name}</h2>
                    <p className='text-gray-500'>{skill.level}</p>
                  </div>
                  <span className={`${skill.width} h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md`} />
                </div>
              ))}
            </div>

          </div>
        </section>
        {/* Additional Skills */}
        <section className='mt-6'>
          <div className='container mx-auto'>
            <h1 className='text-3xl font-semibold pl-6 hover:text-[#00df9a]'>Additional Skills</h1>

            <div className='flex flex-wrap justify-between w-full mt-[1.5%] px-6 sm:px-4'>
              {softSkills.map((skill, index) => (
                <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:pl-16'>
                  <p className='font-bold relative pl-10'>
                    <span className='before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2'>
                    </span>
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About page */}
        <section className='mt-6'>
          <div className='container'>
            <h1 className='text-3xl font-semibold pl-6 hover:text-[#00df9a]'>About Me</h1>
            <div className=' mt-8 ml-28 relative before:absolute before:top-0 before:bottom-0 before:w-2 before:bg-white'>
              <div className='pl-6 relative'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2024
                </h3>
                <p>
                  PGFSD,<br />
                  WHY Global service,Chennai
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2021
                </h3>
                <p>
                  BE Computer Science and Engineering,<br />
                  CSI Institute of Technology,Thovalai
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2017
                </h3>
                <p>
                  HSC,<br />
                  Government Boys High secondary School, Devapandalam
                </p>
              </div>
              <div className='pt-10 ml-6'>
                <h3 className=' absolute -left-12 font-semibold text-lg'>
                  2015
                </h3>
                <p>
                  SSLC,<br />
                  Government Boys High secondary School, Devapandalam
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* footer part */}
        {/* <footer className='mt-4 mb-6'>
          <div className=' container m-auto flex justify-between w-[60%]'>
            <div>
              <p className='text-gray-300 text-sm'> Copy right @ 2023</p>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a href="https://www.instagram.com/_silent_at_na_k_ri_ku_s_?igsh=dDNyaDF6NjlkZTh2"> <img src={Instagram} alt="Instagram" className='w-6' /></a>
                </li>
                <li>
                  <a href="#"> <img src={Facebook} alt="Facebook" className='w-6' /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/prabu-p-2a6440301/"> <img src={Linkedin} alt="Linkedin" className='w-6' /></a>
                </li>
              </ul>
            </div>
          </div>
        </footer> */}
        <div className='flex mb-20 relative'>
          <img src={mySelf} alt="mySelf" className='absolute -left-4 top-0' />
        </div>
        <div className="bg-blue-500 py-10 mt-5  rounded-t-lg">

          <div className="container mx-auto px-4 lg:px-28">
            <div className="flex justify-center lg:justify-start mb-6">
              <img src={logo} alt="Logo" className="w-15 h-10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 text-center lg:text-left justify-center">
              <div className=' ml-32'>
                <ul className="space-y-2 text-lg">
                  <li className="text-xl font-semibold">My Self</li>

                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>About Us</li>
                </ul>
              </div>

              <div className='ml-20'>
                <ul className="space-y-2 text-lg">
                  <li className="text-xl font-semibold">For Customers</li>
                  <li>Services</li>
                  <li>Register as Customer</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className='ml-16'>
                <ul className="space-y-4 text-lg">
                  <li className="text-xl font-semibold">Social Links</li>
                  <li className="flex justify-center lg:justify-start space-x-5">
                    <TfiTwitter size="30px" />
                    <CiFacebook size="30px" />
                    <a href="https://www.instagram.com/_silent_at_na_k_ri_ku_s_?igsh=dDNyaDF6NjlkZTh2">   <PiInstagramLogoLight size="30px" />  </a>
                    <a href="https://www.linkedin.com/in/prabu-p-2a6440301/"> <TiSocialLinkedinCircular size="30px" /> </a>
                    <a
                      href="https://wa.me/1234567890?text=Hello%20there!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp size="30px" />
                    </a>

                  </li>
                  {/* <li>
                <img src={google} alt="Download on Apple Store" className="w-32 mx-auto lg:mx-0" />
              </li>
              <li>
                <img src={play} alt="Download on Google Play" className="w-32 mx-auto lg:mx-0" />
              </li> */}
                </ul>
              </div>
            </div>
            <div className="mt-8  w-[88%] border-t border-gray-300 border-dashed ml-28"></div>
            <p className="text-center lg:text-left px-4 lg:px-0 mt-3 text-sm ml-32">
              &copy; . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home