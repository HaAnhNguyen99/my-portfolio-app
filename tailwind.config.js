/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        segeo: ['Segoe UI', 'sans-serif'],
        IBM: ['IBM Plex Mono', 'monospace'],
        Ramaraja: ['Ramaraja', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-profile-custom': {
          backgroundSize: '90% auto',
          backgroundPosition: '30% 20%',
        },
        '.color-primary': {
          color: '#072c45',
        },
        '.color-primary-hover': {
          color: '#0b6593',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};