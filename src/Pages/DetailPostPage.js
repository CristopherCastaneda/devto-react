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

const DetailPostPage = () => {
    const params = useParams();
    //Get Post details
    const [post, setPost] = useState(null); 
    useEffect(() => {
        fetch(`https://devto-backend-nine.vercel.app/posts/${params.postId}`)
        .then((response) => response.json())
        .then(post => {
            setPost(post.data.post);            
        });
    },[]);

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
                    Detail
                    {post && <PostComments comments={post.comments} postId={params.postId}/>}                    
                    <ReadNextList />
                </div>
                <div className='col-12 col-lg-3'>
                    <aside className={`aside-right p-0 ps-md-5 ps-lg-0 ${styles.detailAside}`}>
                        {post && <ProfileCard user={post.user} />}
                        {post && <CardPostsListing username={post.user.user_name} />}                        
                    </aside>
                </div>
            </div>    
        </div>   
        <Footer />
        </>
      )
}

export default DetailPostPage