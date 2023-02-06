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
      
      

      <div style={{backgroundImage}}></div>
      <main className={styles.main}>
        <div className='styles.home-info'>
          <p>
            An Investment in<br></br>Knowledge pays the best<br></br>interest.

          </p>
        </div>


        
      </main>
    
    </>
  )
}
