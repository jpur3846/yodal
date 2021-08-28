import { createContext, useState, useContext } from "react";

const PostContext = createContext({
  posts: [],
  addPost: () => {},
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const addPost = post => {
    setPosts([...posts, post]);
    console.log("ADDING POST!");
  };
  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
