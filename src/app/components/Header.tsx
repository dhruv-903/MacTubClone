import React from 'react'
import styles from '../styles/header.module.css'


const Header = ({onToggle,darkmode}:any) => {

    return (
        <div className={styles.headingMainContainer}>
            <div className={styles.headingContainer}>
                <div className={styles.navHeading}>

                    <div className={styles.socialMediaIcons}>
                        <a className={styles.facebook} href=""></a>
                        <a className={styles.instagram} href=""></a>
                        <a className={styles.twitter} href=""></a>
                        <a className={styles.youtube} href=""></a>
                    </div>

                    <div className={styles.logoImage}>
                        <p><span style={{ color: 'red' }} >M</span>akTub</p>
                    </div>
                    <div className={styles.searchIcon}>
                        <div onClick={onToggle} >

                        </div>
                    </div>

                </div>
                <div className={styles.navItemsMainContainer}>
                    <div className={`${styles.navItems} ${darkmode ? styles.isDarkMode : ''}`}>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">Home</a>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">Header Styles</a>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">Post Features</a>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">#Tag</a>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">Author</a>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">Feature</a>
                        <a className={darkmode ? styles.isDarkModeAnchor : ''} href="">contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
