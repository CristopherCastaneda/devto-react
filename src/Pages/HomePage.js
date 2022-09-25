import React from 'react';
import Footer from '../components/Footer/Footer';
<<<<<<< HEAD
import PostCardHome from '../components/PostCardHome/PostCardHome';
import Header from '../components/Header/HeaderHome/Header';
import PostReactions from '../components/PostReactions/PostReactions';
import ReadNextList from '../components/ReadNextList/ReadNextList';
import styles from "../Pages/Pages.module.scss";
import CreatePost from './CreatePostPage';



const HomePage = () => {

    return (
        <>
            <Header />
            <CreatePost/>
            <div className={`container p-3 ${styles.containerMain}`}>
                <div className='row'>
                    <div className='col-12 col-md-1'>
                        <aside className={styles.asideLeft}>
                            <PostReactions />
                        </aside>
                    </div>
                    <div className='col-12 col-md-11 col-lg-8 '>
                        <PostCardHome />
                        <ReadNextList />
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
=======
import Header from '../components/Header/Header';

const HomePage = () => {
  return (
    <>
    <Header />
    <Footer />  
    </>
  )
>>>>>>> 9d076bb42ef9f4210614874c5325edfec8abe5b4
}

export default HomePage