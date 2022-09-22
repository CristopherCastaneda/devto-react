import React from "react";




const MainCard = ({post_banner}) => {
  return (
    <div className="card p-2 p-md-3 mt-3">
        <img src={post_banner} alt=""></img>
    </div>
  );
};

export default MainCard;