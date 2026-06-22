import Image from "next/image";
import styles from "./page.module.scss";
import { Button, ContentSection, Header } from "./components";

export default function Home() {

  const dummyHeroImage = "https://fastly.picsum.photos/id/671/1920/1080.jpg?hmac=CxdJymHXpEZxgxKDkJdt4ytqN-sa7xQL2j0ApTRzMo0";

  return (
    <div className={styles.page}>
      <Header heroImage={dummyHeroImage} />
      <main className={styles.main}>
        <div className={styles.container}>
          <ContentSection content={{ title: "Welcome to this villa", paragraph: "This is a simple content section, aligned to the left (default)." }} />
          <ContentSection content={{ title: "Off to a good start", paragraph: "This is a simple content section, aligned to the center." }} contentAlignment="center" />
          <ContentSection content={{ title: "Rounding things up", paragraph: "This is a simple content section, aligned to the right." }} contentAlignment="right" />
        </div>
      </main>
    </div>
  );
}
