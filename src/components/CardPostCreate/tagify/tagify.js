import React, { useState } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS
import "./tagify.scss";


const baseTagifySettings = {
  whitelist: ["Apex (Salesforce.com)", "Assembly language", "ASP.NET", "Bash", "Batch (Windows/Dos)", "C++ ", "C/AL", "C#", "Java", "Javascript", "MATLAB", "CSS", "HTML", "Ruby"],
  dropdown: {
    maxItems: 100,
    classname: "tags-look",
    enabled: 1,
    closeOnSelect: false
  },
  enforceWhitelist: false,
  maxTags: 4 ,
  placeholder: "Add up to 4 tags",
}

const Tagify = ({changeTags, value}) => {   

  return (
    <div className="w-100 border-0">      
      <Tags
        settings={baseTagifySettings} // tagify settings object
        defaultValue={value}
        onChange={changeTags}
      />        
    </div>
  )
};

export default Tagify;