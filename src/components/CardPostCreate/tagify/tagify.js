import React, { useState } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS
import styles from "../tagify/tagify.module.scss"


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

const Tagify = ({changeTags, tags}) => {   

  return (
    <div className={styles.tagifyProp}>      
      <Tags
        settings={baseTagifySettings} // tagify settings object
        defaultValue=""
        onChange={changeTags}
      />        
    </div>
  )
};

export default Tagify;