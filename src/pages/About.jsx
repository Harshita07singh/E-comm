import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1 ={'About'} text2 = {'us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore molestiae delectus maiores inventore voluptatem alias natus tempore, atque, corporis, soluta numquam totam enim voluptates? Mollitia cum tempora ea dolore facere.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repudiandae amet voluptate velit, nisi id quo rerum asperiores? Omnis ullam placeat odio ex animi, veniam accusamus facere totam voluptatum impedit.</p>
        <b className='text-gray-900'>Our Mission</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, alias corrupti voluptates aliquam quasi explicabo maxime voluptatibus temporibus! Ipsa, a sunt eos iste aliquid quae amet! Beatae, est. Ullam, totam?</p>
      </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>  
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores debitis dolores voluptates dolore sunt, eaque accusantium reprehenderit impedit nihil laborum laboriosam placeat perferendis autem maxime sed natus recusandae deleniti.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores debitis dolores voluptates dolore sunt, eaque accusantium reprehenderit impedit nihil laborum laboriosam placeat perferendis autem maxime sed natus recusandae deleniti.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores debitis dolores voluptates dolore sunt, eaque accusantium reprehenderit impedit nihil laborum laboriosam placeat perferendis autem maxime sed natus recusandae deleniti.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About