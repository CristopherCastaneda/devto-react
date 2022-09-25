import React, { useEffect, useState} from 'react';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import ReadNextList from '../components/ReadNextList/ReadNextList';
import CardPostsListing from '../components/CardPostsListing/CardPostsListing';
import styles from './Pages.module.scss';
import PostReactions from '../components/PostReactions/PostReactions';
import PostComments from '../components/PostComments/PostComments';
import Header from '../components/Header/Header';
import useFetch from '../hooks/useFetch';
import { usePost } from '../context/PostContext';
import DetailPost from '../components/DetailPost/DetailPost';

const DetailPostPage = () => {

    const params = useParams(); 
    const { data, error } = useFetch(`https://devto-backend-nine.vercel.app/posts/${params.postId}`);
    
    const { postData, setPostData  } = usePost(); 

    if(data)
        setPostData(data.data.post);    

    return (
        <>  
        <Header />
            <div className={`container p-3 ${styles.containerMain}`}>
                <div className='row'>
                    <div className='col-12 col-md-1'>
                        <aside className={styles.asideLeft}>
                            <PostReactions />
                        </aside>
                    </div>
                    <div className='col-12 col-md-11 col-lg-8 '>
                        {postData && <DetailPost />} 
                        {postData && <PostComments />}                    
                        <ReadNextList />
                    </div>
                    <div className='col-12 col-lg-3'>
                        <aside className={`aside-right p-0 ps-md-5 ps-lg-0 ${styles.detailAside}`}>
                            {postData && <ProfileCard />}
                            {postData && <CardPostsListing />}                        
                        </aside>
                    </div>
                </div>   
            </div> 
        <Footer />
        </>
      )
}

export default DetailPostPage