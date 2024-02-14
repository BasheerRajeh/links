import typography from '@tailwindcss/typography'
import { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import animate from 'tailwindcss-animate'

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            fontFamily: {
                default: ['var(--font-inter)', ...fontFamily.sans],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'float-out': {
                    to: {
                        rotate: '360deg',
                    },
                },
                rotate: {
                    to: {
                        transform: 'rotate(90deg)',
                    },
                },
                flip: {
                    to: {
                        rotate: '360deg',
                    },
                },
                wave: {
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': {
                        transform: 'rotate(14.0deg)',
                    } /* The following five values can be played with to make the waving more or less extreme */,
                    '20%': { transform: 'rotate(-8.0deg)' },
                    '30%': { transform: 'rotate(14.0deg)' },
                    '40%': { transform: 'rotate(-4.0deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': {
                        transform: 'rotate(0.0deg)',
                    } /* Reset for the last half to pause */,
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float-out':
                    'float-out calc(var(--duration, 1) * 1s) calc(var(--delay) * -1s) infinite linear',
                rotate: 'rotate var(--spark) linear infinite both',
                flip: 'flip calc(var(--spark) * 2) infinite steps(2, end)',
                wave: 'wave infinite ease-in-out',
            },
            backgroundImage: {
                grid: "url('/images/grid.svg')",
                'gradiant-dark':
                    'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                gradiant:
                    'linear-gradient(0deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
            },
        },
    },
    plugins: [typography, animate],
} satisfies Config
