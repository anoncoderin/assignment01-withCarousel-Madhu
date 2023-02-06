import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/about.module.css'
import Nav from '../components/nav'
import Image from 'next/image'



export default function About() {
  const images = ['/images/carousel-images/0.jpg',
                  '/images/carousel-images/1.jpg',
                  '/images/carousel-images/2.jpg',
                  '/images/carousel-images/3.jpg',
                  '/images/carousel-images/4.jpg',
                  '/images/carousel-images/5.jpg'
                  ]
  return (
    <>

      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="og:title" content="Assignment #1 - About Us Page" />
        <meta name="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      

      <div className={styles.background}>

      </div>

      <Nav></Nav>
      <h3 className={styles.hrline}>About Us</h3>

      <div className={styles.content}>
        <h5>
          We are proud to deliver an education that goes beyond classrorms and textbooks.
          <br></br>

          Our students gain technical skils, real world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
          <br></br>

          Through close collaboration with industry, our network of alumni and partners continue to achieve global success.

        </h5>
        <br></br>

        <h3>
          Infomation Sessions
        </h3>
        <br></br>

        <h5>
          Information sessions are a simple way to figure out the next stop along your career path. Learn more about the programs that interest you.
        </h5>
        <br></br>

        <h3>Big info</h3>
        <br></br>

        <h5>
          Big info is the largest program expo and information session at BCIT. It's your chance to find out about all the programs- from business, computing, health to engineering, trades, and applied sciences.
        </h5>
        <br></br>

        <h3>Campus Tours</h3>
        <br></br>

        <h5>
          Tours run weekdays September to May, on our Burnaby Campus. See BCIT in person and get the taste of Campus life.
        </h5>
      </div>

      <div className={styles.arrowdown1}>
        <div>
          <Link href="contact">
            <Image src={'/images/icons/icons/upwardArrow.png'} width={35} height={40}></Image>
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image src={'/images/icons/icons/downwardArrow.png'} width={35} height={40}></Image>
          </Link>
        </div>

      </div>

      <div>carousel</div>
      <div className={styles.linkdept}>
        <h3 className={styles.hrline}>DEPARTMENTS</h3>
      <h5>Applied & Natural sciences</h5>
      </div>



    </>
  )
}

