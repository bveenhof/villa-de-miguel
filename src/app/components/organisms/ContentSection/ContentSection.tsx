'use client';

import clsx from "clsx";
import styles from './ContentSection.module.scss';

type content = {
    title: string;
    paragraph?: string;
}

export type contentSectionProps = {
    content: content;
    contentAlignment?: 'left' | 'center' | 'right';
    images?: Array<HTMLImageElement>;
}

const ContentSection = ({ content, contentAlignment = 'left', images }: contentSectionProps) => {

    return (
        <section className={clsx(styles['content-section'], styles[`content-section--${contentAlignment}`])}>
            <div className={styles['content-section__content']}>
                <h2>{content.title}</h2>
                {content.paragraph && <p>{content.paragraph}</p>}
            </div>
            <div className={styles['content-section__images']}>
                {images && images.map((image, index) => (
                    <div key={index} className={styles['content-section__image']}>
                       plaatje
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContentSection;