"use client";

import { ButtonType } from "@/app/types";
import React from "react";

import styles from './Button.module.scss';

const Button = ({
	label = "Button",
    onClick,
}: ButtonType ) => {

    const handleClick = (event: React.MouseEvent, onClick?: (event?: React.MouseEvent) => void) => {
        console.log(event, "Button clicked");
    }

	return (
		<button
			className={styles.button}
			onClick={(event) => handleClick(event, onClick)}
		>
			{label}
		</button>
	);
};

export default Button;
