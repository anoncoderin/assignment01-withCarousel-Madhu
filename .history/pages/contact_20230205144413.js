
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/contact.module.css'
import Image from 'next/image'
import Nav from '../components/nav'

function validateInput(inputdata)
{
    if(!inputdata.match("[A-Z]{1}[a-z]{2,10}")){
        document.getElementById('errorMessage').innerHTML='Wrong data';
    }
    else
        document.getElementById('errorMessage').innerHTML='';
}

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const LoginIn = () => {
        console.log(formData.firstName)
        console.log(formData)

        if (formData.firstName !== null) {
            router.push({
                pathname: './about',
                query: {
                    username: formData.firstName
                }
            })
        }
    }


    return (
        <>

            <Head>
                <title>Contact Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta name="og:title" content="Assignment #1 - Contact Us Page" />
                <meta name="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>


            <div className={styles.backimage}>
                <Image src='/images/backgroundMountainUpsideDown.jpg' fill='true' />
            </div>
            <Nav></Nav>

            <h3 className={styles.hrline}>Contact Us</h3>
            <div className={styles.middletext}>
                <h5>What to discuss? Let's chat</h5>
            </div>

            <div className={styles.contactinfo}>
                <div className={styles.contactinfoname}>
                    <div className={styles.contactinfofirst}>

                        <label>First Name</label>
                        <input
                            placeholder="First Name Here"
                            type="text"
                            id="first"
                            pattern="[A-Z]{1}[a-z]{2,10}"
                            title="The first letter should be capital"
                            onChange={
                                    (x => {
                                    validateInput(x.target.value);
                                    setFormData({ ...formData, firstName: x.target.value })
                                    })
                                }>

                        </input>
                    </div>
                    <div className={styles.contactinfolast}>
                        <label>Last Name</label>
                        <input
                            placeholder="Last Name Here"
                            type="text"
                            id="first"
                            name="first"
                            pattern="[A-Z]{1}{2,10}"
                            minLength="5"
                            maxLength="10"
                            onChange={(x => setFormData({ ...formData, lastName: x.target.value }))}>

                        </input>
                    </div>
                </div>
                <div className={styles.contactemail}>
                    <label>email</label>
                    <input className={styles.emailinput}

                        placeholder="Email Here"
                        type="text"
                        id="first"
                        name="first"
                        pattern="[A-Z]{1}{2,10}"
                        minLength="5"
                        maxLength="10"
                        onChange={(x => setFormData({ ...formData, lastName: x.target.value }))}>


                    </input>
                </div>
                <div id='errorMessage'>
                </div>
            </div>

        </>
    )
}

