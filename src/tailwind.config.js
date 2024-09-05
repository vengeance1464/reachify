/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
      // './pages/**/*.{js,ts,jsx,tsx,mdx}',
      // './components/**/*.{js,ts,jsx,tsx,mdx}',
   
      // // Or if using `src` directory:
      // './src/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
        
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
          extend: {
            spacing: {
              '128': '32rem',
              '144': '36rem',
            },
            borderRadius: {
              '4xl': '2rem',
              '2xl':'1rem'
            },
            colors: {
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
                'navy-blue':'#151719',
                'primary': '#1DA1F2',
                'gray-border':'rgb(51 54 58/1)',
                'gray-card':'rgb(37 40 44/1)',
                'red-border':'rgb(248 113 113/1)',
                'whiteText':'#D9E3EA'
              },
          }
        },
    plugins: [],
  }