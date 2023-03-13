import React from 'react';

// Styles
import './Circle.scss';

interface Circle {
  startYear: number;
  endYear: number;
}

const Circle = ({ startYear, endYear }: Circle) => {
  return (
    <div className="circle-container">
      <div className="circle"></div>
      <span className="start-years">{startYear}&nbsp;</span>

      <span className="end-years">{endYear}</span>
    </div>
  );
};

export default Circle;
