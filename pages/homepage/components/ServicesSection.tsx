import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServicesSectionProps {
  id: string;
}

export default function ServicesSection({ id }: ServicesSectionProps) {
  const [servicesData, setServicesData] = useState<{
    servicesTitle1: string;
    servicesTitle2: string;
    servicesTitle3: string;
    servicesTitle4: string;
    servicesDes1: string;
    servicesDes2: string;
    servicesDes3: string;
    servicesDes4: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getServices');
        const data = await response.json();
        if (response.ok) {
          setServicesData(data);
        } else {
          console.error("Error fetching services data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!servicesData) {
    return <p>Loading...</p>; // Menunggu data jika belum tersedia
  }

  return (
    <div id={id} className="mt-[250px] p-6 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Services</h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Services Card 1 */}
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
              <Image src="/doc_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
              {servicesData.servicesTitle1} {/* Menampilkan data servicesTitle1 */}
            </h3>
            <p className="text-gray-500 mb-4">
              {servicesData.servicesDes1} {/* Menampilkan data servicesDes1 */}
            </p>
            <Link href="/blog/layanan-dokumen-perencanaan-untuk-keberhasilan-proyek-berkelanjutan" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Services Card 2 */}
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
              <Image src="/leaf_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
              {servicesData.servicesTitle2} {/* Menampilkan data servicesTitle2 */}
            </h3>
            <p className="text-gray-500 mb-4">
              {servicesData.servicesDes2} {/* Menampilkan data servicesDes2 */}
            </p>
            <a href="/blog/cv.-cipta-prima-engineering:-kajian-lingkungan-untuk-keberlanjutan-hidup" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services Card 3 */}
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
              <Image src="/group_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
              {servicesData.servicesTitle3} {/* Menampilkan data servicesTitle3 */}
            </h3>
            <p className="text-gray-500 mb-4">
              {servicesData.servicesDes3} {/* Menampilkan data servicesDes3 */}
            </p>
            <a href="blog/cv.-cipta-prima-engineering:-pendampingan-operasional-ipal-dan-iplt-untuk-manfaat-jangka-panjang" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services Card 4 */}
        <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
              <Image src="/learn_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
              {servicesData.servicesTitle4} {/* Menampilkan data servicesTitle4 */}
            </h3>
            <p className="text-gray-500 mb-4">
              {servicesData.servicesDes4} {/* Menampilkan data servicesDes4 */}
            </p>
            <a href="/blog/cv.-cipta-prima-engineering:-pelatihan-teknis-untuk-mendukung-pengembangan-keahlian" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
