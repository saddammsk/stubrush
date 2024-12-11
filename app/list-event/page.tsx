import React from 'react'
import Link from 'next/link'
import Cards from '../components/Cards'
import { EventForm } from '../components/EventForm'

function page() {

  return (
    <section className='px-4 '>
      <div className='mt-[105px] max-w-[737px] w-full mx-auto'>

      <div className="">
      <h1 className="text-[40px] font-bold text-center font-poppins">List Your Event</h1>
      <p className="font-Helvetica text-center pt-9 pb-[89px]">
        Complete the form below to get started. Once submitted, our team will
        review your event and guide you through the next steps. It’s that
        simple!
      </p>
      </div>

 
          <EventForm/>

      </div>
      <Cards />
    </section>
  )
}

export default page