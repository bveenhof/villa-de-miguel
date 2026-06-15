import { LinkType } from '@/app/types';
import styles from './Footer.module.scss';


type socialLink = {
    link: LinkType;
    icon: HTMLImageElement;
}

export type footerProps = {
    links: {
        title?: string;
        paragraph?: string;
        linkList?:  Array<LinkType>;
    },
    socials: {
        title?: string;
        paragraph?: string;
        socialLinks?: Array<socialLink>;
    },
    location: {
        title?: string;
        paragraph?: string;
    };
}

const Footer = ({ links, socials, location }: footerProps) => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__content}>

                {links && (
                    <div className={styles.footer__links}>
                        <h4>{links.title}</h4>
                        <ul>
                            {links.linkList && links.linkList.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>)
                }

                {location && (
                    <div className={styles.footer__location}>
                        <h4>{location.title}</h4>
                        <p>{location.paragraph}</p>
                    </div>
                )}

                {socials && (
                    <div className={styles.footer__socials}>
                        <h4>{socials.title}</h4>
                        <p>{socials.paragraph}</p>
                        <ul>
                            {socials.socialLinks && socials.socialLinks.map((socialLink, index) => (
                                <li key={index}>
                                    <a href={socialLink.link.href} target="_blank" rel="noopener noreferrer">
                                        <img src={socialLink.icon.src} alt={socialLink.link.label} className={styles.footer__icon} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>)
                }


                {/* <div className={styles.footer__socials}>
                    <a href="https://www.facebook.com/villademiguel" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]}>
                        <img src="/icon-facebook.svg" alt="Facebook" className={styles.footer__icon} />
                    </a>
                    <a href="https://www.facebook.com/villademiguel" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]}>
                        <img src="/icon-instagram.svg" alt="Instagram" className={styles.footer__icon} />
                    </a>
                    <a href="https://www.facebook.com/villademiguel" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]}>
                        <img src="/icon-youtube.svg" alt="YouTube" className={styles.footer__icon} />
                    </a>
                </div> */}
            </section>
        </footer>
    )
}

export default Footer