import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        
        {/* Project 1 */}
        <a
          href="https://github.com/DS219/spark-seprep/blob/ffbfd2ec2e1bddac2aad707edb6c5ace94d11eaa/student-work/assignment-5/assignment5-SOFIAFELAN.ipynb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
            <h1 className='text-3xl font-semibold'>Online Shopper Exploratory Data Analysis</h1>
            <h3 className='text-xl text-gray-700'>Python, Pandas, Seaborn</h3>
            <p className='text-sm text-gray-600'>
              Analyzed conversion trends over a year for a dataset of online shoppers to determine what type of shopper is more likely to make a purchase and how their shopping habits impact revenue conversion. Tested hypotheses with statistical methods in Python, using Seaborn for visualizations.

            </p>
          </div>
        </a>

        {/* Project 2 */}
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Student Collab Platform</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-sm text-gray-600'>
            A React-based group project hub enabling college students to form teams, share resources, and track tasks. Firebase for real-time collaboration.
          </p>
        </div>

        {/* Project 3 */}
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Portfolio Website</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-sm text-gray-600'>
            Designed and built a personal portfolio using React, Tailwind CSS, and Vite to showcase projects and experience. Mobile responsive with clean UI/UX.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Projects