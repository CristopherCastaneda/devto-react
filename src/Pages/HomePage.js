import React from 'react';
import CardList from '../components/PostCardContainer/CardList/CardList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from "../Pages/Pages.module.scss";
import CardPostsListingHome from '../components/CardPostsListing/CardPostListingHome/CardPostsListingHome';
import CardsPromotions from '../components/AsideLeft/CardsPromotion/CardsPromotions';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
                        <Tabs
                            defaultActiveKey="relevant"
                            id="uncontrolled-tab-example"
                            >
                            <Tab eventKey="relevant" title="Relevant">
                                <CardList order={"relevant"}/>
                            </Tab>
                            <Tab eventKey="latest" title="Latest">
                                <CardList order={"latest"}/>
                            </Tab>
                            <Tab eventKey="top" title="Top" disabled>
                                Hola 2
                            </Tab>
                        </Tabs>
                        
                    </div>
                    <div className='col-12 col-lg-3 d-none d-lg-block'>
                        <aside className={`aside-right p-0 ps-md-5 ps-lg-0 ${styles.detailAside}`}>
                            <CardsPromotions banner="https://res.cloudinary.com/practicaldev/image/fetch/s--ff2NVgR1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ekb1fyzsp9jx2uxdnrqt.png" 
                                title="  Tell us your thoughts about DEV!"
                                content={`<p><a href="/#">→ Take the DEV Satisfaction Survey</a></p>`}
                            />  
                            <CardPostsListingHome title="Listings" seeAll={true}/>
                            <CardPostsListingHome title="#help" seeAll={false}/>
                            <CardPostsListingHome title="#discuss" seeAll={false}/>
                        </aside>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default HomePage