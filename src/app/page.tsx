import styles from "./page.module.scss";
import { ComponentMapper } from "./components";
import { client } from '@/sanity/lib/client'

export default async function Home() {

  const query = `*[_type == "page" && title == "Homepage"][0]{
    title,
    PageContent
  }`

  const data = await client.fetch(query, {}, { next: { revalidate: 10 } })

  console.log("SANITY DATA:", JSON.stringify(data, null, 2))

  return (
    <main className={styles.main}>
      <ComponentMapper sections={data.PageContent} />
    </main>
  );
}
