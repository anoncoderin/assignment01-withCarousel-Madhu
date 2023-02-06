
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/.module.css'

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
            <div>

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
            <div>
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
            <div>
                <label>email</label>
                <input
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

        </>
    )
}

