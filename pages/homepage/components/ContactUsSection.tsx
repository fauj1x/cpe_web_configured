// components/ContactUsSection.js
import React from 'react';

interface ContactUsSectionProps {
  id: string;
}

const ContactUsSection = ({id}: ContactUsSectionProps) => {
  return (
    <section id="contact-us" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center py-24 mx-auto items-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact</h2>
          <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Us</h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
  <a
    href="https://api.whatsapp.com/+6288217842008"
    className="flex mx-auto text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-800 rounded text-lg"
  >
    Contact Us
  </a>
</div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">ciptaprimaengginering@gmail.com</a>
              <p className="leading-normal my-5">Jl. Kertomenanggal III No.1, Dukuh Menanggal, Kec. Gayungan, Surabaya, Jawa Timur 60234</p>
              <span className="inline-flex">
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
