"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import styles from '../../styles/externalpage.module.css'

function page() {

    const router = useRouter();
    const returnToHome = () => {
        router.push('/')
    }
    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
            <p style={{ fontSize: '100px' }} >Comment sending...😊😊😊</p>
            <div className={styles.returnToHome} onClick={returnToHome} >Return to Homepage</div>
        </div>
    )
}

export default page