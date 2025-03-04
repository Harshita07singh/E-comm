import React from 'react'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox'

function Contact() {
  return (
    <div>
      <div>
        <Title text1 = {'CONTACT'} text2= {'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-2/12 ms:max-w-[500px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'> Our Store</p>
          <p className='text-gray-700'>Tel: (415) 898-7899 <br />Email: wearever@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at wearever</p>
          <p className='text-gray-500'>Learn more about us and  job openings</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white translate-all duration-500'>Explore Jobs</button>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact