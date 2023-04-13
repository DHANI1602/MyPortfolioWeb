import React from 'react';
import Card from '../Card/Card.Component.js';
import Media from '../SocialMedia/SocialMedia.Component.js';

const Post = () => {
  return (
    <div className="post-container">
      <h1
        className="post-title"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        My specialisations
      </h1>
      <div className="post-cards">
        <Card
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/Web%2FWebSample.png?alt=media&token=704ee00d-0535-4c13-a91e-870a9226c0f7"
          title="Front-end developer"
          content="in my web developer portfolio you can see the different websites I have made, you can find from movie websites to fully functional social networks."
          bContent="Webs"
          effect="fade-left"
          time="2000"
        />
        <Card
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/GD%2FGDSample.png?alt=media&token=670298eb-5eb9-4670-9cc4-1d71c089b88d"
          title="Game Designer"
          content="here you will find several small games developed with the Unreal Engine and Unity graphics engines in which I have participated both as Game Designer."
          bContent="Games"
          effect="fade-down"
          time="2000"
        />
        <Card
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/3D%2F3DSample.png?alt=media&token=dba4c3f1-7a6e-4db9-8938-2e0a15c16b17"
          title="3D Artist"
          content="you can see several of the 3D models that I have made, in several of the cases you can download the model in fbx format and be able to see it in any place."
          bContent="3D proyects"
          effect="fade-right"
          time="2000"
        />
      </div>
      <div class="social-media">
        <Media />
      </div>
    </div>
  );
};
export default Post;
