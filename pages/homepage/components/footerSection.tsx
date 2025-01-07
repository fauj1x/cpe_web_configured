// components/Footer.js
import React from 'react';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 mt-40">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            className="h-8"
            alt="Flowbite Logo"
            width={50} // Sesuaikan ukuran gambar sesuai kebutuhan
            height={32}
          />
          <span className="text-lg sm:text-base md:text-xl font-semibold whitespace-nowrap">
            CV Cipta Prima Engineering
          </span>
        </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#about-us" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#contact-us" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{' '}
          <a href="#" className="hover:underline">CV.Cipta Prima Engginering™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
