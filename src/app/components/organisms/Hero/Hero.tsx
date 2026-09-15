"use client"

import { Image } from "@/app/components/atoms";
import styles from './Hero.module.scss';

export type heroProps = {
    heroImage: string;
}
const Hero = ({ heroImage }: heroProps) => {

    
    return (
        <section className={styles.header}>
            <div className={styles['header__hero-content']}>
                <h1 className={styles['header__hero-title']}>Welcome to Villa de Miguel</h1>
                <p className={styles['header__hero-subtitle']}>Experience the perfect blend of nature and comfort at our charming countryside retreat.</p>
            </div>

           <Image src={heroImage} alt="Hero image" />
        </section>
    )
}

export default Hero