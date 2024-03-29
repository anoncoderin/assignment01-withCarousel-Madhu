import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav


const inter = Inter({ subsets: ['latin'] });


function handleClick()
{
  
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className={styles.backimage}>
        <Image src='/images/backgroundMountain.jpg' fill='true' />
      </div>
      <main className={styles.main}>
        <div className={styles.info}>
          <div className={styles.nav}>
            <button className={styles.menubar}><Image src='/images/icons/icons/menu-icon.png' height={45} width={45}></Image></button>
            <Image src='/images/favicon/favicon.png' height={50} width={50}></Image>

          </div>
          <div className={styles.container}>
            <p className={styles.info}>
              An Investment in knowledge pays the best interest.
            </p>
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



      </main>

    </>
  )
}
