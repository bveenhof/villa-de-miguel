"use client"

import { LinkType } from "@/app/types"
import Link from "next/link";
import clsx from "clsx";

import styles from './Navigation.module.scss';

export type topBarProps = {
    menuItems: Array<LinkType>;
}

const Navigation = ({ menuItems }: topBarProps) => {

    const renderedMenuItems = menuItems?.map((item, index) => (
        <Link className={clsx(styles['main-navigation__link'])} key={index} href={item.href}>
            {item.label}
        </Link>
    ));

    return (
        <nav className={clsx(styles['main-navigation'])}>
            {renderedMenuItems}

            <button className={clsx(styles['main-navigation__mobile-toggle'])} />
        </nav>
    )
}

export default Navigation