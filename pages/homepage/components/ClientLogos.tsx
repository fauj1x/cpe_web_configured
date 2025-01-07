// components/ClientLogos.js
import Image from 'next/image';
interface ClientLogosProps {
  id: string;
}

const ClientLogos = ({id}: ClientLogosProps) => {
  const images = [
    'Group 31.png',
    'Group 32.png',
    'Group 33.png',
    'Group 34.png',
    'Group 35.png',
    'Group 36.png',
    'Group 37.png',
    'Group 38.png',
    'Group 39.png',
    'Group 40.png',
    'Group 41.png',
    'Group 42.png',
    'Group 43.png',
    'Group 44.png',
    'Group 45.png',
    'Group 46.png',
  ];

  return (
    <div id={id} className="mt-16 p-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex">
        <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Client</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={`/${src}`}
              alt={`Client logo ${index + 31}`}
              className="h-auto max-w-full rounded-lg"
              width={150} // Sesuaikan ukuran gambar sesuai kebutuhan
              height={100}
              style={{ objectFit: 'contain' }} // Pastikan gambar tidak terdistorsi
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
