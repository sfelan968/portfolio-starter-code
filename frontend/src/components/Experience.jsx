import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        {/* Experience 1 */}
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Coral Gables Community Foundation Test Prep</h3>
            <p className='font-light text-lg text-gray-600'>Math Tutor</p>
            <p className='text-sm text-gray-600'>
              Instruct high school students on advanced math and test strategies in preparation for the SAT math section. 
              Guided two students to increase their math scores by over 100 points each over the course of six months.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>BU Office of Residence Life</h3>
            <p className='font-light text-lg text-gray-600'>Office Assistant</p>
            <p className='text-sm text-gray-600'>
              Field residents' inquiries and coordinate with facilities to attend to work requests.
              Manage office communication by answering phones, responding to email inquiries, and directing messages.
              Maintain a database of residents and amenities for an organized work environment.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>

        {/* Experience 3 */}
        {/* <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Study Abroad Tutor</h3>
            <p className='font-light text-lg text-gray-600'>Founder</p>
            <p className='text-sm text-gray-600'>
              Launched a global tutoring platform generating $3,000 monthly revenue. 
              Managed a team of 10+ tutors and 30+ students. 
              Built the web platform using React and optimized SEO to grow traffic to 3,000+ users per month.
            </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Experience