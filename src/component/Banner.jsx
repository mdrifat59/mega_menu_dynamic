

import React, { useEffect, useState } from 'react';
import banner from "../../public/img/banner.jpg";
import axios from 'axios';
import { FaAngleRight } from 'react-icons/fa';

const Banner = () => {
    const [list, setList] = useState([]);
    const [hoverItemId, setHoverItemId] = useState(null)
    const [hoverInItemId, setHoverInItemId] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("data/data.json");
            setList(data.categories);
            console.log(data);

        };
        fetchData();

    }, []);

    // Filter items with and without children
    // const itemsWithChildren = list.filter((item) => item.childrens && item.childrens.length > 0);
    // const itemsWithoutChildren = list.filter((item) => !item.childrens || item.childrens.length === 0);

    return (
        <>
            <section className="w-full pb-[130px] bg-[#f0f0f0]">
                <img src={banner} className="object-cover" alt="" />
                <div className="max-w-Container mx-auto relative">
                    <div className="w-[230px] absolute top-[-347px] p-3 left-0 bg-[#FFFFFF]">
                        <ul className="flex flex-col gap-[11px] relative">
                            {
                                list.map(item => (
                                    <li key={item.id} onMouseEnter={() => {
                                        setHoverItemId(item.id)
                                    }} onMouseLeave={() => setHoverItemId(null)} className='relative flex justify-between items-center cursor-pointer' >
                                        <span className=''>{item.name}</span>
                                        {item.children && <FaAngleRight />}

                                        {/* second hover */}
                                        {item.id === hoverItemId && item.children && (
                                            <div className="absolute top-[-20px] right-[-225px] w-[230px] p-3 bg-[#FFFFFF] flex flex-col gap-2">
                                                {item.children.map(cItem => (
                                                    <span className='flex justify-between items-center' key={cItem.id} onMouseEnter={() => setHoverInItemId(cItem.id)} onMouseLeave={() => setHoverInItemId(null)}>{cItem.name}
                                                        {cItem.children && <FaAngleRight />}

                                                        {/* third hover */}
                                                        {cItem.id === hoverInItemId && cItem.children && (
                                                            <div className="absolute top-[-0px] right-[-215px] w-[230px] p-3 bg-[#FFFFFF] flex flex-col gap-2">
                                                                {cItem.children.map(ccItem => (
                                                                    <span key={ccItem.id}>{ccItem.name}</span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        )

                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
