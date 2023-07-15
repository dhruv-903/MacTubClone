"use client"
import React from 'react'
import styles from '../../styles/externalpage.module.css'
import { useRouter } from 'next/navigation'

function page() {

  const router = useRouter();
  const returnToHome = () => {
    router.push('/')
  }
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
      <p style={{ fontSize: '100px' }} >Thank you for searching😊😊😊</p>
      <div className={styles.returnToHome} onClick={returnToHome} >Return to Homepage</div>
    </div>
  )
}

export default page