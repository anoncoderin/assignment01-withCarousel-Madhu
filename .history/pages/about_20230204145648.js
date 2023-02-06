import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/about.module.css'
import Nav from '../components/nav'



export default function About(){
    return(
        <>

<Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.background}>

        </div>

        <Nav></Nav>
        <h3 className={styles.hrline}>About Us</h3>

        <div className={styles.content}>
          <h5>
            We are proud to deliver an education that goes beyond classrorms and textbooks.
            <br></br>
            <br></br> 
            Our students gain technical skils, real world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
            <br></br>
            <br></br>

          </h5>
        </div>



        </>
    )
}

