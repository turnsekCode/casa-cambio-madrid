import Head from "next/head";
//import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import Section_uno from "@/componentes/Section_1/Section_uno";
import SectionDos from "@/componentes/Section_2/SectionDos";
import SectionTres from "@/componentes/Section_3/SectionTres";
import SectionCuatro from "@/componentes/Section_4/SectionCuatro";
//import Mapa from "@/componentes/Mapa/Mapa";
import Layout from "@/componentes/Layout/Layout";
import { useInView } from "react-intersection-observer";

const DynamicMapa = dynamic(() =>
  import(/*componente del mapa script*/ "../componentes/Mapa/Mapa.js")
);
const schema = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: "Quickgold",
  url: "https://quickgold.es/casa-cambio-madrid/",
  sameAs: [
    "https://instagram.com/quickgold.es",
    "https://twitter.com/quickgoldqg",
    "https://www.facebook.com/quickgold.es",
  ],
  logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  description:
    "Casas de cambio en Madrid. Cambia dólares a euros en nuestras oficinas de cambio quickgold. Cambio de moneda extranjera al momento y sin comisiones",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressRegion: "Madrid",
    addressCountry: "España",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34 900 373 629",
    contactType: "info@quickgold.es",
  },
};

export default function Home({ markers, menu_list }) {
  const { ref: myRef, inView, entry } = useInView();
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <title>Casas de Cambio en Madrid | Cambio de Divisas Madrid</title>
        <meta
          name="description"
          content="Casas de cambio en Madrid. Cambia dólares a euros en nuestras oficinas de cambio quickgold. Cambio de moneda extranjera al momento y sin comisiones. "
        />
        <meta
          name="TTBUdVkwdzVOOVRpSWV3Nk03anRNMj10"
          value="934244db009f8690634f7f94258d34e2"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs />
          <Section_uno />
          <SectionDos />
          <SectionTres />
          <SectionCuatro />
          <div
            id="contenedorMapa"
            className={styles.contenedorMapaVisible}
            ref={myRef}
          >
            {inView ? <DynamicMapa markers={markers} /> : null}
          </div>
          {/*<Mapa markers={markers} />*/}
        </div>
      </Layout>
    </>
  );
}
const idTienda = "madrid";
//const idWp = "13848";
export async function getStaticProps() {
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/

  const marker = await fetch(`https://quickgold.es/markers${idTienda}.json`);
  const markers = await marker.json();

  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  // Pass data to the page via props
  return {
    props: {
      markers,
      menu_list,
    },
    revalidate: 1,
  };
}
