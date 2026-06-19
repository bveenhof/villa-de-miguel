import { imageType, LinkType } from '@/app/types';
import styles from './Footer.module.scss';


interface socialLink extends LinkType {
    label: string;
    icon: imageType;
}

export type footerProps = {
    links: {
        title?: string;
        paragraph?: string;
        linkList?:  Array<LinkType>;
    },
    socials: {
        title: string;
        paragraph?: string;
        socialLinks?: Array<socialLink>;
    },
    location: {
        title?: string;
        paragraph?: string;
    };
}

const Footer = ({ links, socials, location }: footerProps) => {
    const renderedSocialMediaLinks = socials.socialLinks && socials.socialLinks.map((socialLink, index) => (
                                <li key={index}>
                                    <a href={socialLink.href} target="_blank" aria-label={socialLink.label} rel="noopener noreferrer" className={styles["footer__social-link"]}>
                                        <img src={socialLink.icon.src} alt={socialLink.label} className={styles.footer__icon} />
                                    </a>
                                </li>
                            ))

    const renderedLinklist = links.linkList && links.linkList.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))

    return (
        <footer className={styles.footer}>
            <section className={styles.footer__content}>

                {links && (
                    <div className={styles.footer__links}>
                        <h4>{links.title}</h4>
                        <ul>
                            {renderedLinklist}
                        </ul>
                    </div>)
                }

                {location && (
                    <div className={styles.footer__location}>
                        <h4>{location.title}</h4>
                        {location.paragraph && <p>{location.paragraph}</p> }
                    </div>
                )}

                {socials && (
                    <div className={styles.footer__socials}>
                        <h4>{socials.title}</h4>
                        {socials.paragraph && <p>{socials.paragraph}</p> }
                        <ul className={styles["footer__socials-link-list"]}>
                            {renderedSocialMediaLinks}
                        </ul>
                    </div>)
                }

            </section>
        </footer>
    )
}

export default Footer