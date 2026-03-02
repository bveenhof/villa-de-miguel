"use client";

import clsx from "clsx";
import Image from "next/image";

export type ImageProps = {
    alt: string;
    className?: string;
    hasHoverEffect?: boolean;
	height?: number;
    src: string;
    width?: number;
}

const ImageWrapper = ({ src, className, alt, hasHoverEffect = false, width, height }: ImageProps) => {
    const useFill = !width || !height;

    return (
        <Image src={src} alt={alt} fill={useFill} width={width} height={height}  className={clsx('image', hasHoverEffect && "image--hover-animation", className)} />
    )
}

export default ImageWrapper