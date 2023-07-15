import React from 'react'
import styles from '@/app/styles/sidebar.module.css'

function sidebarInfo({ darkmode }: any) {

  return (
    <div className={`${styles.mainContainer} ${darkmode ? styles.isDarkMode : ''}`}>
      <div className={styles.recentPosts}>
        <div className={styles.heading}>
          <h2>Recent post </h2>
        </div>
        <div className={styles.recentPostsContainer}>

          <div style={{ marginTop: '0' }} className={styles.post}>
            <div className={`${styles.image} ${styles.content4}`}>
            </div>
            <div className={styles.details} >
              <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
              <p>july 26,2019</p>
            </div>
          </div>

          <div className={styles.post}>
            <div className={`${styles.image} ${styles.content1}`}>

            </div>
            <div className={styles.details} >
              <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
              <p>july 26,2019</p>
            </div>

          </div>
          <div className={styles.post}>
            <div className={`${styles.image} ${styles.content2}`}>

            </div>
            <div className={styles.details} >
              <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
              <p>july 26,2019</p>
            </div>

          </div>
          <div className={styles.post}>
            <div className={`${styles.image} ${styles.content3}`}>

            </div>
            <div className={styles.details} >
              <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
              <p>july 26,2019</p>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.social}>
        <div className={styles.socialHeading} >
          <h2>Social</h2>
        </div>
        <div className={styles.socialIcon} >
          <a href=""><div className={`${styles.imageContainerSocial} ${styles.facebook}`}>
            <img src="" alt="" />
          </div></a>

          <a href=""><div className={`${styles.imageContainerSocial} ${styles.instagram}`}>
            <img src="" alt="" />
          </div></a>

          <a href=""><div className={`${styles.imageContainerSocial} ${styles.twitter}`}>
            <img src="" alt="" />
          </div></a>

          <a href=""><div className={`${styles.imageContainerSocial} ${styles.youtube}`}>
            <img src="" alt="" />
          </div></a>

        </div>
      </div>

      <div className={styles.tagCloud}>
        <div className={styles.tagcloudHeading} >
          <h2>Tag cloud</h2>
        </div>
        <div className={styles.tagsContainer} >
          <a href="">Health</a>
          <a href="">Lifestyle</a>
          <a href="">Music</a>
          <a href="">Technology</a>
          <a href="">Travel</a>
          <a href="">Video</a>
        </div>
      </div>

      <div className={styles.advertising}>
        <div className={styles.advertiseHeading}>
          <h2>Advertising</h2>
        </div>
        <div className={styles.advertiseContainer} >

        </div>
      </div>
    </div>
  )
}

export default sidebarInfo