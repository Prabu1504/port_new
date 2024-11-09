import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import Project from"./Project"

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
const education = [
    // { year: "2023", course: "PGFSD", institute: "WHY Global service", place: "Chennai" },
    { year: "2023", course: "PGFSD", institute: "WHY Global service", place: "Chennai" },
    { year: "2021", course: "BE Computer Science and Engineering", institute: "CSI Institute of Technology", place: "Thovalai" },
    { year: "2017", course: "HSC", institute: "Government Boys High secondary School", place: "Devapandalam" },
    { year: "2015", course: "SSLC", institute: " Government Boys High secondary School", place: "Devapandalam" },

]
//     {
//         _id: '1',
//         images: '/src/assets/logo.png',
//         authorName: 'John Doe',
//         updatedAt: '2024-01-15T14:32:00',
//         heading: 'First Project',
//     },
//     {
//         _id: '2',
//         images: '/src/assets/logo.png',
//         authorName: 'Jane Smith',
//         updatedAt: '2024-02-20T09:15:00',
//         heading: 'Second Project',
//     },
//     {
//         _id: '3',
//         images: '/src/assets/logo.png',
//         authorName: 'Alex Johnson',
//         updatedAt: '2024-03-10T12:45:00',
//         heading: 'Third Project',
//     },
//     {
//         _id: '3',
//         images: '/src/assets/logo.png',
//         authorName: 'Alex Johnson',
//         updatedAt: '2024-03-10T12:45:00',
//         heading: 'Forth Project',
//     },
// ];

// const blog = {
//     heading: 'Sample Project',
//     authorName: 'John Doe',
//     createdAt: '2024-03-10T12:45:00',
//     images: 'https://via.placeholder.com/600x400',
//     description: `
//       <p>This is a sample project description.</p>
//       <p>It explains the details of the project, the objectives, and the outcomes.</p>
//     `
// };

const Home = () => {
    
    return (
        <>
            <div className='px-6'>
                {/* This section is the header */}
                <section>
                    <div className='container px-12 py-10 flex gap-8'>
                        <div>
                            <h1 className='font-bold text-4xl'> Hello, I am PRABU</h1>
                            <h1 className='font-bold text-4xl mt-1 gradiant-text'> MERN Stack Developer</h1>
                            <h1 className='mt-4 text-gray-300 font-semibold'>
                            Motivated MERN Stack Developer with 1 year of practical experience in building responsive and efficient applications using React.js, Node.js, and MongoDB. Known for a proactive approach, problem-solving mindset, and adaptability to new technologies, I am eager to join a forward-thinking team to contribute fresh perspectives and technical expertise. Passionate about delivering seamless user experiences and collaborating to achieve innovative solutions that align with business goals.</h1>
                        </div>
                        <div className='relative'>
                            <img src={MyImage} width={180} height={150} alt="MyImage" className='rounded-tl-lg relative rounded-br-lg z-10 inline-block transform transition duration-300 ease-out hover:scale-150' />
                            <img src={bgImage} alt="bg" width={370} height={850} className='absolute rounded-br-lg top-2 left-2 z-2' />
                        </div>
                    </div>
                </section>
                {/* Project Details */}
                <Project/>
                {/* Technology section */}
                <section>
                    <div className='container'>
                        <h1 className='text-3xl font-semibold pl-6 inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600'>Technologies</h1>
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
                <section className='mt-8'>
                    <div className='container mx-6'>
                        <h1 className='text-3xl inline-block transform transition duration-300 ease-out hover:scale-125 font-semibold hover:text-blue-600'>Additional Skills</h1>

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
                        <h1 className='text-3xl font-semibold pl-8 inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600'>Education</h1>
                        <div className=' mt-8 ml-28 relative before:absolute before:top-0 before:bottom-0 before:w-2 before:bg-white'>
                            {education.map((educations, index) => (
                                <div className='pl-6 relative mb-6'>
                                    <h3 className=' absolute -left-12 font-semibold text-lg'>
                                        {educations.year}
                                    </h3>
                                    <p>
                                        {educations.course},<br />
                                        {educations.institute},{educations.place}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* footer part */}
                <div className="bg-blue-500 py-10 mt-16 rounded-t-lg">
                    <div className="container mx-auto px-4 lg:px-28">
                        <div className="ml-auto sm:ml-0 mb-6 flex justify-center sm:justify-start">
                            <img src={logo} alt="Logo" className="w-15 h-10" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left justify-center">
                            <div className="sm:ml-12 lg:ml-0">
                                <ul className="space-y-2 text-lg">
                                    <li className="text-xl font-semibold">My Self</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                            <div className="sm:ml-12 lg:ml-0">
                                <ul className="space-y-2 text-lg">
                                    <li className="text-xl font-semibold">For Customers</li>
                                    <li>Services</li>
                                    <li>Register as Customer</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>

                            <div className="sm:ml-12 lg:ml-0">
                                <ul className="space-y-4 text-lg">
                                    <li className="text-xl font-semibold">Social Links</li>
                                    <li className="flex justify-center lg:justify-start space-x-5">
                                        {/* <TfiTwitter size="30px" /> */}
                                        {/* <CiFacebook size="30px" /> */}
                                        {/* <a href="https://www.instagram.com/_silent_at_na_k_ri_ku_s_?igsh=dDNyaDF6NjlkZTh2">
                                            <PiInstagramLogoLight size="30px" className='hover:text-red-400' />
                                        </a> */}
                                        <a href="https://www.linkedin.com/in/prabu-p-2a6440301/" target="_blank" rel="noopener noreferrer">
                                            <TiSocialLinkedinCircular size="30px" className='hover:text-blue-600' />
                                        </a>
                                        <a href="https://wa.me/7397027766?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp size="30px" className='hover:text-green-700' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 w-full sm:w-[88%] border-t border-gray-300 border-dashed mx-auto sm:ml-28"></div>

                        <p className="text-center lg:text-left px-4 lg:px-0 mt-3 text-sm mx-auto sm:ml-32">
                            &copy; . All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home