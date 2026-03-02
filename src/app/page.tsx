import Image from "next/image";
import styles from "./page.module.css";
import { Button, Header } from "./components";

export default function Home() {

  const dummyMenuItems = [
    { label: "About the villa", href: "#about-the-villa" },
    { label: "Location", href: "#location" },
    { label: "Rooms", href: "#rooms" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={styles.page}>
      <Header menuItems={dummyMenuItems} />
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Villa de Miguel</h1>
          <p>
            Text
          </p>

          <Button label="Button component" />
        </div>

      </main>
    </div>
  );
}
