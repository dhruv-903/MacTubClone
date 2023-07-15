import React from 'react'
import styles from '@/app/styles/comment.module.css'
import { useRouter } from 'next/navigation'

function Comment({ darkmode }: any) {
    const router = useRouter();
    const replyFunction = () => {
        let confirmReply = prompt("Enter your reply")
        if (confirmReply) {
            alert("Your reply has been sending...")
        }
    }

    const addComment = () => {
        router.push('/routes/comment')
    }

    return (
        <div className={`${styles.mainCommentContainer} ${darkmode ? styles.isDarkMode : ''}`} >

            <div className={styles.showComment}>
                <div className={styles.commentHeading}>
                    <h1>One comment</h1>
                </div>
                <div className={styles.commentContent} >
                    <div className={styles.imageContainer}>
                        <img src="" alt="" />
                    </div>

                    <div className={styles.commentContainer}>
                        <div className={styles.nameDate}>
                            <p>Jonathan Doe </p>
                            <p>June 15, 2021</p>
                        </div>
                        <div className={styles.commentContainer}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sed cupiditate voluptatibus? Ipsam quibusdam voluptatibus reprehenderit, sequi sed laudantium facilis atque aut perferendis?</p>
                        </div>
                        <div className={styles.commentButton}>
                            <button onClick={replyFunction} >
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.addComment} >
                <div className={styles.commentHeading}>
                    <h1>Leave a Reply</h1>
                </div>
                <div className={styles.inputContainer}>
                    <textarea className={`${darkmode ? styles.isDarkModeInput : ''}`} placeholder='Comment' name="" id="" cols={30} rows={10}></textarea>
                    <div className={styles.nameEmail}>
                        <input className={`${darkmode ? styles.isDarkModeInput : ''}`} type="text" placeholder='Name' />
                        <input className={`${darkmode ? styles.isDarkModeInput : ''}`} type="text" placeholder='Email' />
                    </div>
                    <input className={`${darkmode ? styles.isDarkModeInput : ''}`} type="text" placeholder='Website' />
                </div>
                <div className="postCommentButton">
                    <button className={styles.addCommentButton} onClick={addComment} >Comment</button>
                </div>
            </div>


        </div>
    )
}

export default Comment