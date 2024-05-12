import React, { useState } from 'react'
import logo from '../assets/Logo2.svg'
const Navbar = () => {
    let [openMenu,setOpenMenu]=useState(false)
    let [selectvalue,setSellectValue]=useState('uz')
  return (
    <nav className='w-full fixed top-0 left-0 z-50'>
        <div className="container">
            <div className="navbar w-full h-[130px] flex flex-col">
                <div className='w-full flex justify-between h-[54px] items-center'>
                    <div className='flex h-full items-center gap-1'>
                    <i className='bx bx-map text-[#0129E3]'></i>
                    {/* <p className='text-[#050B2B]'>Ташкент</p>
                    <i class='bx bx-chevron-down text-[#747474]'></i> */}
                    <select className='border-none rounded-xl outline-none cursor-pointer' name="" id="">
                        <option value="#">Toshkent</option>
                        <option value="#">Qashqadaryo</option>
                        <option value="#">Buxoro</option>
                        <option value="#">Xorazm</option>
                        <option value="#">Farg'ona</option>
                        <option value="#">Andijon</option>
                        <option value="#">Namangan</option>
                        <option value="#">Surxondaryo</option>
                        <option value="#">Navoiy</option>
                        <option value="#">Samarqand</option>
                        <option value="#">Jizzax</option>
                        <option value="#">Sirdaryo</option>
                    </select>
                    </div>
                    <div className='h-full flex items-center gap-1'>
                        {
                            selectvalue==='rus'?<img className='w-[20.2px] border' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" alt="alt" />:null
                        }
                        {
                            selectvalue==='uz'?<img className='w-[20.2px] border' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1200px-Flag_of_Uzbekistan.svg.png" alt="alt" />:null
                        }
                        {
                            selectvalue==='eng'?<img className='w-[20.2px] border' src="https://t4.ftcdn.net/jpg/01/71/57/89/360_F_171578974_eNhE6sEpc6jsK6Py7IxhTbIZZQ7878Wb.webp" alt="alt" />:null
                        }
                    <select onChange={(e)=>setSellectValue(e.target.value)} className='border-none rounded-xl outline-none text-[12px] cursor-pointer' name="" id="">
                        <option  value="uz">Узбекский</option>
                        <option className='text-[10px]'  value="rus">Русский</option>
                        <option value="eng">Английский</option>
                    </select>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between relative'>
                        <div className='flex items-center gap-[20px]'>
                        <img className='w-[216px]' src={logo} alt="ast" />
                        <p className='w-[103px] text-[#747474] text-[10px] lg:text-[16px]'>Консультация от врачей</p>
                        </div>
                        
                        <button onClick={()=>setOpenMenu(!openMenu)} className='lg:hidden'><i className='bx bx-menu text-[25px]'></i></button>
                        <div className={openMenu?' absolute top-[50px] left-0 bg-white  w-full h-dvh flex flex-col gap-5 items-center lg:hidden':'hidden'}>
                                <button className='w-full text-white gap-5 flex justify-center items-center rounded-lg bg-[#0129E3] h-[50px]'>
                                <i className='bx bx-grid-alt text-[25px]'></i>
                                <p>Каталог услуг</p>
                                </button>
                                <div className='w-full flex justify-between bg-white p-3 rounded-lg flex-wrap'>
                                    <button>О проекте</button>
                                    <button>Партнерство</button>
                                    <button>Контакты</button>
                                </div>
                                <div className='w-full flex justify-center bg-white p-3 rounded-lg'>
                                    <button className='text-[#0129E3]'>Вход / Регистрация</button>
                                </div>
                        </div>

                        <button className='w-[261px] hidden text-white gap-5 lg:flex justify-center items-center rounded-lg bg-[#0129E3] h-[50px] md:h-[76px] hover:bg-slate-200 hover:text-[#0129E3]'>
                                <i className='bx bx-grid-alt text-[25px]'></i>
                                <p>Каталог услуг</p>
                                </button> 
                                <div className='w-[416.5px] hidden h-[76px] md:pl-[49.75px] md:pr-[49.75px] lg:flex justify-between bg-white p-3 rounded-lg flex-wrap'>
                                    <button className='text-[16px] text-[#747474] hover:text-[#0129E3]'>О проекте</button>
                                    <button className='text-[16px] text-[#747474] hover:text-[#0129E3]'>Партнерство</button>
                                    <button className='text-[16px] text-[#747474] hover:text-[#0129E3]'>Контакты</button>
                                </div> 
                                <div className='w-[276px] h-[76px] hidden lg:flex justify-center bg-white p-3 rounded-lg '>
                                    <button className='text-[#0129E3] w-full h-full rounded-xl hover:bg-[#0129E3] hover:text-white'>Вход / Регистрация</button>
                                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
