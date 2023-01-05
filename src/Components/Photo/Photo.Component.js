import React from 'react';

const Photo = (props) => {
  const effect = props.effect;
  const time = props.time;
  return (
    <>
      <img
        className="cv-photo"
        src={props.src}
        width={props.w}
        height={props.h}
      />
    </>
  );
};
export default Photo;
