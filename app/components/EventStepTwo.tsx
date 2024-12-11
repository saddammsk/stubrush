'use client'
import React from 'react'
import { useGlobalContext } from '../context/useGlobalContext'
import Image from 'next/image'

const EventStepTwo = () => {
    const {setEventlistFormTab} = useGlobalContext();

    const nextStep = (e:any) => {
        e.preventDefault()
        setEventlistFormTab('event-listed-tab')
    }

  return (
    <div className='step-2'>
    <h4 className='font-inter text-lg font-semibold mb-3.5'> Event Details</h4>
    <p className='font-inter text-sm'>Tell us about your event. From the name to the venue, this section ensures we have all the key information to promote your event effectively.</p>

          <div>
            <h4 className='text-white/50 mt-[30px]'>Name of Event</h4>
            <input type="text" placeholder='Event Name' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
          </div>
          <div>
            <h4 className='text-white/50 '>Date(s) the Event is Offered</h4>
            <div className='flex'>
            <input type="text" placeholder='11/27/2024; 11/29/2024' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
           <div className='bg-white w-9 h-9 -ml-9 mt-4 rounded-r-md '>
            <Image src="/calendar.svg" width={20} height={20} alt="jkfh" className='pt-2 ml-2' />
            </div>
            </div>
          </div>
          <div>
            <h4 className='text-white/50 '>Time of the Event</h4>
            <div className='flex'>
            <input type="text" placeholder='Time of the Event' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
            <div className='bg-white w-9 h-9 -ml-9 mt-4 rounded-r-md '>
            <Image src="/clock.svg" width={20} height={20} alt="jkfh" className='pt-2 ml-2' />
            </div>
            </div> 
          </div>
          <div>
            <h4 className='text-white/50 '>Address of Event</h4>
            <input type="text" placeholder='1234 Road Unit 1, San Francisco, CA 94113' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
          </div>
          <div>
            <h4 className='text-white/50 '>Is this event venue handicapped accessible?</h4>
            <div className='flex gap-4'>
            <input type="text" placeholder='Yes' className='bg-white/10  border border-white w-[100px] h-9 px-4 rounded-md my-4' />
            <input type="text" placeholder='No' className='bg-white/10 border border-white  w-[100px] h-9 px-4 rounded-md my-4' />
            </div>
          </div>
          <div>
            <h4 className='text-white/50 '>Ticket Pickup Location (i.e., Box Office, Showroom)</h4>
            <div className='flex '>
            <input type="text" placeholder='Box Office' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
            
            <div className='bg-white w-9 h-9 -ml-9 mt-4 rounded-r-md '>
            <Image src="/clock.svg" width={20} height={20} alt="jkfh" className='pt-2 ml-2' />

            </div>
           </div>
          </div>
          <div>
            <h4 className='text-white/50 '>Ticket Pickup Time Range</h4>
            <input type="text" placeholder='7:30 - 10:00 PM (PT)' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
          </div>
          <div>
            <h4 className='text-white/50 '>How Many Tickets Offered</h4>
            <input type="text" placeholder='25' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
          </div>
          <div>
            <h4 className='text-white/50 '>Dress Code (optional)</h4>
            <input type="text" placeholder='Business Casual' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
          </div>
          <div>
            <h4 className='text-white/50 '>Age Restrictions</h4>
            <input type="text" placeholder='None' className='bg-white/10 w-full border border-white  h-9 px-4 rounded-md my-4' />
          </div>

          <div className='flex justify-end'>
            <button onClick={nextStep} className='bg-yellow1 text-sm h-10 w-[93px] rounded-md'>
            Continue
            </button>
          </div>
   </div>
  )
}

export default EventStepTwo