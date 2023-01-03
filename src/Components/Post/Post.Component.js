import React from 'react';
import Card from '../Card/Card.Component.js';
import Media from '../SocialMedia/SocialMedia.Component.js';

const Post = () => {
  return (
    <div className="post-container">
      <h1 className="post-title">My specialisations</h1>
      <div className="post-cards">
        <Card
          src="https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg"
          title="full-stack developer"
          content="in my web developer portfolio you can see the different websites I have made, you can find from movie websites to fully functional social networks."
          bContent="Webs"
          effect="fade-right"
          time="3000"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg"
          title="Game Designer"
          content="here you will find several small games developed with the Unreal Engine and Unity graphics engines in which I have participated both as Game Designer and programmer."
          bContent="Games"
          effect="fade-down"
          time="3000"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089__340.jpg"
          title="3D Artist"
          content="you can see several of the 3D models that I have made, in several of the cases you can download the model in fbx format and be able to see it in any place."
          bContent="3D proyects"
          effect="fade-left"
          time="3000"
        />
      </div>
      <div class="social-media">
        <Media />
      </div>
    </div>
  );
};
export default Post;
