// src/app/root/dashboard/layout.tsx
"use client";
import React from 'react';
import Sidebar from '../../layouts/sidebar'; // Adjust the import path as necessary
import { Poppins } from "next/font/google";
import "../root/root.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos"; // Mengimpor AOS
import "aos/dist/aos.css"; // Mengimpor CSS AOS
import Link from 'next/link';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <body>
        <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
        </body>
        </div>
    
    
    
  );
};

export default Layout;

