/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1f3a', // Navy blue
          dark: '#0f1320', // Dark navy
          light: '#2a3458', // Light navy
        },
        secondary: {
          DEFAULT: '#000000', // Black
          light: '#1a1a1a', // Light black
        },
        accent: {
          DEFAULT: '#ffffff', // White
          gray: '#f5f5f5', // Light gray
        },
        swap: {
          DEFAULT: '#4f46e5', // Indigo for swap button
          hover: '#4338ca',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

