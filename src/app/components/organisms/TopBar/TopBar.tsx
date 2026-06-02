"use client"

import { LinkType } from "@/app/types"
import { Image } from "@/app/components/atoms";
import Navigation from "../../molecules/Navigation/Navigation";
import clsx from "clsx";

import styles from './TopBar.module.scss';

export type topBarProps = {
    logo: HTMLImageElement;
    menuItems: Array<LinkType>;
}

const TopBar = ({ logo, menuItems }: topBarProps) => {
    return (
        <div className={clsx(styles['top-bar'])}>
            <div className={clsx(styles['top-bar__content'], 'top-bar__content--sticky')}>
                {logo && <Image src={logo.src} height={45} width={45} alt="Villa de Miguel logo" /> }
                
                <Navigation menuItems={menuItems} />
            </div>
        </div>
    )
}

export default TopBar