import React from 'react';
import Pre from './Pre/Pre.Component.js';
import Post from './Post/Post.Component.js';

const Index = () => {
  return (
    <div className="main-container">
      <div className="pre">
        <Pre />
      </div>
      <div className="post">
        <div className="post-blured">
          <Post />
        </div>
      </div>
    </div>
  );
};
export default Index;
