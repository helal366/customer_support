import React from 'react';

const TaskStatus = ({progress}) => {
    // const len=progress.length;
    console.log(progress);
    return (
        <div className='mb-5'>
            <h2 className='mb-2'>Task Status</h2>
            {
                progress.map(p=> <div key={p.id} className='bg-white rounded shadow-sm p-2 md:p-4 mb-4'>
                    <p className='font-semibold mb-2'>{p.title}</p>
                    <button className='bg-green-500 hover:bg-green-600 text-white w-full px-2 py-1 rounded cursor-pointer'>Complete</button>
                </div>)
            }
            <p className='text-xs text-gray-700/60'>Select a ticket to add to Task Status.</p>
           
        </div>
    );
};

export default TaskStatus;