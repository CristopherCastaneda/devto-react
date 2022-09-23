import React, { useState } from 'react'
import ShowMorePopUp from './ShowMorePopUp';

function ShowMoreReaction() {
    const [displayMenu, setDisplayMenu] = useState(false); 
    
    const toogleDisplay = () => { 
       setDisplayMenu(!displayMenu);               
    }
    
    return (
        <div className="reaction d-flex">
            <button onClick={toogleDisplay} className="btn reaction-button-like btn-reaction-more d-flex gap-2 flex-md-column align-items-center" data-category="like" title="Heart">
                 <div className="svg-container rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="acpt207yp24sfeobeggdtc9b3ehlk8qv" aria-hidden="true" className="crayons-icon dropdown-icon">
                        <title id="acpt207yp24sfeobeggdtc9b3ehlk8qv">More...</title>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z">
                        </path>
                    </svg>
                </div>
            </button>
            <ShowMorePopUp display={displayMenu} />            
        </div>
    )
}

export default ShowMoreReaction