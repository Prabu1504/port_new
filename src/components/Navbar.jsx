import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { Button, Input, message, Modal, Spin } from 'antd';

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
    return (<>

        <div className=' bg-black flex justify-between items-center h-24  mx-auto px-12 text-white'>
            <div className="relative flex items-center">
                {/* Logo */}
                <img
                    src={logo}
                    alt="logo"
                    className="w-8 sm:w-10 md:w-12 lg:w-14 mt-2 hover:shadow-inner"
                />

                {/* Portfolio Text */}
                <h2 className="pacifico-regular text-white sm:text-2xl md:text-3xl lg:text-4xl ml-4 sm:ml-6 md:ml-8 lg:ml-10 p-2 hover:text-[#00df9a]">
                    Portfolio
                </h2>
            </div>

            <div >
                <ul>
                    <li><Link to="/ContactUs">
                        <button onClick={showModal}
                            className='bg-white py-1 px-3 text-black hover:text-orange-600 transition duration-200 ease-in-out rounded-lg text-sm md:text-base lg:text-lg xl:text-xl'>
                            Contact Us</button>
                    </Link></li>
                    <Modal

                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}>
                        <div className='user-form'>
                            <div className='heading'>
                                {isLoading && <Spin />}{error && <p>Error:{error}</p>}
                                <h2 className='text-xl font-semibold justify-center flex items-center underline underline-offset-3'>Context Me</h2>

                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className=' flex flex-col gap-4'>
                                <label >Name: <Input type='text' id='name' value={user.name} name='name' onChange={handleInput} className='border-2 border-gray-600 rounded px-3' placeholder='Name' ></Input></label>
                                <label>Email: <Input type='email' id='email' value={user.email} name='email' onChange={handleInput} className='border-2 border-gray-600 rounded px-3' placeholder='Email'></Input></label>
                                <label >Mobile No: <Input type='number' id="mobile" value={user.mobile} name="mobile" onChange={handleInput} className='border-2 border-gray-600 rounded px-2' placeholder='Phone Number'></Input></label>
                                <label >Message: <Input type='textarea' id='message' value={user.message} name="message" onChange={handleInput} className='border-2 border-gray-600 rounded px-3' placeholder='Message'></Input></label>
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