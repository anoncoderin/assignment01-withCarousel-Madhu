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
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>


      <div className={styles.background}>

      </div>

      <Nav></Nav>
      <div><h1 className={styles.hrline}>About Us</h1></div>

      <div className={styles.content}>
        <p>
          We are proud to deliver an education that goes beyond classrorms and textbooks.
          <br></br>
        </p>
        <p>
          Our students gain technical skils, real world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
          <br></br>
        </p>
        <p>
          Through close collaboration with industry, our network of alumni and partners continue to achieve global success.

        </p>
        <br></br>

        <h2>
          Infomation Sessions
        </h2>
        <br></br>

        <p>
          Information sessions are a simple way to figure out the next stop along your career path. Learn more about the programs that interest you.
        </p>
        <br></br>

        <h3>Big info</h3>
        <br></br>

        <p>
          Big info is the largest program expo and information session at BCIT. It's your chance to find out about all the programs- from business, computing, health to engineering, trades, and applied sciences.
        </p>
        <br></br>

        <p>
          If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.
        </p>

        <h2>Campus Tours</h2>
        <br></br>

        <p>
          Tours run weekdays September to May, on our Burnaby Campus. See BCIT in person and get the taste of Campus life.
        </p>
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
      <div><h1 className={styles.hrline}>DEPARTMENTS</h1></div>
      <div className={styles.linkdept}>
        <ul>
          <
        </ul>

        <h5>Applied & Natural sciences</h5>
        <br></br>
        <h5>business & Media</h5>
        <br></br>
        <h5>Computing & IT</h5>
        <br></br>
        <h5>engineering</h5>
        <br></br>
        <h5>Health sciences</h5>
        <br></br>
        <h5>Trades & Apprenticeships</h5>
        <br></br>

      </div>



    </>
  )
}

