import React from "react"

const MenuBotton = () => {
    return (
    <div className="container align-items-center">
        <button className="d-inline-block d-md-none navbar-toggler btn-hamburger" type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                aria-labelledby="aonl8imamdoklwc0tz1ajg2ds3dybvot" class="crayons-icon">
                <title id="aonl8imamdoklwc0tz1ajg2ds3dybvot">Navigation menu</title>
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
            </svg>
        </button>
    </div>)
}

export default MenuBotton