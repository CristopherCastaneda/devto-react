import React from 'react';
import CardList from '../components/PostCardContainer/CardList/CardList';
import AsideLeft from '../components/AsideLeft/AsideLeft';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from "../Pages/Pages.module.scss";
import CardPostsListingHome from '../components/CardPostsListing/CardPostListingHome/CardPostsListingHome';



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
                        <CardList/>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <aside className={`aside-right p-0 ps-md-5 ps-lg-0 ${styles.detailAside}`}>
                        <CardPostsListingHome/>
                        </aside>
                    </div>
                </div>
            </div>
            <AsideLeft/>
            <Footer />
            
        </>
    )
}

export default HomePage