'use client';

import clsx from "clsx";
import styles from './ContentSection.module.scss';
import { imageType } from "@/app/types";
import { Image } from "../../atoms";

export type contentSectionProps = {
    title: string;
    paragraph?: string;
    imagePosition?: 'left' | 'right';
    images?: Array<imageType>;
}

const ContentSection = ({ title, paragraph, imagePosition = 'right', images }: contentSectionProps) => {
    const hasMultipleImages = images && images.length > 1;

    return (
        <section className={clsx(styles['content-section'], styles[`content-section--image-${imagePosition}`])}>
            <div className={styles['content-section__content']}>
                <h2>{title}</h2>
                {paragraph && <div>{paragraph}</div>}
            </div>
            <div className={clsx(styles['content-section__images'], hasMultipleImages && styles['content-section__images--multiple'])}>
                {images && images.map((image, index) => (
                    <Image key={index} src={image.src} alt={image.alt} hasHoverEffect hasRoundedCorners />
                ))}
            </div>
        </section>
    )
}

export default ContentSection;