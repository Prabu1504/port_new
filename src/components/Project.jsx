import React, { useState } from 'react';
import { Modal } from 'antd';
import project2 from '../assets/psp.PNG';
import project1 from '../assets/Capture.PNG';


const Project = () => {
    const currentData = [
        {
            _id: '1',
            images: project1,
            authorName: 'Prabu P',
            heading: 'First Ladder',
            description: 'First-Ladder is an International Education, Immigration and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers and employers. Our process starts with developing an accurate profile of each candidate and using that as out database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skillset, interests and aspirations, so that they can pursue their dreams while achieving higher returns on investment.'
            ,
            GitHub: 'https://github.com/Team-FSD0011/lader.git',
            Netlify: 'https://firstladder.netlify.app'
        },
        {
            _id: '2',
            images: project2,
            authorName: 'Prabu P',
            heading: 'PSP Hospital',
            description: 'An inviting homepage with an overview of the hospital, its mission, and key services. Features can include quick navigation to services, testimonials, and a contact and appointments hotline.',
            GitHub: 'https://github.com/Prabu1504/deplay',
            Netlify: 'https://hospitalpsp.netlify.app'
        }

    ];

    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleView = (record) => {
        setSelectedRecord(record); // Set the selected record
        setIsViewModalVisible(true); // Show the modal
    };

    const handleCancel = () => {
        setIsViewModalVisible(false);
        setSelectedRecord(null); // Clear the selected record when closing
    };

    return (
        <div>
            <section>
                <div className="bg-black py-4 px-4">
                    <h1 className="text-white md:text-4xl pt-8 ml-4  font-semibold inline-block transform transition duration-300 ease-out hover:scale-125 hover:text-blue-600">

                        Projects
                    </h1>
                    <div className="lg:mr-[1090px] md:w-[330px] lg:ml-auto mt-6 h-1" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 my-6 lg:px-28 ">
                        {currentData.map((project) => (
                            <div
                                key={project._id}
                                className="grid md:grid-cols-1 transform hover:scale-105 transition duration-300 ease-out lg:grid-cols-2 card2 bg-blue-500 border-2 rounded-[18px] overflow-hidden w-full md:w-full md:px-0"
                            >
                                <img
                                    className="object-cover rounded-t-lg md:w-full h-full md:h-[330px] w-full"
                                    src={project.images}
                                    alt={`Image of ${project.heading}`}
                                />
                                <div className="pl-2">
                                    <div className="flex items-center pt-6">
                                        <button className="text-sm rounded-lg p-1 w-28 h-10 bg-slate-200 text-black">
                                            {project.authorName}
                                        </button>
                                        {/* <h3 className="text-sm p-2 text-third">
                                            {new Date(project.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </h3> */}
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h1 className="text-white underline underline-offset-8 mt-2 md:mt-3 text-xl font-bold">
                                            {project.heading}
                                        </h1>
                                        <p
                                            className={`text-white font-semibold text-wrap ${!isExpanded ? 'line-clamp-3' : ''}`}
                                            onClick={() => setIsExpanded(!isExpanded)}
                                        >
                                            {project.description}
                                        </p>
                                        <button
                                            className="bg-white flex justify-center items-center mb-5 font-bold hover:bg-green-500 hover:text-white text-black py-2  px-4 rounded-md mt-20 ml-3"
                                            onClick={() => handleView(project)}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View Modal */}
                <Modal
                    title="View Project"
                    open={isViewModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    width="90%"  // Make the modal width responsive
                    className="overflow-auto"  // Ensure the content is scrollable on smaller screens
                >
                    {selectedRecord && (
                        <div className="bg-white py-5">
                            <div className="px-4 lg:px-10 mt-2 xl:px-20">
                                <div className="mb-8">
                                    <h1 className="text-blue font-bold text-blue-500 text-2xl sm:text-3xl py-3">
                                        {selectedRecord.heading.charAt(0).toUpperCase() + selectedRecord.heading.slice(1)}
                                    </h1>
                                    <div className="lg:mr-[1480px] md:w-[330px] lg:ml-auto mt-1 h-1 bg-mygreen" />

                                    <div className="mt-2">
                                        <p className="text-gray-600 text-lg sm:text-2xl px-1">{selectedRecord.authorName}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-[50%]">
                                        <img
                                            className="rounded-lg w-full h-auto lg:h-[420px] mt-0.5 shadow-2xl"
                                            style={{ boxShadow: '25px 30px 10px gray' }}
                                            src={selectedRecord.images}
                                            alt={`Card`}
                                        />
                                    </div>
                                    <div className="relative md:px-10 px-8 sm:flex-col md:text-xl text-lg text-justify pt-5 pb-8 w-full lg:w-[50%]">
                                        <span className="absolute text-blue-500 top-0 mt-5 left-0 ml-8 text-blue font-bold text-xl p-1 underline underline-offset-8 underline-red-500">
                                            Description
                                        </span>
                                        <div className="text-gray-700 text-md mt-10">
                                            {selectedRecord.description}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-12 sm:flex-row ml-0 sm:ml-20 gap-8 sm:gap-16 px-5">
                                    <a href={selectedRecord.GitHub} target="_blank" rel="noopener noreferrer">
                                        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-400 font-bold text-xl sm:text-2xl">
                                            GitHub
                                        </button>
                                    </a>
                                    <a href={selectedRecord.Netlify} target="_blank" rel="noopener noreferrer">
                                        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-400 font-bold text-xl sm:text-2xl">
                                            Netlify
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>

            </section>
        </div>
    );
};

export default Project;
