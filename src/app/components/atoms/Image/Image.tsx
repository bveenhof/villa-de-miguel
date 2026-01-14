"use client";

import clsx from "clsx";
import Image from "next/image";

export type ImageProps = {
    src: string;
    alt: string;
    hasHoverEffect?: boolean;
    width?: number;
	height?: number;
}

const ImageWrapper = ({ src, alt, hasHoverEffect = false, width, height }: ImageProps) => {
    const useFill = !width || !height;

    return (
        <Image src={src} alt={alt} fill={useFill} width={width} height={height}  className={clsx('image', hasHoverEffect && "image--hover-animation")} />
    )
}

export default ImageWrapper