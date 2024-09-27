import React from 'react';
import './Netflix.css';

function NetflixCard({ NetflixData }) {
  const { name, rating, watch_url, img_url, description, cast, genre } = NetflixData;

  return (
    <div className="netflix-card">
      <img src={img_url} alt={name} className="series-image" />
      <div className="series-info">
        <h3 className="series-name">{name}</h3>
        <p className="series-rating">Rating: {rating}</p>
        <p className="series-description">{description}</p>
        <p className="series-cast"><strong>Cast:</strong> {cast.join(', ')}</p>
        <p className="series-genre"><strong>Genre:</strong> {genre.join(', ')}</p>
        <a href={watch_url} className="watch-link" target="_blank" rel="noopener noreferrer">
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default NetflixCard;
