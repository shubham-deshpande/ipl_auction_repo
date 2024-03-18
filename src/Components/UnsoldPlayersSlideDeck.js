import React from 'react';
import { Presentation, Slide } from 'react-pptx';

const UnsoldPlayersSlideDeck = ({ unsoldPlayers }) => {
  return (
    <div>
      <Presentation>
        {unsoldPlayers.map((player, index) => (
          <Slide key={index}>
          </Slide>
        ))}
      </Presentation>
    </div>
  );
};

export default UnsoldPlayersSlideDeck;
