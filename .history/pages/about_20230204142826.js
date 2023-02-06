import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/about.module.css'
import Nav from '../components/nav'
import styles from '@/styles/con.module.css'


export default function About(){
    return(
        <>

<Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <Nav></Nav>
        <h3 className={styles.hrline}>About Us</h3>



        </>
    )
}

