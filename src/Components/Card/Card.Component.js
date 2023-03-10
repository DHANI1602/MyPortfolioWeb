import React from 'react';

const Card = (props) => {
  let effect = 'a';
  if (screen.width <= 700) {
    effect = 'fade-down';
  } else {
    effect = props.effect;
  }
  const time = props.time;
  return (
    <div className="card post-card" data-aos={effect} data-aos-duration={time}>
      <img src={props.src} className="card-img-top" height="180px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <a href="#" className="btn btn-primary">
          {props.bContent}
        </a>
      </div>
    </div>
  );
};
export default Card;
