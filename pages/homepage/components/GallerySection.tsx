import React from 'react';
import Image from 'next/image';


interface GallerySectionProps {
  id: string;
}
export default function GallerySection({id}: GallerySectionProps) {
  return (
    <section id={id} className="text-black body-font">
      <div className="container mt-32 px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="text-center sm:text-2xl text-2xl font-bold title-font text-black w-full mb-4">
            Our <span className="text-green-500">Experience</span>
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image src="/cpe.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image src="/cpe3.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image src="/cpe2bawah.jpg" alt="gallery" width={600} height={300} className="w-full h-full object-cover object-center block rounded-lg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image src="/cpe4.jpg" alt="gallery" width={600} height={300} className="w-full h-full object-cover object-center block rounded-lg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image src="/cpe5.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image src="/cpe6.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
