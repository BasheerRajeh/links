import Link from '@/components/link'
import PrimaryLink from '@/components/primary-links'
import { Waving } from '@/components/waving'
import { links } from '@/config/site'

/**
 * Home Page
 */
export default function Home() {
    return (
        <div className='flex flex-col justify-center'>
            <PrimaryLink
                className='min-w-64 self-center'
                link={{
                    url: 'mailto:muhammadbasheerrajeh@gmail.com?subject=Hello&body=Hello,%0D%0A%0D%0AI hope this email finds you well!%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"',
                    title: (
                        <>
                            <Waving className='inline-block h-5 w-5 animate-wave transition duration-1000' />{' '}
                            Say Hello!
                        </>
                    ),
                }}
            />
            <div className='flex flex-col gap-3 py-3'>
                {links.map((link) => (
                    <Link
                        key={link.url}
                        link={link}
                    />
                ))}
            </div>
        </div>
    )
}
