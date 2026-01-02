import React from 'react';
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <header>
            <div className="bontainer">
                <div className="nav-top bg-black p-4">
                    <p className='text-small text-center text-white'>✨Discover Your Dream Property with Estatein</p>
                </div>
                <nav className="nav-bottom flex items-center justify-between py-4 px-10 bg-[#1A1A1A]">
                    <div className="logo ml-30">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className="nav-item flex-1 flex justify-center">
                        <ul className='flex text-white gap-8 items-center list-none m-0 p-0'>
                            <li className='px-3 py-1 border border-transparent rounded  cursor-pointer hover:border-[#262626] hover:bg-[#141414]'>Home</li>
                            <li className='px-3 py-1 border border-transparent rounded  cursor-pointer hover:border-[#262626] hover:bg-[#141414]'>About Us</li>
                            <li className='px-3 py-1 border border-transparent rounded  cursor-pointer hover:border-[#262626] hover:bg-[#141414]'>Properties</li>
                            <li className='px-3 py-1 border border-transparent rounded  cursor-pointer hover:border-[#262626] hover:bg-[#141414]'>Services</li>
                        </ul>
                    </div>

                    <div className="btn mr-30">
                        <button className='bg-[#141414] border-[#262626]  cursor-pointer text-white px-4 py-2 rounded'>Contact Us</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;