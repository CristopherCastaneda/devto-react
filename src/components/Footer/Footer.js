import React from 'react';
import leaf from './hoja.svg'

const Footer = () => {
  return (
     <footer className="bg-dark bg-opacity-10 p-2 p-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="content col-md-12">
                        <p><a className="text-primary text-decoration-underline" href="https://dev.to/">Dev community</a> —
                            A constructive and inclusive social network for software developers. With you every step of your journey.
                        </p>
                        <p>Built on the 
                            <a className="text-primary text-decoration-underline" href="https://www.forem.com/">Forem</a> 
                            <a className="text-primary text-decoration-underline" href="https://www.forem.com/"> open source</a> software the powers <a className="text-primary text-decoration-underline" href="https://dev.to/">DEV</a> and other inclusive communities.
                        <br />
                        Made with love and <a className="text-primary text-decoration-underline" href="https://dev.to/t/rails">Ruby on Rails.</a> DEV Community © 2016 - 2022.
                        </p>
                        <a className="text-primary text-decoration-underline" href="https://www.forem.com/">
                            <img src={leaf} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer