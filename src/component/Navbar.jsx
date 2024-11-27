import React from 'react'
import { SlArrowUp } from 'react-icons/sl'
import logo from '../../public/img/Logo.png'
import icon1 from '../../public/img/icon1.png'
import icon2 from '../../public/img/icon2.png'
import icon3 from '../../public/img/icon3.png'
import button from '../../public/img/button.png'
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
    return (
        <>
            <nav className='w-full  bg-[#f0f0f0]'>
                <div className="max-w-Container mx-auto">
                    <div className="flex justify-between py-[5px]">
                        <ul className='flex gap-8'>
                            <li className='font-Inter-Regular text-xs text-[#F97316] capitalize flex gap-3 items-center'>English <SlArrowUp /></li>
                            <li className='font-Inter-Regular text-xs text-[#434343] capitalize'>Help Center</li>
                            <li className='font-Inter-Regular text-xs text-[#434343] capitalize'>Helpline: 0964781656</li>
                        </ul>
                        <ul className='flex gap-8'>
                            <li className='font-Inter-Regular text-xs text-[#434343] capitalize'>Become a Seller</li>
                            <li className='font-Inter-Regular text-xs text-[#434343] capitalize'>Order Track</li>
                            <li className='font-Inter-Regular text-xs text-[#F97316] capitalize'>Sign up / Login</li>

                        </ul>
                    </div>
                    <div className="py-[13px] bg-[#FFFFFF] flex items-center">
                        <img src={logo} alt="" />
                        <div className='relative'>
                            <input type="text" className='w-[704px] bg-[#EFF0F5] p-[13px] border rounded-xl ml-7 placeholder:font-Inter-Regular placeholder:text-sm placeholder:text-[#707070]' placeholder='Search Product' />
                            <button className='p-[14px] absolute top-0 right-0 bg-[#FF9500] rounded-xl flex justify-center items-center text-[#FFFFFF]'><CiSearch className='w-[24px] h-[24px]' /></button>
                        </div>
                        <div className='flex items-center gap-3 mx-[31px]'>
                            <button className='w-8 h-8 bg-[#F5F5F5] rounded-lg flex justify-center items-center'><img src={icon1} alt="" /></button>
                            <button className='w-8 h-8 bg-[#F5F5F5] rounded-lg flex justify-center items-center'><img src={icon2} alt="" /></button>
                            <button className='w-8 h-8 bg-[#F5F5F5] rounded-lg flex justify-center items-center'><img src={icon3} alt="" /></button>
                        </div>
                        <button><img src={button} alt="" /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar