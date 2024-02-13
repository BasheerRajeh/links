import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
    url: string
    title: string
    name: string
    keywords: string[]
    titleTemplate: string
    description: string
    favicons: IconDescriptor[]
}

export const site: Site = {
    url:
        process.env.NODE_ENV === 'production'
            ? 'rajeh-links.vercel.app'
            : 'http://localhost:3000',
    title: 'Links',
    name: 'Rajeh',
    keywords: [
        'Rajeh',
        'Basheer Rajeh',
        'Rajeh social media',
        'Rajeh links',
        'links',
    ],
    titleTemplate: '- Links',
    description:
        'Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!',
    favicons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png',
        },
    ],
}
