import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'
import {
    SiFacebook,
    SiGithub,
    SiLinkedin,
    SiTelegram,
    SiWhatsapp,
    SiX,
} from 'react-icons/si'

type Site = {
    url: string
    title: string
    name: string
    keywords: string[]
    titleTemplate: string
    description: string
    favicons: IconDescriptor[]
}

export type LinkType = {
    url: string
    title: string | React.ReactNode
    icon?: React.ReactNode
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

export const links: LinkType[] = [
    {
        url: 'https://facebook.com/MuhammadBasheerRajeh',
        title: 'Facebook',
        icon: <SiFacebook className='h-6 w-6' />,
    },
    {
        url: 'https://www.linkedin.com/in/muhammad-basheer-rajeh/',
        title: 'Linkedin',
        icon: <SiLinkedin className='h-6 w-6' />,
    },
    {
        url: 'https://t.me/basheer_rajeh',
        title: 'Telegram',
        icon: <SiTelegram className='h-6 w-6' />,
    },
    {
        url: 'https://github.com/BasheerRajeh',
        title: 'Github',
        icon: <SiGithub className='h-6 w-6 ' />,
    },
    {
        url: 'https://twitter.com/BashirRajeh',
        title: 'Twitter',
        icon: <SiX className='h-6 w-6 ' />,
    },
    {
        url: 'https://wa.me/+971583060558',
        title: 'Whatsapp',
        icon: <SiWhatsapp className='h-6 w-6' />,
    },
]
