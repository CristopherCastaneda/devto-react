import React, { useState, useContext } from "react";

const PostContext = React.createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState(null);

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

export const usePost = () => useContext(PostContext);