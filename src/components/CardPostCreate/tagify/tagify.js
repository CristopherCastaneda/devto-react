import React, { useState } from "react";
import Form from "react-bootstrap/Form";
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

const Tagify = () => {
  const [tags, setTags] = useState('[]');
  const [values, setValues] = useState({
    title: '',
    tags:'',
    body:'',
    imgUrl: '',
  });

  console.log('tags', JSON.parse(tags).map(t => t.value))
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      ...values,
      tags: JSON.parse(tags).map(t => t.value),
    }

  //   const getUser = async () => {
    
      // const response = await fetch(`${APIURL}users/${tokenUserID}`, {
      //     method: "GET",
      //     headers: {
      //     "Content-Type": "application/json"
      //     }
      // });
      
  //     const user = await response.json(); 
  //     let userPost = user.data.user;
  //     delete userPost.password;
  //     delete userPost.savedPost;
  
  //     return userPost;
  //  }
    //fetch('', {body, method: 'POST'})
    console.log('', { body, method: 'POST' })
  }

  return (
    <div className={styles.tagifyProp}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Tags
            settings={baseTagifySettings} // tagify settings object
            defaultValue=""
            onChange={(e) => { setTags(e.detail.value) }}
          />
        </Form.Group>
      </Form>
    </div>
  )
};

export default Tagify;