import React from 'react';
import vector1 from './vector1.png'


const Hero = ({progress, resolved}) => {
    return (
        <section className='py-14 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="relative overflow-hidden bg-linear-to-br from-[#632ee3] to-[#9f62f2] rounded-lg ">
                {/* Left Image */}
                <img
                    src={vector1}
                    alt="vector"
                    className="absolute inset-0 w-5/12 h-full object-fill "
                />

                {/* Right Image (Mirrored) */}
                <img
                    src={vector1}
                    alt="vector"
                    className="absolute right-0 top-0 w-5/12 h-full object-fill scale-x-[-1]"
                />

                {/* Content */}
                <div className="relative py-20 text-white text-center">
                    <p className="text-4xl font-bold">
                        In-Progres
                    </p>
                    <p className="text-4xl font-bold">
                        {progress.length}
                    </p>
                </div>
            </div>
             <div className="relative overflow-hidden bg-linear-to-br from-[#54cf68] to-[#00827a] rounded-lg">
                {/* Left Image */}
                <img
                    src={vector1}
                    alt="vector"
                    className="absolute left-0 top-0 w-5/12 h-full object-fill"
                />

                {/* Right Image (Mirrored) */}
                <img
                    src={vector1}
                    alt="vector"
                    className="absolute right-0 top-0 w-5/12 h-full object-fill scale-x-[-1]"
                />

                {/* Content */}
                <div className="relative py-20 text-white text-center">
                     <h1 className="text-4xl font-bold">
                        Resolved
                    </h1>
                    <h1 className="text-4xl font-bold">
                        {resolved.length}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;