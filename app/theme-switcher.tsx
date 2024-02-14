'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const ThemeSwitcher = () => {
    const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches
    const { resolvedTheme: theme, setTheme } = useTheme()
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    useEffect(() => {
        setTheme(isDark ? 'dark' : 'light')
    }, [isDark, setTheme])

    return (
        <button
            type='button'
            onClick={toggleTheme}
            className='rounded-md bg-sky-500 px-4 py-2'
        >
            Toggle Theme
        </button>
    )
}

export default ThemeSwitcher
