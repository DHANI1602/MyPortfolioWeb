import React from 'react';

const CvTech = (props) => {
  return (
    <>
      <div className="cvtech">
        <img src={props.src} width="80" height="80" className="cvtech-img" />
        <h5 className="cvtech-text">{props.content}</h5>
      </div>
    </>
  );
};
export default CvTech;
