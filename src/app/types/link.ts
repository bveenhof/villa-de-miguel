export type ButtonType = {
    label: string;
	onClick?: (event?: React.MouseEvent) => void;
}

export type LinkType = {
    href: string;
    label: string;
    isExternal?: boolean;
}