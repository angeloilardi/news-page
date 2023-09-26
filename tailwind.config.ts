import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
