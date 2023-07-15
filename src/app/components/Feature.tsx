import React from 'react'
import styles from '@/app/styles/feature.module.css'

function feature({darkmode}:any) {
    return (
        <div className={`${styles.mainFeatureContainer} ${darkmode ? styles.isDarkMode : ''}`}>


            <div className={styles.relatedArticles} >
                <div className={styles.heading} >
                    <h1>Related articles</h1>
                </div>
                <div className={styles.relatedArticlesPost} >
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
                    <div className={styles.post}>
                        <div className={`${styles.image} ${styles.content4}`}>
                        </div>
                        <div className={styles.details} >
                            <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
                            <p>july 26,2019</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.otherStories} >
                <div className={styles.heading} >
                    <h1>Other stories</h1>
                </div>
                <div className={styles.otherStoriesPosts}>
                    <div className={styles.otherStoriesPost}>
                        <div className={styles.otherStoriesImage}>
                        </div>
                        <div className={styles.otherStoriesDetail} >
                            <p>Lorem ipsum dolor sit amet consectetur adipis.</p>
                            <p>july 26,2019</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default feature
