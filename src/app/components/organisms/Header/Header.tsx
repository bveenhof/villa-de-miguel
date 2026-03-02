"use client"

import { LinkType } from "@/app/types"
import { Image, ImageProps } from "@/app/components";
import styles from './Header.module.scss';
import Navigation from "../../molecules/Navigation/Navigation";

export type headerProps = {
    menuItems: Array<LinkType>;
    heroImage?: ImageProps;
}
const Header = ({ menuItems }: headerProps) => {

    
    return (
        <header className={styles.header}>
           {/* navigation  */}
           {/* Hero banner with title and subtitle */}
           {/* hero image */}

           <Navigation menuItems={menuItems} />

            <div className={styles["header__hero-content"]}>
                <h1 className={styles["header__hero-title"]}>Welcome to Villa de Miguel</h1>
                <p className={styles["header__hero-subtitle"]}>Experience the perfect blend of nature and comfort at our charming countryside retreat.</p>
            </div>

           <Image src="https://fastly.picsum.photos/id/671/1920/1080.jpg?hmac=CxdJymHXpEZxgxKDkJdt4ytqN-sa7xQL2j0ApTRzMo0" alt="Hero image" className={styles["header__hero-image"]} />
        </header>
    )
}

export default Header