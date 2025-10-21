/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkex: {
          primary: '#F0B90B',      // Binance sarısı
          dark: '#1E2329',          // Binance mat siyah
          darker: '#0B0E11',        // Daha koyu siyah
          accent: '#FCD535',        // Açık sarı (vurgu)
          gold: '#F0B90B',
          silver: '#C0C0C0',
          bronze: '#CD7F32',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #F0B90B, 0 0 10px #F0B90B' },
          '100%': { boxShadow: '0 0 10px #F0B90B, 0 0 20px #F0B90B, 0 0 30px #F0B90B' },
        }
      }
    },
  },
  plugins: [],
}

