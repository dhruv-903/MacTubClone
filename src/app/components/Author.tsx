import React from 'react'
import styles from '@/app/styles/author.module.css'

function author({darkmode}:any) {
  return (
    <div className={`${styles.mainAuthorContainer} ${darkmode ? styles.isDarkMode : ''}`} >
      <div className={styles.authorImageName}>
        <div className={styles.imageNameContainer}>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
          <div className={styles.nameRole}>
            <p>Jonathen Doe
            </p>
            <p>Collaborator & Editor</p>
          </div>
        </div>
      </div>
      <div className={styles.authorDetails}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora deleniti, similique odio recusandae accusamus?
          </p>
      </div>
      <div className={styles.socialLinks}>
              <a href=""><div className={styles.facebook} ></div></a>
              <a href=""><div className={styles.instagram} ></div></a>
              <a href=""><div className={styles.twitter} ></div></a>
      </div>

      <div className={styles.viewAllArticlesButton} >
          <button>View All Articles</button>
      </div>
    </div>
  )
}

export default author