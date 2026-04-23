import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Header } from "./components";

export default function Home() {

  const dummyHeroImage = "https://fastly.picsum.photos/id/671/1920/1080.jpg?hmac=CxdJymHXpEZxgxKDkJdt4ytqN-sa7xQL2j0ApTRzMo0";

  return (
    <div className={styles.page}>
      <Header heroImage={dummyHeroImage} />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1>Villa de Miguel</h1>
            <p>
              Text
            </p>

            <Button label="Button component" />
          </div>
        </section>
      </main>
    </div>
  );
}
