import Link from '@/components/link'
import { links } from '@/config/site'

import ThemeSwitcher from './theme-switcher'

/**
 * Home Page
 */
export default function Home() {
    return (
        <>
            <div className='flex flex-col gap-3 py-3'>
                {links.map((link) => (
                    <Link
                        key={link.url}
                        link={link}
                    />
                ))}
                <h1>Hello empty project</h1>
                <ThemeSwitcher />
            </div>
        </>
    )
}
