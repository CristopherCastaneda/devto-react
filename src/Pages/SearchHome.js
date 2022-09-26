import Header from "../components/Header/Header"
import styles from "./Pages.module.scss"
import CardList from "../components/PostCardContainer/CardList/CardList"

const SearchHome = () => {

    
    return (
        <>
            <Header />
            <div className={`container p-3 ${styles.containerMain}`}>
                <div className="row">
                    <h1 className="mb-3">Serch results for <span className="search-query"></span></h1>
                </div>

                <div className='col-12 col-md-1'>
                    <aside className={styles.asideLeft}>
                    </aside>
                </div>
                <div className='col-12 col-md-11 col-lg-8 '>
                    <CardList />
                </div>
            </div>
        </>
    )

}

export default SearchHome