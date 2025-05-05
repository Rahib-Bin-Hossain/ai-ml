/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bae1bc',
          300: '#8ecc91',
          400: '#5db062',
          500: '#3c9540',
          600: '#2a782e', // dark green primary
          700: '#246127',
          800: '#214f25',
          900: '#1d4020',
        },
        secondary: {
          50: '#fefbe8',
          100: '#fef6c7',
          200: '#fde993',
          300: '#fdd55a',
          400: '#fcc72c', // warm yellow
          500: '#f5b70a',
          600: '#d49006',
          700: '#aa6a08',
          800: '#89520f',
          900: '#724313',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d2d6dc',
          400: '#9fa6b2',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}