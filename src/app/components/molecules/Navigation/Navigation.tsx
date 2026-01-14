"use client"

import { LinkType } from "@/app/types"
import Link from "next/link";

export type topBarProps = {
    menuItems: Array<LinkType>;
}

const Navigation = ({ menuItems }: topBarProps) => {
    return (
        <nav>
            {menuItems && menuItems.length > 0 && menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation