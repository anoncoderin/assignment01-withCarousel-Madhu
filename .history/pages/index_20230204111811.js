import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '../components/nav'


const inter = Inter({ subsets: ['latin'] });


function handleClick()
{
  
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="og:title" content="Assignment #1 - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className={styles.backimage}>
        <Image src='/images/backgroundMountain.jpg' fill='true' />
      </div>
      <main className={styles.main}>
        <div className={styles.info}>
          
      <Nav></Nav>

          <div className={styles.container}>
            <h1 className={styles.info}>
              An Investment in knowledge pays the best interest.
            </h1>
            <hr/>
            <p className={styles.smallp}>Different than a college or university, the British Columbia Institute of 
            Technology offers practical, flexible, applied education with instructors who have direct, 
            hands-on experience in their field.</p>
            <div className={styles.buttonlink}>
            <Link href="about"><button className={styles.button}>More About Us</button></Link>
            <Link href="contact"><button className={styles.button}>Contact Us</button></Link>
          
          </div>
          </div>
        </div>
        <div className={styles.arrowdown}>
          <Link href="about">
            <Image src={'/images/icons/icons/downwardArrow.png'} width={40} height={0}></Image>

          </Link>
        </div>



      </main>

    </>
  )
}
