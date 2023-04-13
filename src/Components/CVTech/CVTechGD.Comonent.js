import React from 'react';
import CvTech from './CVTech.Component.js';

const GD = () => {
  return (
    <div className="cv-tech-content">
      <CvTech
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/LogosGD%2FUnrealEngine4.jpg?alt=media&token=ded30d80-469d-4f49-8b3e-dfbe7d370ce1"
        content="Unreal 4/5"
      />
      <CvTech
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/LogosGD%2FUnity5.jpg?alt=media&token=d3196e16-1234-4c24-ade5-3260e1a1751a"
        content="Unity 5"
      />
      <CvTech
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUREApdBYnfslUM3m6xfqDuHig9sPoLCsUjJFs8kTWkknWehVuHYVpdTKKSd3ojBV_P2w&usqp=CAU"
        content="C++"
      />
      <CvTech
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/2048px-C_Sharp_wordmark.svg.png"
        content="C#"
      />
    </div>
  );
};
export default GD;
