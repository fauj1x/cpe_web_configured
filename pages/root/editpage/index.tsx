import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Sidebar from "layouts/sidebar";

const EditPage = () => {
  const [formData, setFormData] = useState({
    about_us: "",
    servicesTitle1: "",
    servicesTitle2: "",
    servicesTitle3: "",
    servicesTitle4: "",
    servicesDes1: "",
    servicesDes2: "",
    servicesDes3: "",
    servicesDes4: "",
    vision: "",
    mission: "",
  });

  const [loading, setLoading] = useState(true); // Untuk menampilkan status loading
  const [error, setError] = useState(null); // Untuk menangani error
  const router = useRouter();

  // Effect untuk mengecek login status
  useEffect(() => {
    const token = localStorage.getItem('auth-token'); // Misalnya token disimpan di localStorage
    if (!token) {
      router.push('/auth/login'); // Jika tidak ada token, alihkan ke halaman login
    }
  }, [router]);

  // Fetch data dari API saat halaman pertama kali dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getMainPage");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setFormData(data); // Mengisi formData dengan data dari API
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/updateMainPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to update data");
      }

      alert("Data updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating data");
    }
  };

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Edit Page</h2>
        </div>
        <Sidebar />
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Edit Main Page Content</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          {Object.keys(formData).map((field) => (
            <div key={field} className="flex flex-col">
              <label
                htmlFor={field}
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                {field.replace(/([A-Z])/g, " $1").toUpperCase()}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditPage;
