import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Button, Tooltip } from '../index'

export const Navbar = () => {
    const router = useRouter()

    type navLinksType = {
        [key: string]: string | boolean
    }
    const navLinks: navLinksType[] = [
        {
            name: 'Trade',
            description: 'Description',
            direction: 'left',
            href: 'string',
            showTooltip: false
        },
        {
            name: 'Earn',
            description: 'Description',
            direction: 'left',
            href: 'string',
            showTooltip: false
        },
        {
            name: 'Win',
            description: 'Description',
            direction: 'left',
            href: 'string',
            showTooltip: false
        },
        {
            name: 'NFT',
            description: 'Description',
            direction: 'left',
            href: 'string',
            showTooltip: false
        }
    ]

    return (
        <nav style={{ backgroundColor: 'rgb(39, 38, 44)' }} className=" h-12 flex items-center justify-between">
            <div className="mx-20">
                <div className="flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Fragment key={index}>
                            <Tooltip isOnHover tooltipMessage={link.description as string}>
                                <Button className="text-purple-200">
                                    <span>{link.name}</span>
                                </Button>
                            </Tooltip>
                        </Fragment>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
