import React from 'react'

function NewsletterBox() {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text2x1 font-medium text-gray-800'>Subscriber now & get 10% off</p>
        <p className='text-gray-400 mt-3'> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo placeat maxime ad natus doloribus nobis laboriosam, quia dolor quos commodi quis accusantium, aliquid sed recusandae a consectetur temporibus odit mollitia?
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border p1-3 '>
            <input className='w-full sm:flex-1 outline-none' type="email"  placeholder='enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox