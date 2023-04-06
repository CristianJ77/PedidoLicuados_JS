import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Licuados Mar y Sol</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hola, estoy en tu celular!!!
    </div>
  );
}
