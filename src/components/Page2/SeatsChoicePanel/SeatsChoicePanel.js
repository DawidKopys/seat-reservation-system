import React from 'react';
import PropTypes from 'prop-types';
import './SeatsChoicePanel.css';

import { seats } from './seats';
import SeatButton from '../SeatButton/SeatButton';

const chosenSeats = ['s46', 's47'];

const SeatsChoicePanel = () => {
  return (
    <div className='seats'>
      {seats.map((seat) => {
        const {
          id,
          cords: { x, y },
          reserved,
        } = seat;

        const chosen = chosenSeats.includes(id);

        return (
          <SeatButton
            key={id}
            id={id}
            row={x + 1}
            col={y + 1}
            reserved={reserved}
            chosen={chosen}
          />
        );
      })}
    </div>
  );
};

SeatsChoicePanel.propTypes = {};

export default SeatsChoicePanel;
