"use client"

import { LinkType } from "@/app/types"
import Link from "next/link";

export type topBarProps = {
    menuItems: Array<LinkType>;
}

const Navigation = ({ menuItems }: topBarProps) => {

    const renderedMenuItems = menuItems?.map((item, index) => (
        <Link key={index} href={item.href}>
            {item.label}
        </Link>
    ));

    return (
        <nav>
            {renderedMenuItems}
        </nav>
    )
}

export default Navigation