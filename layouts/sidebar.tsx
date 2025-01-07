import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Menghapus token dari localStorage
    localStorage.removeItem('auth-token');

    // Mengarahkan pengguna ke halaman login
    router.push('/auth/login');
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/root/dashboard"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/root/editpage"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Edit main page</span>
              </Link>
            </li>
            <li>
              <a
                href="https://www.notion.so/14c36052d1da805c9550ddb2c2886be9?v=14c36052d1da811a9897000cd6052b07&pvs=4"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Blog list</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/14c36052d1da805c9550ddb2c2886be9?v=14c36052d1da811a9897000cd6052b07&p=15036052d1da80ef9758d3fc64ef3d9e&pm=s"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Make a blog post</span>
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 text-red-700 rounded-lg hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
