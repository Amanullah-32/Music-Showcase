'use client';

import dynamic from 'next/dynamic';
import React, { FormEvent,useState } from 'react'
const Meteors = dynamic(() => import("@/components/ui/meteors").then(mod => mod.Meteors), {
  ssr: false,
});

const Contect = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Submitted:', { email, message });
      const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent!");
    } else {
      alert("Error sending message");
    }
    };
  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className=" w-full relative h-full">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
       <div className='w-full flex justify-center items-center flex-col'>
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        </div>

    


        {/* Meaty part - Meteor effect */}
        <Meteors number={50} />
      </div>
    </div>
  </div>
  )
}

export default Contect