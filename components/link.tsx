import NextLink from 'next/link'

import { LinkType } from '@/config/site'

type LinkProps = React.ComponentPropsWithRef<'a'> & { link: LinkType }

const Link: React.FC<LinkProps> = ({ link }) => {
    return (
        <NextLink
            target='_blank'
            rel='noopener, noreferrer'
            href={link.url}
            className='group relative flex h-14 w-full items-center justify-center rounded-xl border border-foreground/10 bg-zinc-200 px-8 py-4 transition-colors duration-300 hover:border-foreground dark:bg-zinc-950'
        >
            <span className='group absolute left-8 h-6 w-6'>{link.icon}</span>
            {link.title}
        </NextLink>
    )
}

export default Link
