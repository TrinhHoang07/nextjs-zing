module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#132959',
        header: '#061d50',
        input: '#1f3462',
        secondary: '#2b3f6a',
        three: '#dadada',
        four: '#051740',
        five: '#828487',
        controlHover: '#1c2c51',
        chartColor: '#50587d',
        desColor: '#a5a9bc',
        avatar: '#ced5e3',
        arrow: '#506084',
        dotHover: '#344670',
        hoverImg: 'rgba(255,255,255,0.2)',
        rgbaT: 'rgba(0,0,0,0.5)',
        follow: '#637191',
        after: '#6d6875',
        hoverAfter: '#7c7783'
      },
      spacing: {
        'nav': '6px',
        '59': '59px',
        '67': '65%'
      },
      height: {
        '1-px': '1px',
        'control-px': '90px',
        'header-px': '70px',
        'content': 'calc(100% - 70px)',
        '15': '60px',
        '70px': '70px',
        'h-full-h': 'calc(100% - 32px)'
      },
      width: {
        '30': '30%',
        '540': '540px',
        '96px': '96px',
        '15': '60px',
        '12-5': '12.5%',
        '70px': '70px',
        '292': '292px',
        '584': '592px',
        'bug': 'calc(50% - 24px)',
        '120px': '120px'
      },
      gridTemplateColumns: {
        'pro': '240px 1fr'
      },
      gridTemplateRows: {
        'pro': '1fr 90px'
      },
      maxWidth: {
        '54': '540px'
      },
      keyframes: {
        scaleOne: {
          '0%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(1.08)'}
        }
      },
      animation: {
        scaleOne: 'scaleOne 0.5s linear forwards',
      },
      flex: {
        '2': '2 2 0%'
      },
      fontSize: {
        'ssm': '10px'
      },
      lineHeight: {
        56: '56px'
      },
      borderRadius: {
        '20': '20px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}