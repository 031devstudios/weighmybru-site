/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // WeighMyBru² Brand Colors  
        'black-discord': '#121214',
        'black-hover': '#1D1D1E',
        'black-select': '#363638',
        'black-background': '#1A1A1E', 
        'button-green': '#197C28',
        
        // Additional semantic colors for the flash page
        primary: {
          500: '#197C28', // Your main green
          600: '#16a34a',
          700: '#15803d',
        }
      }
    }
  },
  plugins: []
};
