import React from "react"
import Footer from "../components/Footer/Footer"
import CreateAccount from "../components/CreateAccountHome/CardCreateAccount"
import styles from "./Pages.module.scss"

const CreateAccountPage =()=>{
    return(
        <>
        <div className={`container p-3 ${styles.containerPost}`}>
        <div className='row'>
            <div class="col-12 col-md-1">  
            </div>
            <div class="col-12 col-md-11 col-lg-8">
                <CreateAccount/>
            </div>
        </div>
    </div>
    <Footer />
    </>

    )
}

export default CreateAccountPage