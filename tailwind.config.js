
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // dari cpe_profile
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // dari cpe_profile
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // dari cpe_profile
    './node_modules/flowbite/**/*.js', // dari cpe_profile
    './node_modules/pliny/**/*.js' // dari cpe_profile
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layer-1': "url(/layer-1.jpg)", // dari cpe_profile
        'layer-2': "url(/layer-2.png)", // dari cpe_profile
        'layer-3': "url(/layer-3.png)", // dari cpe_profile
        'layer-4': "url(/layer-4.png)"  // dari cpe_profile
      },
      colors: {
        background: "var(--background)", // dari cpe_profile
        foreground: "var(--foreground)", // dari cpe_profile
        primary: {
          600: "#2563eb", // dari cpe_profile
        },
      },
      maxWidth: {
        '10xl': '1280px', // dari cpe_profile
      },
    }
  },
  plugins: [
    
    require('tailwindcss-3d'), // dari cpe_profile
    require('flowbite/plugin') // dari cpe_profile
  ]
};
