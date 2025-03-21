/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		screens: {
  			'2lg': '1240px',
  			'screen-1280': '1280px',
  			'3lg': '1480px'
  		},
  		colors: {
  			primary500: '#7A7C87',
  			primary700: '#505258',
  			primary900: '#2C2C2E',
  			gray200: '#E7E7E7',
  			gray300: '#D6D6D6',
  			gray400: '#C2C2C2',
  			gray500: '#989898',
  			gray700: '#EEEEEE',
  			indigo100: '#F8F4FF',
  			indigo200: '#E5EAFC',
  			indigo300: '#B48FF5',
  			indigo400: '#9272CC',
  			purple200: '#E7EDFF',
  			purple300: '#CFDBFF',
  			purple400: '#A3A3FF',
  			purple500: '#6D6DFD',
  			purple700: '#4E45DA',
  			red700: '#FF4A4A',
  			red400: '#FFC2C2',
  			red200: '#FFDDDD',
  			pink700: '#B772C7',
  			pink400: '#DCA9E8',
  			pink200: '#F9EDF8',
  			white100: '#F7F8FA',
  			blue500: '#4398D4',
  			green200: '#57AB83',
  			green500: '#76CA92'
  		},
  		boxShadow: {
  			login: '8px 8px 24px 1px rgba(35, 16, 94, 0.08)',
  			block: '2.90909px 2.90909px 8.72727px 0.36364px rgba(35, 16, 94, 0.08)',
  			button: '0px 3px 1px 0px #0000000F',
  			title: '0px 1px 2px 0px #0000000D',
  			'purple-btn': '0px 4px 8px 2px #0000001A',
  			'app-block': '0px 4px 8px 0px #00000026',
  			'profile-block': '0px 2px 4px 0px #0000001A'
  		},
  		fontSize: {
  			'15': '15px',
  			'17': '17px'
  		},
  		borderRadius: {
  			'5': '5px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
