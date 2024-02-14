import React from 'react'

import { LinkType } from '@/config/site'
import { cn } from '@/lib/utils'

import SparkleButton from './sparkle-button'

type PrimaryLinkProps = React.ComponentPropsWithoutRef<'a'> & { link: LinkType }

const PrimaryLink: React.FC<PrimaryLinkProps> = ({
    link,
    className,
    ...props
}) => {
    return (
        <SparkleButton className={cn('mb-6', className)}>
            <a
                href={link.url}
                target='_blank'
                className={cn(SparkleButton.ClassName, 'justify-center')}
                rel='noopener, noreferrer'
                {...props}
            >
                <SparkleButton.Spark />
                <SparkleButton.Backdrop />
                <SparkleButton.Text>{link.title}</SparkleButton.Text>
            </a>
        </SparkleButton>
    )
}

export default PrimaryLink
