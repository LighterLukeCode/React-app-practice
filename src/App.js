import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "javascript", body: "Description" },
    { id: 2, title: "javascript 2", body: "Description" },
    { id: 3, title: "javascript 3", body: "Description" },
  ]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <select>
          <option value="value1">Sort by Name</option>
          <option value="value1">Sort by Description</option>
        </select>
      </div>

      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={posts}
          title="List of posts JavaSript"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>No Post, Sorry!!</h1>
      )}
    </div>
  );
}

export default App;
