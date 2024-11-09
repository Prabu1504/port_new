import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { Input, Modal, Spin } from 'antd';
import resume from "/src/assets/prabu resume.pdf"

const Navbar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value)
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(user)
        try {
            setIsLoading(true);
            const response = await fetch(createApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log("Form submitted successfully");
                setUser({ name: "", email: "", mobile: "", message: "" })
                navigate('/show-user');
            } else {
                console.log('Form submission failed!');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false)
        }
    }
    const handleDownload = () => {
        const link= document.createElement("a");
        link.href=resume;
        link.download="Prabu.Resume";
        document.body.appendChild(link);
        link.click();
        document.body.appendChild(link);
    }
    return (<>

<div className='bg-black flex flex-col sm:flex-row justify-between items-center h-auto sm:h-24 mx-auto px-4 md:px-12 text-white'>
    <div className=" flex items-center mb-4 sm:mb-0">
        {/* Logo */}
        <img
            src={logo}
            alt="logo"
            className="w-8 sm:w-10 md:w-12 lg:w-14 mt-2 hover:shadow-inner"
        />

        {/* Portfolio Text */}
        <h2 className="pacifico-regular inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl ml-4 sm:ml-6 md:ml-8 lg:ml-10 p-2">
            Portfolio
        </h2>
    </div>

    <button className='text-white font-bold text-base sm:text-sm md:text-xl uppercase inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600 ' onClick={handleDownload}>Download Resume</button>

    <div>
        <ul className="flex items-center space-x-4">
            <li>
                <Link to="/ContactUs">
                    <button onClick={showModal}
                        className='bg-white py-1.5 px-3 text-black hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                        Contact Us
                    </button>
                </Link>
            </li>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className='user-form'>
                    <div className='heading'>
                        {isLoading && <Spin />}
                        {error && <p>Error: {error}</p>}
                        <h2 className='text-lg md:text-xl font-semibold flex justify-center text-blue-600 underline underline-offset-4'>
                            Contact Me
                        </h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="p-4">
                    <div className='flex flex-col gap-4'>
                        <label>Name:
                            <Input type='text' id='name' value={user.name} name='name' onChange={handleInput} className='rounded px-3' placeholder='Name' />
                        </label>
                        <label>Email:
                            <Input type='email' id='email' value={user.email} name='email' onChange={handleInput} className='rounded px-3' placeholder='Email' />
                        </label>
                        <label>Mobile No:
                            <Input type='number' id="mobile" value={user.mobile} name="mobile" onChange={handleInput} className='rounded px-2' placeholder='Phone Number' />
                        </label>
                        <label>Message:
                            <Input type='textarea' id='message' value={user.message} name="message" onChange={handleInput} className='rounded px-3' placeholder='Message' />
                        </label>
                    </div>
                </form>
            </Modal>
        </ul>
    </div>
</div>



    </>

    )
}

export default Navbar