import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon Clone 2.0</title>
        <link rel="shortcut icon" href="MainLogo.ico" type="image/x-icon" />
      </Head>
      
      {/* Header */}
      <Header />
    </>
  )
}
