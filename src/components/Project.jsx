import React, { useState } from 'react';
import { Modal } from 'antd'; // Make sure Ant Design is installed

const Project = () => {
    const currentData = [
        {
            _id: '1',
            images: 'https://via.placeholder.com/600x400', // Dummy image
            authorName: 'John Doe',
            createdAt: '2024-01-15T14:32:00',
            heading: 'First Project',
            description: `
                <p>This is a description for the first project.</p>
                <p>It provides an overview of the project's purpose and objectives.</p>
            `
        },
        {
            _id: '2',
            images: 'https://via.placeholder.com/600x400', // Dummy image
            authorName: 'Jane Smith',
            createdAt: '2024-02-20T09:15:00',
            heading: 'Second Project',
            description: `
                <p>This is a description for the second project.</p>
                <p>It provides an overview of the project's outcomes and goals.</p>
            `
        }, {
            _id: '3',
            images: '/src/assets/logo.png',
            authorName: 'Jane Smith',
            createdAt: '2024-02-20T09:15:00',
            heading: 'Second Project',
            description: `
                <p>This is a description for the second project.</p>
                <p>It provides an overview of the project's outcomes and goals.</p>
            `
        },
        {
            _id: '2',
            images: 'https://via.placeholder.com/600x400', // Dummy image
            authorName: 'Jane Smith',
            createdAt: '2024-02-20T09:15:00',
            heading: 'Second Project',
            description: `
                <p>This is a description for the second project.</p>
                <p>It provides an overview of the project's outcomes and goals.</p>
            `
        }
    ];

    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);

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
                    <h1 className="text-white text-2xl md:text-5xl font-bold pt-8 ml-4">
                        Projects
                    </h1>
                    <div className="lg:mr-[1090px] md:w-[330px] lg:ml-auto mt-6 h-1 bg-mygreen" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 lg:px-28">
                        {currentData.map((project) => (
                            <div
                                key={project._id}
                                className="grid md:grid-cols-1 lg:grid-cols-2 card2 bg-white border-2 rounded-[18px] overflow-hidden w-full md:w-full md:px-0"
                            >
                                <img
                                    className="object-cover rounded-t-lg md:w-full h-fit md:h-[330px] w-full"
                                    src={project.images}
                                    alt={`Image of ${project.heading}`}
                                />
                                <div className="pl-2">
                                    <div className="flex items-center pt-6">
                                        <button className="text-sm rounded-lg p-1 w-28 h-10 bg-slate-200 text-black">
                                            {project.authorName}
                                        </button>
                                        <h3 className="text-sm p-2 text-third">
                                            {new Date(project.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h1 className="text-black mt-2 md:mt-3 text-xl font-bold">
                                            {project.heading}
                                        </h1>
                                        <button
                                            className="bg-mygreen font-bold text-black py-2 px-4 rounded-md mb-4"
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
                    title="View Blog"
                    visible={isViewModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    width={400}
                >
                    {selectedRecord && (
                        <div className="bg-white py-5">
                            <div className="px-4 lg:px-10 mt-5 xl:px-20">
                                <div className="mb-8">
                                    <h1 className="text-blue font-bold text-4xl py-3">
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
                                <div className="flex flex-row gap-5">
                                    <div className="w-[50%]">
                                        <img
                                            className="rounded-lg md:w-full md:h-fit lg:h-full w-[90%] mt-0.5 shadow-2xl"
                                            style={{ boxShadow: '25px 30px 10px gray' }}
                                            src={selectedRecord.images}
                                            alt={`Card`}
                                        />
                                    </div>
                                    <div className="relative md:px-10 px-8 md:text-xl text-lg text-justify pt-5 pb-8 w-[50%]">
                                        <span className="absolute top-0 left-0 ml-8 text-blue font-bold text-3xl p-1 underline underline-offset-8 underline-red-500">
                                            Description
                                        </span>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: selectedRecord.description }}
                                            className="text-gray-700 text-2xl mt-10"
                                        />
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
