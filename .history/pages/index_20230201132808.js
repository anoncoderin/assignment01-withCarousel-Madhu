import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] });
const Myimage = (props) =>{
  return(
<Image src='/images/backgroundMountain.jpg' fill='true'/>
  )
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
      <Image src='/images/backgroundMountain.jpg' fill='true'/>
      </div>
      <main className={styles.main}>
        <div className={styles.info}>
          <header className={styles.nav}>
            <Image scr='/image/favicon/favicon.png'></Image>
          </header>
          <div className={styles.container}>
          <p className=>
            An Investment in<br></br>Knowledge pays the best<br></br>interest.

          </p>
          </div>
        </div>


        
      </main>
    
    </>
  )
}
