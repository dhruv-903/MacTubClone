"use client"

import styles from './styles/homepage.module.css'
import Sidebar from './components/Sidebar'
import Comment from './components/Comment';
import Feature from './components/Feature';
import Author from './components/Author';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter()
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSearchModal = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };

  const searchFunction = () => {
    router.push("/routes/search")
  }

  useEffect(() => {
    scrollToTop()
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const darkModeFunction = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={`${darkMode ? styles.darkModeClass : ''}`}>

        <Header onToggle={toggleSearchModal} darkmode={darkMode} />

        <div className={styles.middleContainer}>
          <div className={styles.leftContainer}>
            <Content darkmode={darkMode} />
            <Author darkmode={darkMode} />
            <Comment darkmode={darkMode} />
            <Feature darkmode={darkMode} />
          </div>
          <div className={styles.rightContainer}>
            <Sidebar darkmode={darkMode} />
          </div>

          <div className={styles.function}>
            <p>Change mode</p>
            <div className={styles.textMode} >
              <input onChange={darkModeFunction} type="checkbox" />
              <p>Dark mode</p>
            </div>
            <div className={styles.categoryColor} >
              <input type="checkbox" />
              <p>Category</p>
            </div>
            <p className={styles.instruction} >Note: Category is not functional</p>
          </div>

          <div className={styles.offer} >
            <a href="">Try it for free 🚀</a>
            <a href="">Purchase - <span>35$</span></a>
          </div>

          <button onClick={scrollToTop} className={styles.goToTopButton} > &#8896;</button>

          <div className={`${styles.searchModal} ${isSearchModalOpen ? '' : styles.none}`} >
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <h2 style={{ marginBottom: '8px' }} >Search</h2>
                <input type="text" className={styles.searchInput} placeholder="Enter your search query" />
                <button className={styles.searchButton} onClick={searchFunction} >Search</button>
                <button className={styles.cancelButton} onClick={toggleSearchModal} >Cancel</button>
              </div>
            </div>
          </div>

        </div>

        <Footer darkmode={darkMode} />
        
      </div>
    </>
  )
}
