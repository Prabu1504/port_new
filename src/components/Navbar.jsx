import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { Input, Modal, Spin } from 'antd';
import resume from "../assets/PrabuRe.pdf"

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
        link.download="PrabuRe.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.appendChild(link);
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
                <h2 className="pacifico-regular inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600 text-white sm:text-2xl md:text-3xl lg:text-4xl ml-4 sm:ml-6 md:ml-8 lg:ml-10 p-2">
                    Portfolio
                </h2>
            </div>
            
               <button className='text-white font-bold text-xl uppercase inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600 ' onClick={handleDownload}>Download Resume </button>
            
            <div >
                <ul>
                    <li><Link to="/ContactUs">
                        <button onClick={showModal}
                            className='bg-white py-1.5 px-3  text-black hover:bg-blue-600 hover:text-white  transition duration-200 ease-in-out rounded-lg text-sm md:text-base lg:text-lg xl:text-xl'>
                            Contact Us</button>
                    </Link></li>
                    <Modal
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}>
                        <div className='user-form'>
                            <div className='heading'>
                                {isLoading && <Spin />}{error && <p>Error:{error}</p>}
                                <h2 className='text-xl font-semibold justify-center flex text-blue-600 items-center underline underline-offset-4'>Context Me</h2>

                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className=' flex flex-col gap-4'>
                                <label >Name: <Input type='text' id='name' value={user.name} name='name' onChange={handleInput} className=' rounded px-3' placeholder='Name' ></Input></label>
                                <label>Email: <Input type='email' id='email' value={user.email} name='email' onChange={handleInput} className='rounded px-3' placeholder='Email'></Input></label>
                                <label >Mobile No: <Input type='number' id="mobile" value={user.mobile} name="mobile" onChange={handleInput} className=' rounded px-2' placeholder='Phone Number'></Input></label>
                                <label >Message: <Input type='textarea' id='message' value={user.message} name="message" onChange={handleInput} className=' rounded px-3' placeholder='Message'></Input></label>
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