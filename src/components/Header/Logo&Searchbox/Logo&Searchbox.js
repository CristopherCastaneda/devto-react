import React from "react"
import Logo from "../Logo/Logo"
import SearchBox from "../SearchBox/SearchBox"



const LogoSearchbox=()=>{
    return(
        <div class="logo d-flex align-items-center">
            <Logo/>
            <SearchBox/>
        </div>
    )
}

export default LogoSearchbox