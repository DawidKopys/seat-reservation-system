import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SeatsChoicePanel.css';

import { Spin } from 'antd';
import SeatButton from '../SeatButton/SeatButton';

const SeatsChoicePanel = ({ seats, loading }) => {
  const [selectedSeats, setSelectedSeats] = useState(['s46', 's47']);

  const deselectSeat = (id) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.filter((seat) => seat !== id)
    );
  };

  const selectSeat = (id) => {
    if (selectedSeats.length < 2) {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  return (
    <div className='seats'>
      {loading ? (
        <Spin size='large' className='seats__loading-indicator' />
      ) : (
        seats.map((seat) => {
          const {
            id,
            cords: { x, y },
            reserved,
          } = seat;

          const selected = selectedSeats.includes(id);

          return (
            <SeatButton
              key={id}
              id={id}
              row={x + 1}
              col={y + 1}
              reserved={reserved}
              selected={selected}
              selectSeat={selectSeat}
              deselectSeat={deselectSeat}
            />
          );
        })
      )}
    </div>
  );
};

SeatsChoicePanel.propTypes = {
  seats: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SeatsChoicePanel;
