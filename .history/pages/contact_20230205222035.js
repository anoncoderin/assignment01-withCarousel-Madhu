
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/contact.module.css'
import Image from 'next/image'
import Nav from '../components/nav'

function isValidFirstName(inputdata) {
    if ((inputdata != null) && ((inputdata.toString() === '') || inputdata.toString().match(/^[A-Z][a-z]*$/))) {
        document.getElementById('FirstNameErrorMessage').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('FirstNameErrorMessage').innerHTML = 'First name error: first name must be capital. Must use alphabets only.';
        return false;
    }
}

function isValidLastName(inputdata) {
    if ((inputdata != null) && ((inputdata.toString() === '') || inputdata.toString().match(/^[A-Z][a-z]*$/))) {
        document.getElementById('LastNameErrorMessage').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('LastNameErrorMessage').innerHTML = 'Last name error: last name must be capital. Must use alphabets only.';
        return false;
    }
}

function isValidEmail(inputdata) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if ((inputdata != null) && ((inputdata.toString() === '') ||
        regex.test(inputdata))) {
        document.getElementById('EmailErrorMessage').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('EmailErrorMessage').innerHTML = 'Email is invalid';
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
    const [isFirstNameValid, setFirstNameValid] = useState(false);
    const [isLastNameValid, setLastNameValid] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
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
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href="/favicon.png" />
            </Head>


            <div className={styles.backimage}>
                <Image src='/images/backgroundMountainUpsideDown.jpg' fill='true' />
            </div>
            <main>
                <Nav></Nav>

                <div><h1 className={styles.hrline}>Contact Us</h1></div>
                <div className={styles.middletext}>
                    <p>What to discuss? Let's chat</p>
                </div>

                <div className={styles.contactinfo}>
                    <form>
                        <fieldset>
                            <table>
                                <thead >
                                    <div className={styles.contactinfoname}>
                                        <tr>
                                            <div className={styles.contactinfofirst}>
                                                <th>
                                                    <label>First Name</label>

                                                </th>
                                                <td>
                                                    <input
                                                        placeholder="First Name Here"
                                                        type="text"
                                                        id="first"
                                                        onChange={
                                                            (x => {
                                                                if (x.target.value != '' && isValidFirstName(x.target.value)) {
                                                                    setFirstNameValid(true);
                                                                    setFormData({ ...formData, firstName: x.target.value });
                                                                }
                                                                else {
                                                                    setFirstNameValid(false);
                                                                }
                                                            })
                                                        }>

                                                    </input>
                                                </td>
                                            </div>
                                            <div className={styles.contactinfolast}>
                                                <th><label>Last Name</label></th>
                                                <td>
                                                    <input
                                                        placeholder="Last Name Here"
                                                        type="text"
                                                        id="first"
                                                        name="first"
                                                        pattern="[A-Z]{1}{2,10}"
                                                        minLength="5"
                                                        maxLength="10"
                                                        onChange={(x => {
                                                            if (x.target.value != '' && isValidLastName(x.target.value)) {
                                                                setLastNameValid(true);
                                                                setFormData({ ...formData, lastName: x.target.value });
                                                            }
                                                            else {
                                                                setLastNameValid(false);
                                                            }
                                                        }
                                                        )}>

                                                    </input>
                                                </td>
                                            </div>
                                        </tr>
                                    </div>
                                </thead>


                                <thead >
                                    <div className={styles.contactemail}></div>
                                    <th>
                                        <label>email</label>
                                    </th>
                                    <tr>
                                        <td>
                                            <input className={styles.emailinput}

                                                placeholder="Email Here"
                                                type="text"
                                                id="first"
                                                name="first"
                                                pattern="[A-Z]{1}{2,10}"
                                                minLength="5"
                                                maxLength="10"
                                                onChange={(x => {
                                                    if (x.target.value != '' && isValidEmail(x.target.value)) {
                                                        setEmailValid(true);
                                                        setFormData({ ...formData, lastName: x.target.value });
                                                    }
                                                    else {
                                                        setEmailValid(false);
                                                    }
                                                }
                                                )}>


                                            </input>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </fieldset>
                    </form>
                </div>

                <div id='FirstNameErrorMessage'>
                </div>
                <div id='LastNameErrorMessage'>
                </div>
                <div id='EmailErrorMessage'>
                </div>
                {
                    isFirstNameValid && isLastNameValid && isEmailValid && (
                        <div>
                            Submit
                        </div>
                    )
                }
                <div className={styles.arrowup}>
                    <Link href="/">
                        <Image src={'/images/icons/icons/upwardArrow.png'} width={35} height={40}></Image>
                    </Link>
                </div>
            </main>
        </>
    )
}

