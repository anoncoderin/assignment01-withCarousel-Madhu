
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/contact.module.css'
import Image from 'next/image'
import Nav from '../components/nav'



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

            <div className={styles.backimage}>
                <Image src='/images/backgroundMountainUpsideDown.jpg' fill='true' />
            </div>
            <Nav></Nav>

            <h3></h3>
            <div className={styles.contactinfo}>
                <div className={styles.contactinfoname}>
                    <div className={styles.contactinfofirst}>

                        <label>First Name</label>
                        <input
                            placeholder="First Name Here"
                            type="text"
                            id="first"
                            pattern="[A-Z]{1}[a-z{2,10}"
                            title="The first letter should be capital"
                            onChange={(x => setFormData({ ...formData, firstName: x.target.value }))}>

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
            </div>

        </>
    )
}

