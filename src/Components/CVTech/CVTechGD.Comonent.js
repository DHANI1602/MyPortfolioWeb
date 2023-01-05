import React from 'react';
import CvTech from './CVTech.Component.js';

const GD = () => {
  return (
    <div className="cv-tech-content">
      <CvTech
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/LogosGD%2FUnity5.jpg?alt=media&token=d3196e16-1234-4c24-ade5-3260e1a1751a"
        content="Unity 5"
      />
      <CvTech
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/LogosGD%2FUnrealEngine4.jpg?alt=media&token=ded30d80-469d-4f49-8b3e-dfbe7d370ce1"
        content="Unreal Engine 4"
      />
      <CvTech
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/LogosGD%2FUnrealEngine5.png?alt=media&token=1a8d8c7e-1fe3-4850-a551-83b060e6c8ad"
        content="Unreal Engine 5"
      />
    </div>
  );
};
export default GD;
