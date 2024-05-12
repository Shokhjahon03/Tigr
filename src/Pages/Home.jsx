import React from 'react'
import vectr from '../assets/Vector2.svg'
import vectr2 from '../assets/Vector3.svg'
import vectr222 from '../assets/Frame76.svg'
import vectr2222 from '../assets/Frame7.svg'
import famel from '../assets/Frame6.svg'
import vectr22 from '../assets/Vector(2.svg'
import { Checkbox, Label } from "flowbite-react";
const Home = () => {
  return (
    <>
      <header className='mt-[150px] w-full'>
            <div className="container">
                <div className='w-full min-h-[650px] h-full headers rounded-[26px] flex flex-col items-center pt-[70px] pb-[40px]'>
                        <button className='w-[207px] h-[40px] rounded-[200px] border text-white'>Консультация от врачей</button>
                        <p className='text-white pt-[20px] text-[20px] text-center pb-[30px] md:text-[60px]'>Получайте бесплатную консультацию <br /> от лучших специалистов</p>
                        <div className='flex items-center justify-center gap-[20px] flex-wrap'>
                            <button className='flex justify-center items-center w-[291.67px] h-[76px] bg-white rounded-[16px] gap-[13.31px]'>
                                <i className='bx bx-star text-[#0129E3]'></i>
                                <p>Лучшие консультанты</p>
                            </button>
                            <button className='flex justify-center items-center w-[291.67px] h-[76px] bg-white rounded-[16px] gap-[13.31px]'>
                                <img src={vectr} alt="alt" />
                                <p>Лучшие консультанты</p>
                            </button>
                            <button className='flex justify-center items-center w-[291.67px] h-[76px] bg-white rounded-[16px] gap-[13.31px]'>
                                <img src={vectr2} alt="alt" />
                                <p>Лучшие консультанты</p>
                            </button>
                        </div>
                        <div className='flex items-center justify-center gap-[20px] flex-wrap mt-[90px]'>
                            <div className='p-[26px] bg-[#FFFFFF80] rounded-[20px] w-[150px] border text-white md:w-[323.75px] md:h-[133px]'>
                                <p className='md:text-[50px]'>+1 000</p>
                                <p className='text-[10px] md:text-[16px]'>Врачей различных специализаций </p>
                            </div>
                            <div className='p-[26px] bg-[#FFFFFF80] rounded-[20px] w-[150px] border text-white md:w-[323.75px] md:h-[133px]'>
                                <p className='md:text-[50px]'>24/7</p>
                                <p className='text-[10px] md:text-[16px]'>Врачей различных специализаций </p>
                            </div>
                            <div className='p-[26px] bg-[#FFFFFF80] rounded-[20px] w-[150px] border text-white md:w-[323.75px] md:h-[133px]'>
                                <p className='md:text-[50px]'>+ 95%</p>
                                <p className='text-[10px] md:text-[16px]'>Врачей различных специализаций </p>
                            </div>
                            <div className='p-[26px] bg-[#FFFFFF80] rounded-[20px] w-[150px] border text-white  md:w-[323.75px] md:h-[133px]'>
                                <p className='md:text-[50px]'>+20 000</p>
                                <p className='text-[10px] md:text-[16px]'>Врачей различных специализаций </p>
                            </div>
                        </div>
                </div>
            </div>
      </header>
      <section className='w-full mt-[80px]'>
        <div className="container">
            <div className='w-full flex justify-center gap-[20px]'>
                
                <div className=' hidden  filter h-[857px] w-[335px] rounded-[18px] pl-[20px] pt-[30px] pb-[30px] pr-[20px] lg:flex flex-col gap-[24px] bg-white text-[#747474]'>
                    <div className='w-full flex items-end justify-between'>
                        <p className=''>Фильтрация<br />по направлениям</p>
                        <button className='flex items-center text-red-500'>
                        <i className='bx bx-x'></i>
                        <p>Сбросить</p>
                        </button>
                    </div>
                    <div className='w-full relative'>
                    <input type="text" className='bg-[#F8F8F8] w-full border-none h-[54px] p-[20px] rounded-[12px] ' placeholder='Поиск направления' />
                    <i className='bx bx-search-alt-2 absolute top-[21.15px] right-[21.17px]'></i>
                    </div>

                    <div className="flex w-full flex-col gap-4" id="checkbox">
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Аллерголог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Андролог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Венеролог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Врач УЗИ</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Гастроэтеролог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Гематолог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Генетик</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Гинеколог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Дерматолог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Диетолог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Инфекционист</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Кардиолог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">ЛОР</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Маммолог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Checkbox id="promotion" />
                            <Label htmlFor="promotion">Нарколог</Label>
                        </div>
                        <p>(12 312)</p>
                        </div>
                        
                        </div>

                </div>



                <div className='w-[1045px] flex flex-col gap-[34px]'>
                    {/* bir */}
                    <div className='w-full flex justify-between items-end'>
                        <p className='text-[20px] lg:text-[50px] leading-[52.5px]'>Список последних ответов <br /> на вопросы <span className='text-[#747474]'>(12 493)</span></p>
                        <button className='flex justify-center items-center gap-[9.17px] w-[215px] h-[54px] bg-white rounded-xl'>
                                <img src={vectr22} alt="alt" />
                                <p className='text-[#747474] text-[14px]'>Сортировать по</p>
                        </button>
                    </div>
{/* ikki */}
                    <div className='w-full flex justify-between items-center gap-[10px]'>
                            <input type="text" className='max-w-[836px]  pl-[30px]  text-[#747474] w-full rounded-2xl bg-white lg:h-[76px] border-none' placeholder='Искать по тексту в вопросе' />
                            <button className='flex justify-center items-center gap-[9.17px] w-[199px] lg:h-[76px] bg-[#0129E3] text-white text-[16px] rounded-2xl'>
                            <i class='bx bx-search-alt-2'></i>
                            <p>Поиск</p>
                            </button>
                    </div>

                        <select id='mobilesort' className='lg:hidden w-full h-[40px] border-none rounded-xl'>
                            <option value="#">Аллерголог</option>
                            <option value="#">Андролог</option>
                            <option value="#">Венеролог</option>
                            <option value="#">Врач УЗИ</option>
                            <option value="#">Гастроэтеролог</option>
                            <option value="#">Гематолог</option>
                            <option value="#">Генетик</option>
                            <option value="#">Гинеколог</option>
                            <option value="#">Дерматолог</option>
                            <option value="#">Диетолог</option>
                            <option value="#">Инфекционист</option>
                            <option value="#">Кардиолог</option>
                            <option value="#">ЛОР</option>
                            <option value="#">Маммолог</option>
                            <option value="#">Нарколог</option>
                        </select>

                    <div className='w-full flex flex-col gap-[20px] rounded-[18px] bg-white pb-[17px]'>
                        
                        <div className='w-full flex card justify-between'>
                            <p>Вопрос: 21408</p>
                            <p>Январь 27, 2024 9:41 pm</p>
                        </div>


                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards max-w-[925px] w-full flex flex-col gap-[10px] bg-[#F8F8F8]'>
                                            <div className='w-full flex justify-between items-center text-[#0129E3]'>
                                                <p className='text-[#0129E3]'>Получено ответов (3)</p>
                                                <p className='text-[#747474]'>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full border'></span>
                                            <p className='w-full text-[14px] text-[#050B2B]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения...<span className='underline decoration-1 text-[#747474]'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img className='' src={vectr222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards2 max-w-[925px] w-full flex flex-col gap-[10px] text-white bg-[#0129E3] order-2'>
                                            <div className='w-full flex justify-between items-center '>
                                                <p className=''>Получено ответов (3)</p>
                                                <p className=''>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full brr'></span>
                                            <p className='w-full text-[14px]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline decoration-1'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img className='order-1' src={vectr2222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full pl-[18px] pr-[18px]'>
                        <button className='w-full rounded-xl bg-[#F8F8F8] flex justify-center items-center h-[54px] text-[#747474] gap-[8px]'>
                            <p>Смотреть все ответы (2)</p>
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-[20px] rounded-[18px] bg-white pb-[17px]'>
                        
                        <div className='w-full flex card justify-between'>
                            <p>Вопрос: 21408</p>
                            <p>Январь 27, 2024 9:41 pm</p>
                        </div>


                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards max-w-[925px] w-full flex flex-col gap-[10px] bg-[#F8F8F8]'>
                                            <div className='w-full flex justify-between items-center text-[#0129E3]'>
                                                <p className='text-[#0129E3]'>Получено ответов (3)</p>
                                                <p className='text-[#747474]'>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full border'></span>
                                            <p className='w-full text-[14px] text-[#050B2B]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения...<span className='underline decoration-1 text-[#747474]'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img src={famel} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards2 max-w-[925px] w-full flex flex-col gap-[10px] text-white bg-[#0129E3] order-2'>
                                            <div className='w-full flex justify-between items-center '>
                                                <p className=''>Получено ответов (3)</p>
                                                <p className=''>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full brr'></span>
                                            <p className='w-full text-[14px]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline decoration-1'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img className='order-1' src={vectr2222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full pl-[18px] pr-[18px]'>
                        <button className='w-full rounded-xl bg-[#F8F8F8] flex justify-center items-center h-[54px] text-[#747474] gap-[8px]'>
                            <p>Смотреть все ответы (2)</p>
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-[20px] rounded-[18px] bg-white pb-[17px]'>
                        
                        <div className='w-full flex card justify-between'>
                            <p>Вопрос: 21408</p>
                            <p>Январь 27, 2024 9:41 pm</p>
                        </div>


                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards max-w-[925px] w-full flex flex-col gap-[10px] bg-[#F8F8F8]'>
                                            <div className='w-full flex justify-between items-center text-[#0129E3]'>
                                                <p className='text-[#0129E3]'>Получено ответов (3)</p>
                                                <p className='text-[#747474]'>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full border'></span>
                                            <p className='w-full text-[14px] text-[#050B2B]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения...<span className='underline decoration-1 text-[#747474]'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img src={vectr222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards2 max-w-[925px] w-full flex flex-col gap-[10px] text-white bg-[#0129E3] order-2'>
                                            <div className='w-full flex justify-between items-center '>
                                                <p className=''>Получено ответов (3)</p>
                                                <p className=''>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full brr'></span>
                                            <p className='w-full text-[14px]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline decoration-1'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img className='order-1' src={vectr2222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full pl-[18px] pr-[18px]'>
                        <button className='w-full rounded-xl bg-[#F8F8F8] flex justify-center items-center h-[54px] text-[#747474] gap-[8px]'>
                            <p>Смотреть все ответы (2)</p>
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-[20px] rounded-[18px] bg-white pb-[17px]'>
                        
                        <div className='w-full flex card justify-between'>
                            <p>Вопрос: 21408</p>
                            <p>Январь 27, 2024 9:41 pm</p>
                        </div>


                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards max-w-[925px] w-full flex flex-col gap-[10px] bg-[#F8F8F8]'>
                                            <div className='w-full flex justify-between items-center text-[#0129E3]'>
                                                <p className='text-[#0129E3]'>Получено ответов (3)</p>
                                                <p className='text-[#747474]'>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full border'></span>
                                            <p className='w-full text-[14px] text-[#050B2B]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения...<span className='underline decoration-1 text-[#747474]'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img src={famel} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards2 max-w-[925px] w-full flex flex-col gap-[10px] text-white bg-[#0129E3] order-2'>
                                            <div className='w-full flex justify-between items-center '>
                                                <p className=''>Получено ответов (3)</p>
                                                <p className=''>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full brr'></span>
                                            <p className='w-full text-[14px]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline decoration-1'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img className='order-1' src={vectr2222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full pl-[18px] pr-[18px]'>
                        <button className='w-full rounded-xl bg-[#F8F8F8] flex justify-center items-center h-[54px] text-[#747474] gap-[8px]'>
                            <p>Смотреть все ответы (2)</p>
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-[20px] rounded-[18px] bg-white pb-[17px]'>
                        
                        <div className='w-full flex card justify-between'>
                            <p>Вопрос: 21408</p>
                            <p>Январь 27, 2024 9:41 pm</p>
                        </div>


                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards max-w-[925px] w-full flex flex-col gap-[10px] bg-[#F8F8F8]'>
                                            <div className='w-full flex justify-between items-center text-[#0129E3]'>
                                                <p className='text-[#0129E3]'>Получено ответов (3)</p>
                                                <p className='text-[#747474]'>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full border'></span>
                                            <p className='w-full text-[14px] text-[#050B2B]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения...<span className='underline decoration-1 text-[#747474]'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img src={vectr222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full mt-[24px] pl-[18px] pr-[18px]'>
                            <div className='w-full flex justify-between items-start flex-wrap gap-y-5'>
                                    <div className='cards2 max-w-[925px] w-full flex flex-col gap-[10px] text-white bg-[#0129E3] order-2'>
                                            <div className='w-full flex justify-between items-center '>
                                                <p className=''>Получено ответов (3)</p>
                                                <p className=''>Lorri Warf (26 лет)</p>
                                            </div>
                                            <span className='w-full brr'></span>
                                            <p className='w-full text-[14px]'>
                                            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span className='underline decoration-1'>
                                            Читать полностью
                                            </span>
                                            </p>
                                    </div>
                                    <img className='order-1' src={vectr2222} alt="alt" />
                            </div>
                        </div>

                        <div className='w-full pl-[18px] pr-[18px]'>
                        <button className='w-full rounded-xl bg-[#F8F8F8] flex justify-center items-center h-[54px] text-[#747474] gap-[8px]'>
                            <p>Смотреть все ответы (2)</p>
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        </div>

                    </div>


                    <div className='w-full flex justify-center items-center'>
                            <div className='max-w-[438px] w-full flex  justify-between'>
                                <button className='lg:w-[54px] lg:h-[54px] bg-[#0129E3] rounded-xl text-white'>
                                    <i class='bx bx-chevron-left'></i>
                                </button>
                                <button className='lg:w-[54px] lg:h-[54px] bg-white rounded-xl'>
                                    1
                                </button>
                                <button className='lg:w-[54px] lg:h-[54px] bg-white rounded-xl'>
                                    2
                                </button>
                                <button className='lg:w-[54px] lg:h-[54px] bg-white rounded-xl'>
                                    3
                                </button>
                                <button className='lg:w-[54px] lg:h-[54px] bg-white rounded-xl'>
                                    4
                                </button>
                                <button className='lg:w-[54px] lg:h-[54px] bg-white rounded-xl'>
                                    ...
                                </button>
                                <button className='lg:w-[54px] lg:h-[54px] bg-[#0129E3] rounded-xl text-white'>
                                <i class='bx bx-chevron-right'></i>
                                </button>
                            </div>
                    </div>
                
                </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default Home
