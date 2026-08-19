"use client"

import { Image } from "@/app/components";
import styles from './Header.module.scss';

export type headerProps = {
    heroImage: string;
}
const Header = ({ heroImage }: headerProps) => {

    
    return (
        <header className={styles.header}>
            <div className={styles['header__hero-content']}>
                <h1 className={styles['header__hero-title']}>Welcome to Villa de Miguel</h1>
                <p className={styles['header__hero-subtitle']}>Experience the perfect blend of nature and comfort at our charming countryside retreat.</p>
            </div>

           <Image src={heroImage} alt="Hero image" />
        </header>
    )
}

export default Header