import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li><a className="links">Home</a></li>
      <li><a className="links">About</a></li>
      <li><a className="links">Services</a></li>
      <li><a className="links">Portfolio</a></li>
      <li><a className="links">Blog</a></li>
      <li><a className="links">Contact</a></li>
    </>
  );

  return (
    <div className="bg-white shadow-md border-b-2 border-gray-500/30 padding sticky top-0 z-10">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Left - Title (Always Visible) */}
        <div className="text-2xl font-bold flex items-center justify-start gap-2">
            {/* Hamburger Icon - Visible Below LG */}
          <div 
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
         <span> CS — Ticket System</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Links - Visible on Large Screen */}
          <ul className="hidden lg:flex gap-2 font-medium text-sm">
            {navLinks}
          </ul>

          {/* Button - Always Visible */}
          <button className="btn btn-primary flex gap-2 border-none bg-linear-to-br from-[#632ee3] to-[#9f62f2]">
            <span>+</span>
            <span>New Ticket</span>
          </button>

          
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="menu bg-base-100 rounded-box gap-2">
            {navLinks}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;