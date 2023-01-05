import React from 'react';
import SubList from './CVSubList.Component.js';

const CVInfo = (props) => {
  const effect = props.effect;
  const time = props.time;
  return (
    <div className="cv-content">
      <h1 className="cv-title">Dhaniel Jose Natera Rendon</h1>
      <ul>
        <li className="cv-list">
          <h2>Studies:</h2>
          <SubList
            title="Bachelor of Science"
            content="Institution: Unidad Educativa Privada Colegio Maria Auxiliadora (Venezuela)"
            init="Completed: Jun. 2018"
            finish="Completed: Jun. 2018"
            finished={true}
          />
          <SubList
            title="Higher Technician in Design and Development of Virtual Simulators"
            content="Institution: First Da Vinci Multimedia Art School (Argentina)"
            init="Start date: 12 Mar. 2019"
            finish="Completed: 17 Dec. 2021"
            finished={false}
          />
        </li>
        <li className="cv-list">
          <h2>Experience:</h2>
          <SubList
            title="Teacher"
            content="Institution: First Da Vinci Multimedia Art School (Argentina)"
            init="Start date: 21 Mar. 2022"
            finish="currently"
            finished={false}
          />
        </li>
        <li className="cv-list">
          <h2>Technologies:</h2>
        </li>
      </ul>
    </div>
  );
};
export default CVInfo;
