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
                    <div className='col-12 col-md-3 col-lg-2 d-none d-md-block'>
                        <aside className={styles.asideLeft}>
                            <AsideLeft/>
                        </aside>
                    </div>
                    <div className='col-12 col-md-9 col-lg-7'>
                        <CardList/>
                    </div>
                    <div className='col-12 col-lg-3 d-none d-lg-block'>
                        <aside className={`aside-right p-0 ps-md-5 ps-lg-0 ${styles.detailAside}`}>
                        <CardPostsListingHome/>
                        </aside>
                    </div>
                </div>
            </div>            
            <Footer />
            
        </>
    )
}

export default HomePage