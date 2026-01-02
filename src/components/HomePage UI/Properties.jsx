import React from 'react';
import Star from '../../assets/Abstract Design.png'
import Image1 from '../../assets/Image.png'
import Image2 from '../../assets/Image(1).png'
import Image3 from '../../assets/Image(2).png'

import Bed1 from '../../assets/Icon(1).png'
import Bed2 from '../../assets/Icon(2).png'
import Bed3 from '../../assets/Icon(3).png'

const Properties = () => {
    return (
        <section className="w-full bg-black px-6 py-16">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                    <div className="top-left lg:w-2/3 w-full">
                        <div className="flex items-start gap-4">
                            <img src={Star} alt="star" className="w-12 h-12 shrink-0" />
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Featured Properties
                                </h2>
                                <p className="text-[#b3b3b3] text-base mt-2 max-w-2xl">
                                    Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="top-right lg:w-1/3 w-full flex justify-end">
                        <button className="px-6 py-3 rounded-xl border border-[#2a2a2a] text-white bg-[#141414] hover:bg-[#1c1c1c] transition">
                            View All Properties
                        </button>
                    </div>
                </div>

                <div className="flex gap-5">

                    {/* Card 1 */}
                    <div className="card-1 bg-[#0F0F0F] border border-[#262626] rounded-2xl p-8 w-full max-w-[420px] lg:max-w-[440px] xl:max-w-[460px]">

                        <div className="flex justify-center mb-6">
                            <div className="w-full overflow-hidden rounded-2xl">
                                <img src={Image1} alt="Seaside Serenity" className="w-full h-64 object-cover object-center" />
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <p className="text-3xl text-white font-bold">Seaside Serenity Vila</p>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-[#b3b3b3] text-base">
                                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                <span className="text-white font-semibold underline"> Read More</span>
                            </p>
                        </div>

                        <div className="flex flex-row gap-3 justify-center items-center mb-6">
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed1} alt="beds" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">4-Bedroom</div>
                            </div>
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed2} alt="baths" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">3-Bathroom</div>
                            </div>
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed3} alt="garage" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">2-Garages</div>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-center items-center">
                            <button className="w-full py-3 text-white font-semibold bg-[#0F0F0F]">
                                <p className="text-base text-[#b3b3b3]">Price</p>
                                $550,000
                            </button>

                            <button className="w-full px-5 py-3 rounded bg-[#6c4cff] text-white font-semibold hover:bg-[#5a3fe0] transition">
                                Property Details
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card-2 bg-[#0F0F0F] border border-[#262626] rounded-2xl p-8 w-full max-w-[420px] lg:max-w-[440px] xl:max-w-[460px]">

                        <div className="flex justify-center mb-6">
                            <div className="w-full overflow-hidden rounded-2xl">
                                <img src={Image2} alt="Metropolitian Heaven" className="w-full h-64 object-cover object-center" />
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <p className="text-3xl text-white font-bold">Metropolitian Heaven</p>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-[#b3b3b3] text-base">
                                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                <span className="text-white font-semibold underline"> Read More</span>
                            </p>
                        </div>

                        <div className="flex flex-row gap-3 justify-center items-center mb-6">
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed1} alt="beds" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">4-Bedroom</div>
                            </div>
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed2} alt="baths" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">3-Bathroom</div>
                            </div>
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed3} alt="garage" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">2-Garages</div>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-center items-center">
                            <button className="w-full py-3 text-white font-semibold bg-[#0F0F0F]">
                                <p className="text-base text-[#b3b3b3]">Price</p>
                                $550,000
                            </button>

                            <button className="w-full px-5 py-3 rounded bg-[#6c4cff] text-white font-semibold hover:bg-[#5a3fe0] transition">
                                Property Details
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card-3 bg-[#0F0F0F] border border-[#262626] rounded-2xl p-8 w-full max-w-[420px] lg:max-w-[440px] xl:max-w-[460px]">

                        <div className="flex justify-center mb-6">
                            <div className="w-full overflow-hidden rounded-2xl">
                                <img src={Image3} alt="Rustric Retreat Cottage" className="w-full h-64 object-cover object-center" />
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <p className="text-3xl text-white font-bold">Rustric Retreat Cottage</p>
                        </div>

                        <div className="text-center mb-6">
                            <p className="text-[#b3b3b3] text-base">
                                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...
                                <span className="text-white font-semibold underline"> Read More</span>
                            </p>
                        </div>

                        <div className="flex flex-row gap-3 justify-center items-center mb-6">
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed1} alt="beds" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">4-Bedroom</div>
                            </div>
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed2} alt="baths" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">3-Bathroom</div>
                            </div>
                            <div className="flex gap-2 rounded-xl border border-[#2a2a2a] px-2 py-2">
                                <img src={Bed3} alt="garage" className="w-5 h-5" />
                                <div className="text-white font-semibold text-sm">2-Garages</div>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-center items-center">
                            <button className="w-full py-3 text-white font-semibold bg-[#0F0F0F]">
                                <p className="text-base text-[#b3b3b3]">Price</p>
                                $550,000
                            </button>

                            <button className="w-full px-5 py-3 rounded bg-[#6c4cff] text-white font-semibold hover:bg-[#5a3fe0] transition">
                                Property Details
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Properties;
