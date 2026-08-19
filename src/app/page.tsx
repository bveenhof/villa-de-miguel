import styles from "./page.module.scss";
import { Footer, Header, Map } from "./components";

export default function Home() {

  const dummyHeroImage = "https://fastly.picsum.photos/id/645/2509/1673.jpg?hmac=wgOsfwTE89oIqxv6x6otxMN9XBj9RR6VlRfXv46O9OQ";
  const mapLocations = [
    {
        title: "",
        lat: 7.5631116,
        lng: 126.5391292,
        content: "<strong>Villa de Miguel</strong><br/>This is our villa!",
        isVilla: true,
        isActive: true,
    },
    {
        lat: 7.7042,
        lng: 126.2917,
        content: "<strong>Aliwagwag Falls</strong><br/>Breathtaking multi-tiered waterfalls.",
    },
    {
        lat: 7.7944,
        lng: 126.4534,
        content: "<strong>Cateel Town Center</strong><br/>ATM hubs, local markets, and pharmacy needs.",
    },
  ]

  return (
    <div className={styles.page}>
      <Header heroImage={dummyHeroImage} />
      <main className={styles.main}>
         <section className={styles.section}>
           <Map locations={mapLocations} />
         </section>
      </main>
      <Footer links={{title: "List of links"}} socials={{title: "Follow us on our social channels"}} location={{title: "Contact us", paragraph: "Somewhere in Davao"}}  />
    </div>
  );
}
