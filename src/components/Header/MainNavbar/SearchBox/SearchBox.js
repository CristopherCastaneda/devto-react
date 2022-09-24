import React from "react"
import styles from "./SearchBox.module.scss"

const SearchBox = () => {
    return (
        <div className={`${styles.search}`}>
            <div className={`input-group ${styles.searchGroup}`}>
                <input type="text" id="input-desktop-search" className="form-control border-end-0" placeholder="Search..."
                    ariaLabel="search" ariaDescribedBy="button-addon2" />
                <button className={`${styles.btn} btn-outline-secondary`} type="button" id="btn-desktop-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                        <path
                            d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default SearchBox