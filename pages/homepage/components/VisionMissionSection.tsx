import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface VisionMissionSectionProps {
  id: string;
}

export default function VisionMissionSection({ id }: VisionMissionSectionProps) {
  const [visionMissionData, setVisionMissionData] = useState<{ vision: string; mission: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getVisionMission');
        const data = await response.json();
        if (response.ok) {
          setVisionMissionData(data);
        } else {
          console.error("Error fetching vision and mission data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!visionMissionData) {
    return <p>Loading...</p>; // Menunggu data jika belum tersedia
  }

  return (
    <div id={id} className="mt-16 p-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex">
        <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Vision & Mission</h2>
      </div>

      <div className="text-black flex flex-col md:flex-row md:items-center mt-4">
        <p className="text-lg md:mr-[25px] mb-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          {visionMissionData.mission} 
        </p>
        <Image
          src="/logo_mission.png"
          alt="mission"
          className="w-[150px] h-[90px] mb-4 md:mb-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          width={150}
          height={90}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center">
        <Image
          src="/logo_vision.png"
          alt="vision"
          className="w-[150px] h-[90px] mt-[65px] mb-4 md:mb-0 md:mr-[25px]"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          width={150}
          height={90}
        />
        <p className="text-black text-lg mt-[50px]" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400">
          {visionMissionData.vision} 
        </p>
      </div>
    </div>
  );
}
