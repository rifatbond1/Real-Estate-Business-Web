import React from 'react';
import Icon_1 from '../../assets/Icon Container.png'
import Icon_2 from '../../assets/Icon Container(1).png'
import Icon_3 from '../../assets/Icon Container(2).png'
import Icon_4 from '../../assets/Icon Container(3).png'
import Arrow from '../../assets/Icon.png'

const Features = () => {
    return (
        <div className="flex justify-between items-center  bg-black py-5 px-20">
            <div className="relative card-1 bg-[#141414] border border-[#262626] rounded-2xl px-20 py-8 max-w-sm flex flex-col items-center text-center">
                <img className="absolute top-4 right-4 w-6 h-6" src={Arrow} alt="Arrow" />
                <img className="mb-4 w-16 h-16" src={Icon_1} alt="Icon" />
                <p className="text-xl font-bold text-white">Find Your Dream Home</p>
            </div>
            <div className="relative card-1 bg-[#141414] border border-[#262626] rounded-2xl px-20 py-8 max-w-sm flex flex-col items-center text-center">
                <img className="absolute top-4 right-4 w-6 h-6" src={Arrow} alt="Arrow" />
                <img className="mb-4 w-16 h-16" src={Icon_2} alt="Icon" />
                <p className="text-xl font-bold text-white">Unlock Property Value</p>
            </div>
            <div className="relative card-1 bg-[#141414] border border-[#262626] rounded-2xl px-20 py-8 max-w-sm flex flex-col items-center text-center">
                <img className="absolute top-4 right-4 w-6 h-6" src={Arrow} alt="Arrow" />
                <img className="mb-4 w-16 h-16" src={Icon_3} alt="Icon" />
                <p className="text-xl font-bold text-white">Effortless Property</p>
            </div>
            <div className="relative card-1 bg-[#141414] border border-[#262626] rounded-2xl px-20 py-8 max-w-sm flex flex-col items-center text-center">
                <img className="absolute top-4 right-4 w-6 h-6" src={Arrow} alt="Arrow" />
                <img className="mb-4 w-16 h-16" src={Icon_4} alt="Icon" />
                <p className="text-xl font-bold text-white">Smart Investments</p>
            </div>
        </div>
    );
};

export default Features;
