import styles from "./page.module.scss";
import { ComponentMapper, ContentSection, Footer, Hero } from "./components";
import { client } from '@/sanity/lib/client'

export default async function Home() {

  const query = `*[_type == "page" && title == "Homepage"][0]{
    title,
    PageContent
  }`

  const data = await client.fetch(query, {}, { next: { revalidate: 10 } })

  console.log("SANITY DATA:", JSON.stringify(data, null, 2))

  return (
    <div className={styles.page}>
      {/* <Hero heroImage={dummyHeroImage} /> */}
      <main className={styles.main}>
        <ComponentMapper sections={data.PageContent} />
      </main>
      <Footer links={{title: "List of links"}} socials={{title: "Follow us on our social channels"}} location={{title: "Contact us", paragraph: "Somewhere in Davao"}}  />
    </div>
  );
}
