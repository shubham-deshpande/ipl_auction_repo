import React from 'react';
import { Slide } from 'react-pptx';


const UnsoldPlayerDisplay = ({ unsoldPlayers }) => {
  return (
    <div className="unsoldPlayerDisplay">
      {unsoldPlayers.map((player, index) => (
        <Slide key={index}>
          <img src={player.image} alt={`Unsold Player ${index + 1}`} />
        </Slide>
      ))}
    </div>
  );
};

export default UnsoldPlayerDisplay;
