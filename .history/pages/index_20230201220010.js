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
          <div className={styles.nav}>
          <Image src='/images/icons/icons/menu-icon.png' height={45} width={45}></Image>
            <Image src='/images/favicon/favicon.png' height={50} width={50}></Image>
            
          </div>
          <div className={styles.container}>
          <p className={styles.info}>
            An Investment in<br></br>Knowledge pays the best<br></br>interest.

          </p>
          <p className={styles.smallp}>Different than colleges or university, the British Columbia Institute of tecHnology offer</p>
          </div>
        </div>


        
      </main>
    
    </>
  )
}
