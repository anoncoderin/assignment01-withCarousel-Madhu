import { useState } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Contact(){
    const router = useRouter();
    const [formData, setFormData]= useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const LoginIn =()=> {
        console.log(formData.firstName)
        console.log(formData)

        if 
    }
}

