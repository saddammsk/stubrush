import React from 'react'
import Link from 'next/link'

function page() {
  return (
   <section className='px-14'>
    <div className='mt-[105px] max-w-[737px] w-full mx-auto'>
        <h4 className='text-lg font-inter font-semibold'>Final Step to List your Event!</h4>
        <p className='py-2 text-sm font-inter '>Please read through StubRush’s <span className='underline'> Terms and Conditions, Privacy Policy</span>, and review the following information:</p>

        <ul className='list-disc pb-8'>
            <li>There is no cost to list shows on StubRush.</li>
            <li>Tickets provided through StubRush must be 100% complimentary, with a $0.00 value, and not offered as complimentary to the general public.</li>
            <li>No additional “Fees” (e.g., ticket printing, showroom fees) may be charged to StubRush members.</li>
            <li>The Will Call list will be sent to the specified email address at 4:15 PM on the day of the event unless otherwise noted.</li>
        </ul>
        <Link href='/successfullReg'>
        <button className='bg-yellow1 w-full  h-10 rounded-md mb-3'>List My Event</button>
        </Link>
        <input
        type="checkbox"
        id="checkbox"
        className="h-3.5 w-3.5 text-yellow1 border-gray-300 rounded focus:ring-yellow1"
        
      />
      <label htmlFor="checkbox" className="ml-2">
      I have read and agree to StubRush’s Terms and Conditions and Privacy Policy. 
      </label>
    </div>  
    </section>
   
  )
}

export default page