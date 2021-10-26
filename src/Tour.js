import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <span onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
        <button
          className="not-interested-button"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
