import React from "react";
import Footer from "../components/Footer/Footer";
import styles from "./Pages.module.scss";
import PostCreate from "../components/CardPostCreate/CardPostCreate";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import MainNavbarCreatePost from "../components/Header/MainNavbar/MainNavbarCreatePost";


const EditPost = () => {

    const params = useParams();  
    
    const { data, error } = useFetch(`https://devto-backend-nine.vercel.app/posts/${params.postId}`);
   
    return(
        <>
        <MainNavbarCreatePost/>
        <div className={`container p-3 ${styles.containerCreate}`}>
        <div className='row'>
            <div className="col-12 col-md-1">
               
            </div>
            <div className="col-12 col-md-11 col-lg-8">
                {data && <PostCreate post={data?.data?.post} type="put"/> }
            </div>
        </div>
    </div>
    <Footer />
    </>

    )
}

export default EditPost