import React from 'react'
import styles from '../styles/footer.module.css'
import { useRouter } from 'next/navigation'


const Footer = () => {
  const router = useRouter();
  const goToEmail = () => {
    router.push('/routes/email')
  }

  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerTopContainer}>

        <div className={styles.firstFooterHeading}>
          <p>Subscribe to <span style={{ color: 'red' }} >M</span>aktub</p>
          <p>Get the latest posts delivered right to your email</p>
        </div>

        <div className={styles.emailInputContainer}>
          <input placeholder='Enter your email address' type="text" />
          <button onClick={goToEmail} >Submit</button>
        </div>

        <div className={styles.socialMediaIcons}>
          <div className={styles.facebooksm} ></div>
          <div className={styles.instagramsm} ></div>
          <div className={styles.twittersm} ></div>
          <div className={styles.youtubesm} ></div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerCards}>

          <div className={`${styles.cards} ${styles.firstCard}`}>
            <div className={styles.cardHeading}>
              <h2 style={{ borderBottom: '2px solid', paddingBottom: '3px' }} >Latest Articles</h2>
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

          <div className={`${styles.cards} ${styles.secondCard}`}>
            <div className={styles.cardHeading}>
              <h2 style={{ borderBottom: '2px solid', paddingBottom: '3px' }} >Tag Cloud</h2>
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

          <div className={`${styles.cards} ${styles.thirdCard}`}>
            <div className={styles.cardHeading}>
              <h2 style={{ borderBottom: '2px solid', paddingBottom: '3px' }} >Follow Me</h2>
            </div>
            <div className={styles.socialIcon} >

              <a href="">
                <div className={`${styles.imageContainerSocial} ${styles.facebook}`}>
                  <img src="" alt="" />
                </div>
              </a>
              <a href=""><div className={`${styles.imageContainerSocial} ${styles.instagram}`}>
                <img src="" alt="" />
              </div></a>

              <a href=""><div className={`${styles.imageContainerSocial} ${styles.twitter}`}>
                <img src="" alt="" />
              </div></a>

              <a href=""> <div className={`${styles.imageContainerSocial} ${styles.youtube}`}>
                <img src="" alt="" />
              </div></a>


            </div>
          </div>

          <div className={`${styles.cards} ${styles.fourthCard}`}>
            <div className={styles.cardHeading}>
              <h2 style={{ borderBottom: '2px solid', paddingBottom: '3px' }} >About Me</h2>
            </div>
            <div className={styles.footerAbout}>
              <div className={styles.footerImage}>
                <img src="" alt="" />
              </div>
              <div className={styles.footerDetail}>
                <p>Jonathan Doe</p>
                <p>Founder & Editor</p>
              </div>
            </div>
            <div className={styles.footerAboutIntro} >
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est culpa quibusdam necessitatibus repellat velit nihil ipsum, libero, dolores itaque iste accusantium minus odio.</p>
            </div>
          </div>
        </div>

        <div className={styles.footerHeading}>
          <p><span style={{ color: 'red' }} >M</span>akTub</p>
          <p>published with WordPress & EstudioPatagon</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
