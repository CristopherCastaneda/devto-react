import React from "react"
import Footer from "../components/Footer/Footer"
import styles from "./Pages.module.scss"
import PostCreate from "../components/CardPostCreate/CardPostCreate"
import CardPostCreate from "../components/CardPostCreate/CardInstruccion/CardInstruccion"



const CreatePost =()=>{
    return(
        <>
        <div className={`container p-3 ${styles.containerCreate}`}>
        <div className='row'>
            <div class="col-12 col-md-1">
               
            </div>
            <div className="col-12 col-md-11 col-lg-8">
                <PostCreate/>
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