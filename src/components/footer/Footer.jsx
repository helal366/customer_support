import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
const Footer = () => {
    return (
        <section className='bg-black min-h-16 padding py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-5 xl:gap-7 mb-4'>
                <div className='mb-8'>
                    <p className='text-gray-50 font-semibold text-sm mb-2'>CS — Ticket System</p>
                    <p className='text-xs text-gray-300 pr-3'>CS — Ticket System is designed to streamline customer support by providing a centralized platform to create, track, and manage tickets. It helps support teams respond faster, prioritize issues, and maintain clear communication with customers.</p>
                </div>
                <div className='flex flex-col gap-4 text-xs text-gray-300 mb-8 '>
                    <p className='text-gray-50 font-semibold text-sm mb-2'>Company</p>
                    <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                </div>
                <div className='flex flex-col gap-4 text-xs text-gray-300 mb-8'>
                    <p className='text-gray-50 font-semibold text-sm mb-2'>Services</p>
                    <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>
                <div className='flex flex-col gap-4 text-xs text-gray-300 mb-8'>
                    <p className='text-gray-50 font-semibold text-sm mb-2'>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>
                <div className='flex flex-col gap-4 text-xs text-gray-300 mb-8'>
                    <p className='text-gray-50 font-semibold text-sm mb-2'>Social Links</p>
                    <div className='flex items-center justify-start gap-2'>
                        <span className='p-1 rounded-full bg-white text-black'><FaXTwitter size={12}/></span>
                        <span>@CS — Ticket System</span>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <span className='p-1 rounded-full bg-white text-black'><RiLinkedinFill size={12}/></span>
                        <span>@CS — Ticket System</span>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <span className='p-1 rounded-full bg-white text-black'><FaFacebookF size={12}/></span>
                        <span>@CS — Ticket System</span>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <span className='p-1 rounded-full bg-white text-black'><FaEnvelope /></span>
                        <span>support@cst.com</span>
                    </div>
                      
                </div>
            </div>
                <p className='text-xs text-gray-50 text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
        </section>
    );
};

export default Footer;