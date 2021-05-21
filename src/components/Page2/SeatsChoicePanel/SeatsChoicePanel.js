import React from 'react';
import PropTypes from 'prop-types';
import './SeatsChoicePanel.css';

import { seats } from './seats';
import SeatButton from '../SeatButton/SeatButton';

const SeatsChoicePanel = () => {
  return (
    <div className='seats'>
      {seats.map((seat) => {
        const {
          id,
          cords: { x, y },
          reserved,
        } = seat;

        return (
          <SeatButton id={id} row={x + 1} col={y + 1} reserved={reserved} />
        );
      })}
    </div>
  );
};

SeatsChoicePanel.propTypes = {};

export default SeatsChoicePanel;
