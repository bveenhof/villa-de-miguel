import styles from './Footer.module.scss';

export type footerProps = {
    links: [];
}

const Footer = ({ links }: footerProps) => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__content}>
                Footer

                <div className={styles.footer__socials}>
                    <a href="https://www.facebook.com/villademiguel" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]}>
                        <img src="/icon-facebook.svg" alt="Facebook" className={styles.footer__icon} />
                    </a>
                    <a href="https://www.facebook.com/villademiguel" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]}>
                        <img src="/icon-instagram.svg" alt="Instagram" className={styles.footer__icon} />
                    </a>
                    <a href="https://www.facebook.com/villademiguel" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]}>
                        <img src="/icon-youtube.svg" alt="YouTube" className={styles.footer__icon} />
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer