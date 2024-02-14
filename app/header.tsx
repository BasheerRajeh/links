import Image from 'next/image'

import avatar from '@/public/favicon/favicon.svg'

const Header = () => {
    return (
        <header className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
            <Image
                src={avatar}
                width={90}
                height={90}
                alt='logo'
                className=''
                priority
                draggable='false'
            />
        </header>
    )
}

export default Header
