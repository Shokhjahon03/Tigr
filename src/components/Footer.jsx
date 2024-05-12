import React from 'react'
import logo from '../assets/Union.svg'

const Footer = () => {
  return (
    <footer className='w-full  bg-[#050B2B] mt-[160px] text-white'>
        <div className="container">
            <div className='footter w-full pt-[80px] flex flex-col'>

                <div className='w-full flex flex-wrap gap-y-[30px] gap-x-[115px]'>
                    <div>
                        <div className='flex items-center gap-[11.48px]'>
                        <img src={logo} alt="alt" />
                        <p className='text-[35px]'>Med Yordam</p>
                        </div>
                        <p className='text-[16px]'>Консультация от врачей</p>
                    </div>

                    <div className='flex gap-x-[115px] flex-wrap gap-y-[40px]'>
                    <div className='flex flex-col gap-[18px]'>
                      <li className='text-[16px] text-[#F8F8F8] '>Каталог услуг</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Медицинская консультация</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Справочник лекарств</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Справочник болезней</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Справочник лекарств</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Справочник Врачей и Клиник</li>
                    </div>
                    <div className='flex flex-col gap-[18px]'>
                      <li className='text-[16px] text-[#F8F8F8] '>Выполнить</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Задать вопрос</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Лучшие консультанты</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Популярные вопросы</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Регистрация</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Вход в личный кабинет</li>
                    </div>
                    <div className=' flex flex-col gap-[18px]'>
                      <li className='text-[16px] text-[#F8F8F8] '>Проект</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Информация о проекте</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Сотрудничество</li>
                      <li className='text-[20px] hover:text-[#0129E3] cursor-pointer'>Контакты для связи</li>
                    </div>
                    </div>
                </div>

            </div>

            <div className='w-full foterend h-[80px] flex justify-between items-center text-[14px] leading-[19.6px] flex-wrap'>
                <p>MedYordam 2024 - Все права защищены</p>
                <p>Обработка данных</p>
                <p>Условия использования</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
