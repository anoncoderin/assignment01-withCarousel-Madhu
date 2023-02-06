
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/contact.module.css'
import Image from 'next/image'
import Nav from '../components/nav'

function isValidFirstName(inputdata)
{
    if((inputdata != null) && ((inputdata.toString() === '') || inputdata.toString().match(/^[A-Z][a-z]*$/))){
        document.getElementById('FirstNameErrorMessage').innerHTML='';
        return true;
    }
    else{
        document.getElementById('FirstNameErrorMessage').innerHTML='First name error: first name must be capital. Must use alphabets only.';
        return false;
    }
}

function isValidLastName(inputdata)
{
    if((inputdata != null) && ((inputdata.toString() === '') || inputdata.toString().match(/^[A-Z][a-z]*$/))){
        document.getElementById('LastNameErrorMessage').innerHTML='';
        return true;
    }
    else{
        document.getElementById('LastNameErrorMessage').innerHTML='Last name error: last name must be capital. Must use alphabets only.';
        return false;
    }
}

function isValidEmail(inputdata)
{
    if((inputdata != null) && ((inputdata.toString() === '') || 
        inputdata.toString().match())){
        document.getElementById('EmailErrorMessage').innerHTML='';
        return true;
    }
    else{
        document.getElementById('EmailErrorMessage').innerHTML='Email is invalid';
        return false;
    }
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
                                        if(isValidFirstName(x.target.value)){
                                            setFormData({ ...formData, firstName: x.target.value });
                                        }
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
                            onChange={(x => 
                                {
                                if(isValidLastName(x.target.value)){
                                    setFormData({ ...formData, lastName: x.target.value });
                                }
                                }
                            )}>

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
                        onChange={(x => {
                            if(isVidateEmail(x.target.value);
                            setFormData({ ...formData, lastName: x.target.value })
                        }
                        )}>


                    </input>
                </div>
                <div id='FirstNameErrorMessage'>
                </div>
                <div id='LastNameErrorMessage'>
                </div>
                <div id='EmailErrorMessage'>
                </div>
            </div>

        </>
    )
}
