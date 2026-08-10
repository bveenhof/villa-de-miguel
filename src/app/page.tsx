import Image from "next/image";
import styles from "./page.module.scss";
import { ContentSection, Footer, Header } from "./components";
import { client } from '@/sanity/lib/client'

export default async function Home() {
  const dummyHeroImage = "https://fastly.picsum.photos/id/645/2509/1673.jpg?hmac=wgOsfwTE89oIqxv6x6otxMN9XBj9RR6VlRfXv46O9OQ";

  const query = `*[_type == "page" && title == "Homepage"][0]{
    title,
    PageContent
  }`

  const data = await client.fetch(query, {}, { next: { revalidate: 10 } })

  console.log("SANITY DATA:", JSON.stringify(data, null, 2))

  return (
    <div className={styles.page}>
      <Header heroImage={dummyHeroImage} />
      <main className={styles.main}>

      </main>
      <Footer links={{title: "List of links"}} socials={{title: "Follow us on our social channels"}} location={{title: "Contact us", paragraph: "Somewhere in Davao"}}  />
    </div>
  );
}
