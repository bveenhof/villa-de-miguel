"use client";

import clsx from "clsx";
import Image from "next/image";
import styles from './Image.module.scss';

export type ImageProps = {
    alt: string;
    hasHoverEffect?: boolean;
    hasRoundedCorners?: boolean;
	height?: number;
    src: string;
    width?: number;
}

const ImageWrapper = ({ src, alt, hasHoverEffect = false, hasRoundedCorners = false, width, height }: ImageProps) => {
    const useFill = !width || !height;

    return (
        <div className={
            clsx(
                    styles['image-wrapper'],
                    hasHoverEffect && styles['image-wrapper--hover-animation'],
                    hasRoundedCorners && styles['image-wrapper--rounded']
                )
            }
        >
            <Image 
                src={src}
                alt={alt}
                fill={useFill}
                width={width}
                height={height}
                className={styles['image']} 
            />
        </div>
    )
}

export default ImageWrapper