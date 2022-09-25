import React from "react"
import Footer from "../components/Footer/Footer"
import styles from "./Pages.module.scss"
import PostCreate from "../components/CardPostCreate/CardPostCreate"



const CreatePost =()=>{
    return(
        <>
        <div className={`container p-3 ${styles.containerCreate}`}>
        <div className='row'>
            <div class="col-12 col-md-1">
               
            </div>
            <div class="col-12 col-md-11 col-lg-8">
                <PostCreate/>
            </div>
        </div>
    </div>
    <Footer />
    </>

    )
}

export default CreatePost