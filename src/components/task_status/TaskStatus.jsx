import React from 'react';

const TaskStatus = ({progress, setProgress, progressKey, resolved, setResolved, resolvedKey}) => {
    const len=progress.length;
    console.log(progress);
    const handleCompleteTask=(p)=>{
        const {id, title}=p;
        const filteredProgress=progress.filter(f=>f.id!==id);
        setProgress(filteredProgress);
        localStorage.setItem(progressKey, JSON.stringify(filteredProgress));

        const updatedResolved=[...resolved, {id, title}];
        setResolved(updatedResolved);
        localStorage.setItem(resolvedKey, JSON.stringify(updatedResolved));
    }
    return (
        <div className='mb-5'>
            <h2 className='mb-2'>Task Status</h2>
            {
                !len &&  <p className='text-xs text-gray-700/60'>Select a ticket to add to Task Status.</p>
            }
            {
                progress.map(p=> <div key={p.id} className='bg-white rounded shadow-sm p-2 md:p-4 mb-4'>
                    <p className='font-semibold mb-2'>{p.title}</p>
                    <button 
                    onClick={()=>handleCompleteTask(p)}
                    className='bg-green-500 hover:bg-green-600 text-white w-full px-2 py-1 rounded cursor-pointer'>Complete</button>
                </div>)
            }
            
           
        </div>
    );
};

export default TaskStatus;