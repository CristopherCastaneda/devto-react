import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/LoginForm';
import styles from './Pages.module.scss';

const LoginPage = () => {
  return (
    <>
    <Header />  
    <div className={`container p-3 ${styles.containerMain}`}>
        <div className='row'>
            <div className="col-12 col-md-1">
               
            </div>
            <div className="col-12 col-md-11 col-lg-8">
                <LoginForm />
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default LoginPage