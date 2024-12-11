'use client'
import React from 'react'
import { useGlobalContext } from '../context/useGlobalContext'

const EventStepOne = () => {
    const {setEventlistFormTab} = useGlobalContext();

    const nextStep = (e:any) => {
      e.preventDefault();
        setEventlistFormTab('event-details-tab');
    };
    

  return (
    <div className='step-1'>
    <h4 className='font-inter text-lg font-semibold mb-3.5'> Contact Info </h4>
    <p className='font-inter text-sm'>Help us get in touch with you. StubRush works directly with event promoters to ensure everything runs smoothly. Please provide your contact details for any follow-up.</p>

      <div>
        <label htmlFor='full-name' className='text-white/50 mt-[30px]'>Name</label>
        <input required type="text" id='full-name' name='Full Name'  placeholder='First Last' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
      </div>
      <div>
        <label htmlFor='email' className='text-white/50 mt-[30px]'>Email Address</label>
        <input required type="email" id='email' name='email' placeholder='example@email.com' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
      </div>
      <div>
        <label htmlFor='email-for-call' className='text-white/50 mt-[30px]'>Email Address for Will Call</label>
        <input type="text" id='email-for-call' name='Email for call' placeholder='example@email.com' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
      </div>
      <div>
        <label htmlFor='phone-number' className='text-white/50 mt-[30px]'>Phone Number</label>
        <input type="text" id='phone-number' name='phone-number' placeholder='123456789' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
      </div>
      <div className='flex justify-end'>
        <button onClick={nextStep} className='bg-yellow1 text-sm h-10 w-[93px] rounded-md'>
        Continue
        </button>
      </div>
   </div>
  )
}

export default EventStepOne