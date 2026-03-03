import React from 'react';
import { FaCircle } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const Ticket = ({ ticket, progress, setProgress }) => {
    const {id, title, description, ticket_no, priority, customer, date } = ticket;
    const isProgress = progress.some(x => x.title === title);
    const handleProgress = () => {
        if (!isProgress) {
            const updatedProgress = [...progress, {id,title}];
            setProgress(updatedProgress);
            localStorage.setItem("progress", JSON.stringify(updatedProgress))
        }
    }
    return (
        <section className='card'>
            {/* title */}
            <div className='flex flex-wrap justify-between items-center text-sm gap-3 mb-2'>
                <p className='font-semibold'>{title}</p>
                <button
                    onClick={handleProgress}
                    disabled={isProgress}
                    className={`px-3 py-1 rounded-full ${isProgress ? "bg-yellow-400/20 cursor-not-allowed" : "bg-green-400/20 cursor-pointer"}  flex justify-baseline items-center `}>
                    {isProgress ? (
                       <>
                            <span className='mr-1 text-yellow-500'><FaCircle /></span>
                            <span>In-Progress</span>
                        </>
                    ) : (
                        <>
                            <span className='mr-1 text-green-500'><FaCircle /></span>
                            <span>Open</span>
                        </>
                    )}


                </button>
            </div>

            {/* description */}
            <div className='mb-2 text-xs text-gray-500 line-clamp-2'>
                {description}
            </div>

            {/* others */}
            <div className='flex flex-wrap justify-between gap-3 text-xs text-gray-500'>
                <div className='flex gap-2'>
                    <p className=''>{ticket_no}</p>
                    <p className={`${priority == "High Priority" ? "text-red-600/80" : "text-yellow-500"}`}>{priority}</p>
                </div>
                <div className='flex gap-2 justify-end items-center'>
                    <p>{customer}</p>
                    <div className='flex gap-1 items-center'>
                        <span><MdOutlineDateRange /></span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ticket;