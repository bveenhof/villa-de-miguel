"use client"

import { ButtonType, LinkType } from "@/app/types"
import { Button, Image } from "@/app/components/atoms";
import Navigation from "../../molecules/Navigation/Navigation";
import clsx from "clsx";

import styles from './TopBar.module.scss';

export type topBarProps = {
    logo: HTMLImageElement;
    menuItems: Array<LinkType>;
    menuButton: ButtonType;
}

const TopBar = ({ logo, menuItems, menuButton }: topBarProps) => {
    return (
        <div className={clsx(styles['top-bar'])}>
            <div className={clsx(styles['top-bar__content'])}>
                {logo && <Image src={logo.src} height={45} width={45} alt="Villa de Miguel logo" /> }
                
                <Navigation menuItems={menuItems} />

                {menuButton && <Button label={menuButton.label} /> }
            </div>
        </div>
    )
}

export default TopBar