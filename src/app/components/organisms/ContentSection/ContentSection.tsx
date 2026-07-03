'use client';

import clsx from "clsx";
import styles from './ContentSection.module.scss';
import { imageType } from "@/app/types";

export type contentSectionProps = {
    title: string;
    paragraph?: string;
    imagePosition?: 'left' | 'right';
    images?: Array<imageType>;
}

const ContentSection = ({ title, paragraph, imagePosition = 'right', images }: contentSectionProps) => {

    return (
        <section className={clsx(styles['content-section'], styles[`content-section--image-${imagePosition}`])}>
            <div className={styles['content-section__content']}>
                <h2>{title}</h2>
                {paragraph && <div>{paragraph}</div>}
            </div>
            <div className={styles['content-section__images']}>
                {images && images.map((image, index) => (
                    <div key={index} className={styles['content-section__image-wrapper']}>
                        <img src={image.src} alt={image.alt}  />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContentSection;