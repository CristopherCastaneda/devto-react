import React from 'react';
import Footer from '../components/Footer/Footer';
<<<<<<< HEAD
import PostCardContainer from '../components/PostCardContainer/PostCardContainer';


const HomePage = () => {
  return (
    <>
    <h1>HomePage</h1>
    <PostCardContainer/>
    <Footer/>
    </>
  )
=======
import Header from '../components/Header/Header';
import styles from "../Pages/Pages.module.scss";



const HomePage = () => {

    return (
        <>
            <Header/>
            <div className={`container p-3 ${styles.containerMain}`}>
                <div className='row'>
                    <div className='col-12 col-md-1'>
                        <aside className={styles.asideLeft}>
                        </aside>
                    </div>
                    <div className='col-12 col-md-11 col-lg-8 '>
                        
                    </div>
                    <div className='col-12 col-lg-3'>
                        <aside className={`aside-right p-0 ps-md-5 ps-lg-0 ${styles.detailAside}`}>
                        </aside>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
>>>>>>> 2969d6f5fe645f9ce36f74730d46f1a7ac46e208
}

export default HomePage