module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bootstrap_primary: '#0d6efd',
        bootstrap_secondary: '#6c757d',
        bootstrap_success: '#198754',
        bootstrap_danger: '#dc3545',
        bootstrap_info: '#0dcaf0',
        colorsFFF: '#F6F6F6',
        colorsF1: '#F1F1F1',
        colorsF5: '#F5F5F5',
        colorsEB: '#EBEBEB',
        colors99: '#999999',
        colors66F: '#0066FF',
        corlorsF6: '#F0F6FF',
        colorsB7: '#B7B7B7',
        colors33: '#333333',
        colorsbl: ' #0091FF',
        colors4F: '#4FB0F9 ',
        colorsm: 'rgba(0,0,0,.3)',
        colors6: '#666666;',
        colorD6: '#D6D6D6',
        colorsf: '#FFF1F1',
        colorsB3B3:'#B3B3B3',
        colorsA8:'#A8A8A8',
        clors8F:'#8F8F8F',
        clors36:'#362E2B',
        clors8888:'#888582',
        clorsbbB:'#BFBFBF',
        colorsDDD:"#ddd"
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '55rem',
        '20%': '20%',
        '68': '68px',
        '100': '100%',
        '95': '95%',
        '50': '50%',
        '35%': '35%',
        '29': '29rem',
        '25': '25rem',
        '5': '0.6rem',
        '10': '10%',
        '90': '85%',
        '80': '80%',
        'x1': '1px',
        '1.2': '1.1rem',
        '0.9': '0.9rem',
        '0.5':"0.5rem",
        '.1':'0.1rem',
        '0.3':"0.3rem",
      },
      fontWeight: {
        bbood: 530
      },
      borderRadius: {
        '50': '50%'
      },
      borderWidth: {
        x1: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '6': '6px',
       '8': '8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
