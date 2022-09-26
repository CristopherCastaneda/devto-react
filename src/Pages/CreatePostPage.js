<<<<<<< HEAD
import React from "react"
import Footer from "../components/Footer/Footer"
import styles from "./Pages.module.scss"
import PostCreate from "../components/CardPostCreate/CardPostCreate"
import CardPostCreate from "../components/CardPostCreate/CardInstruccion/CardInstruccion"
import MainNavbarCreatePost from "../components/Header/MainNavbar/MainNavbarCreatePost"

=======
import React from "react";
import Footer from "../components/Footer/Footer";
import styles from "./Pages.module.scss";
import PostCreate from "../components/CardPostCreate/CardPostCreate";
import CardPostCreate from "../components/CardPostCreate/CardInstruccion/CardInstruccion";
>>>>>>> 06886d72d3c3079c01c852a36db139f41c1c59e1

const CreatePost =()=>{
    return(
        <>
        <MainNavbarCreatePost/>
        <div className={`container p-3 ${styles.containerCreate}`}>
        <div className='row'>
            <div className="col-12 col-md-1">
               
            </div>
            <div className="col-12 col-md-11 col-lg-8">
                <PostCreate type="post" />
            </div>
            <div className="col-12 col-lg-3 d-none d-lg-block">
                <CardPostCreate/>
            </div>
        </div>
    </div>
    <Footer />
    </>

    )
}

export default CreatePost