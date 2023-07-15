import React from 'react'
import styles from '../styles/content.module.css'

function Content({darkmode}:any) {
  return (
    <div className={styles.mainContentContainer} >
        <div className={styles.contentMainImage}>

        </div>
        <div className={`${styles.content} ${darkmode ? styles.isDarkMode : '' }`}>
            <p>
                your content will add here
            </p>
        </div>

    </div>
  )
}

export default Content