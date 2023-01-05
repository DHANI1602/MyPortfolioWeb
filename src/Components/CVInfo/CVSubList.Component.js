import React from 'react';

const SubList = (props) => {
  const effect = props.effect;
  const time = props.time;
  return (
    <ul className="cv-sub">
      <h5>{props.title}</h5>
      <li className="cv-sub-list">
        <p>{props.content}</p>
      </li>
      {props.finished ? (
        <li className="cv-sub-list">
          <p>{props.finish}</p>
        </li>
      ) : (
        <>
          <li className="cv-sub-list">
            <p>{props.init}</p>
          </li>
          <li className="cv-sub-list">
            <p>{props.finish}</p>
          </li>
        </>
      )}
    </ul>
  );
};
export default SubList;
