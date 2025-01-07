"use client"; // This indicates that this file is a Client Component

import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import Link from 'next/link';
import Image from 'next/image';

import HeroSection from './homepage/components/HeroSection';
import AboutUsSection from './homepage/components/AboutUsSection';
import VisionMissionSection from './homepage/components/VisionMissionSection';
import ServicesSection from './homepage/components/ServicesSection';
import GallerySection from './homepage/components/GallerySection';
import Client from './homepage/components/ClientLogos';
import FooterSection from './homepage/components/footerSection';
import ContactUsSection from './homepage/components/ContactUsSection';
import ArticleCard from 'components/ArticleCard'; // Import ArticleCard
import { filterArticles } from 'utils/filterArticles'; // Import filter utility
import { notion } from "utils/notion";

const poppins = Poppins({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function Home({ articles, categories }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredArticles = filterArticles(articles, selectedTag);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={poppins.className}>
      <Head>
        <title>CV Cipta Prima Engineering</title>
        <meta name="description" content="CV Cipta Prima Engineering - Solusi Terbaik untuk Perencanaan dan Operasional Anda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css"
        />
      </Head>
      <div className="bg-gray-100 mx-auto justify-center antialiased font-family-poppins">
        {/* Header or Navbar */}
        <div className="bg-white antialiased">
          {/* Header or Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto my-6">
          <nav className="bg-gray-100 rounded-[35px] w-2/5 mx-auto">
            <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when menu is closed */}
                    <svg
                      className={!isMobileMenuOpen ? "block h-6 w-6" : "hidden"}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    {/* Icon when menu is open */}
                    <svg
                      className={isMobileMenuOpen ? "block h-6 w-6" : "hidden"}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch">
                  <div className="flex flex-shrink-0 items-center">
                  <Image src="/logo.png" alt="Logo" width={50} height={32} />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 justify-center">
                      <a href="#hero" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300">
                        Beranda
                      </a>
                      <a href="#about-us" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300">
                        Tentang
                      </a>
                      <a href="#vision-mission" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300">
                        Visi & Misi
                      </a>
                      <a href="#services" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300">
                        Layanan
                      </a>
                      <a href="#gallery" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300">
                        Galeri
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile menu */}
            <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a href="#hero" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300">
                  Beranda
                </a>
                <a href="#about-us" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300">
                  Tentang
                </a>
              </div>
            </div>
          </nav>
        </header>

          <main>
            <HeroSection id="hero" />
            <AboutUsSection id="about-us" />
            <VisionMissionSection id="vision-mission" />
            <ServicesSection id="services" />

            {/* Section untuk Artikel */}
            <section className="bg-white py-12 mt-[250px] sm:space-x-4" id="articles">
              <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Our <span className="text-green-600">Activity</span>
                </h2>
                
                <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-24">
                  {filteredArticles.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                </div>

                {/* Tautan View More */}
                <div className="mt-8 text-center">
                <Link 
                  href="/blogpage" 
                  className="inline-flex items-center text-green-600 font-bold text-lg hover:underline"
                >
                  View More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="ml-2 w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                </div>
              </div>
            </section>


            <GallerySection id="gallery" />
            <Client id="client" />
            <ContactUsSection id="contact-us" />
            <FooterSection />
          </main>
        </div>
      </div>
    </div>
  );
}

const fetchPageBlocks = async (pageId: string) => {
  const response = await notion.blocks.children.list({ block_id: pageId });
  return response.results;
};

export const getStaticProps = async () => {
  const { getAllArticles, convertToArticleList } = await import("utils/notion");

  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);
  const blocks = await fetchPageBlocks(data[0].id);

  const { articles, categories } = convertToArticleList(data);

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 3600, // Revalidate every hour
  };
};
