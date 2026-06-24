'use client';

import clsx from "clsx";
import styles from './ContentSection.module.scss';

export type contentSectionProps = {
    title: string;
    paragraph?: string;
    contentAlignment?: 'left' | 'center' | 'right';
    images?: Array<HTMLImageElement>;
}

const ContentSection = ({ title, paragraph, contentAlignment = 'left', images }: contentSectionProps) => {

    return (
        <section className={clsx(styles['content-section'], styles[`content-section--${contentAlignment}`])}>
            <div className={styles['content-section__content']}>
                <h2>{title}</h2>
                {paragraph && <div>{paragraph}</div>}
            </div>
            <div className={styles['content-section__images']}>
                {images && images.map((image, index) => (
                    <img src={image.src} alt={image.alt} key={index} />
                ))}
            </div>
        </section>
    )
}

export default ContentSection;