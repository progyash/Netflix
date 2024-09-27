import React from 'react';
import './Netflix.css';
import seriesData from '../API/series.json';
import NetflixCard from './NetflixCard';

function NetflixSeries() {
  return (
    <div className="netflix-series">
      <h1 className="title">Popular Series</h1>
      <div className="series-container">
        {seriesData.map((el) => (
          <NetflixCard key={el.id} NetflixData={el} />
        ))}
      </div>
    </div>
  );
}

export default NetflixSeries;
