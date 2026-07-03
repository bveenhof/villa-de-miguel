import Image from "next/image";
import styles from "./page.module.scss";
import { ContentSection, Footer, Header } from "./components";

export default function Home() {

  const dummyHeroImage = "https://fastly.picsum.photos/id/645/2509/1673.jpg?hmac=wgOsfwTE89oIqxv6x6otxMN9XBj9RR6VlRfXv46O9OQ";

  return (
    <div className={styles.page}>
      <Header heroImage={dummyHeroImage} />
      <main className={styles.main}>
        <div className={styles.container}>
          <ContentSection title="Welcome to this villa" paragraph="This is a simple content section, aligned to the left (default)." />
          <ContentSection title="Off to a good start" paragraph="This is a simple content section, aligned to the center." imagePosition="right" />
          <ContentSection title="Rounding things up" paragraph="This is a simple content section, aligned to the right." />
        </div>
      </main>
      <Footer links={{title: "List of links"}} socials={{title: "Follow us on our social channels"}} location={{title: "Contact us", paragraph: "Somewhere in Davao"}}  />
    </div>
  );
}
