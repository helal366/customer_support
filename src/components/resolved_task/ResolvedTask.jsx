import React, { useState } from 'react';
import { BiSolidHandUp } from "react-icons/bi";

const ResolvedTask = ({ resolved }) => {
    const [resolvedOpen, setResolvedOpen] = useState(false);
    console.log(resolved);
    const len = resolved.length;
    return (
        <section>
            <h2 onClick={() => setResolvedOpen(!resolvedOpen)}
                className='mb-2 cursor-pointer hover:bg-green-700 p-2 bg-green-900 rounded text-white'>
                Resolved Task
            </h2>
            <div className={`flex gap-3 items-center mb-8 ${resolvedOpen ? "block" : "hidden"}`}>
                                <span>Click on Resolved Task. </span>
                                <span className='text-green-600'><BiSolidHandUp size={24}/></span>
                            </div>
            <div className={`mb-5 ${resolvedOpen ? "hidden" : "block"}`}>
                {
                    !len && <p className='text-sm text-gray-700/90'>No resolved tasks yet.</p>
                }

                {
                    resolved.map(r => <div key={r.id} className='bg-[#e0e7ff] rounded shadow-sm p-2 md:p-4 mb-4'>
                        <p className='font-semibold mb-2'>{r.title}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ResolvedTask;