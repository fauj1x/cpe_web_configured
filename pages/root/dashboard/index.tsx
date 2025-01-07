import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../../layouts/sidebar';

const DashboardPage = () => {
  const [loading, setLoading] = useState(true); // Menambahkan state loading
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('auth-token'); // Cek token di localStorage
    if (!token) {
      // Jika tidak ada token, alihkan ke halaman login
      router.push('/auth/login');
    } else {
      // Jika ada token, hentikan loading setelah beberapa detik
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <p className="p-6">Loading...</p>; // Tampilkan loading saat halaman sedang dimuat
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="mt-4 text-gray-600">This is your dashboard where you can manage your content.</p>
        {/* Add more content here */}
      </main>
    </div>
  );
};

export default DashboardPage;
