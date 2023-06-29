import React from 'react';

const Learn = () => {
  const peopleOnEarth = "7 billion"; // Update with the correct number of people on Earth
  const continents = 7; // Update with the correct number of continents

  return (
    <div>
      <h2>Learn</h2>
      <p>There are {peopleOnEarth} people on Earth.</p>
      <p>There are {continents} continents.</p>
      <p>There is a country called Japan that has its capital called Tokyo.</p>
    </div>
  );
};

export default Learn;
