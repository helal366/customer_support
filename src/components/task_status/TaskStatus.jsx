import React, { useState } from 'react';
import { BiSolidHandUp } from "react-icons/bi";

const TaskStatus = ({ progress, setProgress, progressKey, resolved, setResolved, resolvedKey }) => {
    const [statusOpen, setStatusOpen] = useState(false);
    const len = progress.length;
    const handleCompleteTask = (p) => {
        const { id, title } = p;
        const filteredProgress = progress.filter(f => f.id !== id);
        setProgress(filteredProgress);
        localStorage.setItem(progressKey, JSON.stringify(filteredProgress));

        const updatedResolved = [...resolved, { id, title }];
        setResolved(updatedResolved);
        localStorage.setItem(resolvedKey, JSON.stringify(updatedResolved));
    }
    return (
        <div className={`mb-5 lg:mb-8`}>
            <h2 onClick={() => setStatusOpen(!statusOpen)}
                className='mb-2 cursor-pointer hover:bg-green-700 p-2 bg-green-900 rounded text-white'>
                    Task Status
            </h2>
                <div className={`flex gap-3 items-center mb-8 ${statusOpen ? "block" : "hidden"}`}>
                    <span>Click on Task Status. </span>
                    <span className='text-green-600'><BiSolidHandUp size={24}/></span>
                </div>
            <div className={`mb-5 ${statusOpen ? "hidden" : "block"}`}>
                {
                    !len && <p className='text-sm text-gray-700/90'>Select a ticket to add to Task Status.</p>
                }
                {
                    progress.map(p => <div key={p.id} className='bg-white rounded shadow-sm p-2 md:p-4 mb-4'>
                        <p className='font-semibold mb-2'>{p.title}</p>
                        <button
                            onClick={() => handleCompleteTask(p)}
                            className='bg-green-500 hover:bg-green-600 text-white w-full px-2 py-1 rounded cursor-pointer'>Complete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TaskStatus;