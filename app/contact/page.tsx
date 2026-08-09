import React from 'react';

const ContactForm = () => (
  <form className="flex flex-col gap-8 w-full max-w-2xl mx-auto mt-16">
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="font-bold uppercase tracking-widest text-sm text-[#9EAEA2]">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
        className="bg-transparent border-b-2 border-[#1A2B3C] py-4 focus:outline-none focus:border-[#E36959] transition-colors text-xl"
      />
    </div>
    
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="font-bold uppercase tracking-widest text-sm text-[#9EAEA2]">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required 
        className="bg-transparent border-b-2 border-[#1A2B3C] py-4 focus:outline-none focus:border-[#E36959] transition-colors text-xl"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="message" className="font-bold uppercase tracking-widest text-sm text-[#9EAEA2]">Message</label>
      <textarea 
        id="message" 
        name="message" 
        rows={4}
        required 
        className="bg-transparent border-b-2 border-[#1A2B3C] py-4 focus:outline-none focus:border-[#E36959] transition-colors text-xl resize-none"
      />
    </div>

    <button 
      type="submit"
      className="mt-8 self-start bg-[#1A2B3C] text-[#F4EDE3] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#E36959] transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
    >
      Send Message
    </button>
  </form>
);

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center py-20 px-8">
      <h1 className="font-serif text-[8vw] md:text-7xl font-black uppercase tracking-tight mb-4 text-center">
        Let's Connect
      </h1>
      <p className="text-xl md:text-2xl font-medium text-center max-w-2xl text-[#9EAEA2] mb-12">
        Whether you have a question about AI ethics, need a frontend developer, or just want to say hi.
      </p>
      <ContactForm />
    </main>
  );
}