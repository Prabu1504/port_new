import React, { useState } from 'react';
import { Modal } from 'antd';
import project2 from "../assets/psp.png";
import project1 from"../assets/Capture.png";


const Project = () => {
    const currentData = [
        {
            _id: '1',
            images: project1, 
            authorName: 'John Doe',
            createdAt: '2024-01-15T14:32:00',
            heading: 'First Ladder',
            description: `
                First-Ladder is an International Education, Immigration and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers and employers. Our process starts with developing an accurate profile of each candidate and using that as out database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skillset, interests and aspirations, so that they can pursue their dreams while achieving higher returns on investment.
             `
        },
        {
            _id: '2',
            images:project2,
            authorName: 'Jane Smith',
            createdAt: '2024-02-20T09:15:00',
            heading: 'PSP Hospital',
            description: `
                An inviting homepage with an overview of the hospital, its mission, and key services. Features can include quick navigation to services, testimonials, and a contact and appointments hotline.
            `
        },
        
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
                                        </p>                                        <button
                                            className="bg-white font-bold hover:bg-green-500 hover:text-white text-black py-2  px-4 rounded-md mt-20 ml-3"
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
                    width={1400}
                >
                    {selectedRecord && (
                        <div className="bg-white py-5">
                            <div className="px-4 lg:px-10 mt-2 xl:px-20">
                                <div className="mb-8">
                                    <h1 className="text-blue font-bold text-blue-500 text-2xl py-3">
                                        {selectedRecord.heading.charAt(0).toUpperCase() + selectedRecord.heading.slice(1)}
                                    </h1>
                                    <div className="lg:mr-[1480px] md:w-[330px] lg:ml-auto mt-1 h-1 bg-mygreen" />

                                    <div className="flex justify-between mt-2">
                                        <p className="text-gray-600 text-2xl px-1">{selectedRecord.authorName}</p>
                                        <p className="text-gray-500 text-xl">
                                            <span className="text-sm">CreatedAt: </span>
                                            {new Date(selectedRecord.createdAt).toISOString().split('T')[0]}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-[50%]">
                                        <img
                                            className="rounded-lg md:w-full md:h-fit lg:h-[420px] mt-0.5 shadow-2xl"
                                            style={{ boxShadow: '25px 30px 10px gray' }}
                                            src={selectedRecord.images}
                                            alt={`Card`}
                                        />
                                    </div>
                                    <div className="relative md:px-10 px-8 md:text-xl text-lg text-justify pt-5 pb-8 w-[50%]">
                                        <span className="absolute text-blue-500 top-0 left-0 ml-8 text-blue font-bold text-xl p-1 underline underline-offset-8 underline-red-500">
                                            Description
                                        </span>
                                        <div
                                            className="text-gray-700 text-md mt-10"
                                        />{ selectedRecord.description }
                                    </div>
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
