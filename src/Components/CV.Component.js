import React from 'react';
import Photo from './Photo/Photo.Component.js';
import CVInfo from './CVInfo/CVInfo.Component.js';
import WD from './CVTech/CVTechWD.Component.js';
import GD from './CVTech/CVTechGD.Comonent';
import A3D from './CVTech/CVTech3D.Component';
const Cv = () => {
  return (
    <>
      <div className="cv-container">
        <Photo
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/Resources%2F1652734312022.jpg?alt=media&token=c63cb7fe-42b1-4391-9681-c6b038c0fe2d"
          w="300"
          h="300"
        />
        <CVInfo />
      </div>
      <div>
        <h2 className="cv-tech-title">Web Design</h2>
        <WD />
        <h2 className="cv-tech-title">Game Design</h2>
        <GD />
        <h2 className="cv-tech-title">3D Art</h2>
        <A3D />
      </div>
    </>
  );
};
export default Cv;
