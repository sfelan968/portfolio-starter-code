import React from 'react'

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });
    
  };

  return (
    <div id='contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8'>
      <h1 className='text-center text-6xl font-light text-teal-600'>Contact Me</h1>

      <form 
       onSubmit={handleSubmit}
       className='flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'
      >
        <div className='flex flex-col gap-4'>
          <input 
            name="name"
            type="text" 
            placeholder='Your Name' 
            className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' 
          />

          <input 
            name="surname"
            type="text" 
            placeholder='Your Surname' 
            className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' 
          />

          <input 
            name="email"
            type="text" 
            placeholder='Your Email' 
            className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' 
          />
        </div>

        <textarea 
          name="message"
          placeholder='Your Message' 
          className='h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'>
        </textarea>

        <button 
          className='rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600'>
          Send Message
        </button>
      </form>
    </div>
  )

}

export default Contact