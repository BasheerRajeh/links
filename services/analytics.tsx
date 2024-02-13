import Script from 'next/script'

const Analytics = () => {
    if (process.env.NODE_ENV !== 'production') return null
    return (
        <Script
            async
            src='https://eu.umami.is/script.js'
            data-website-id='bac90a67-dc72-4eba-920c-548c04b8f555'
        />
    )
}

export default Analytics
