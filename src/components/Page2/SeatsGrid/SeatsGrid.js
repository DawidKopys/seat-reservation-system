import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SeatsGrid.css';
import { connect } from 'react-redux';

import SeatButton from '../SeatButton/SeatButton';
import { withLoader } from '../../../hocs/withLoader/withLoader';

const SeatsGrid = ({ seats }) => {
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
      {seats.map((seat) => {
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
      })}
    </div>
  );
};

SeatsGrid.propTypes = {
  seats: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({
  seats: store.seats,
  loading: store.loading,
});

export default connect(mapStateToProps, null)(withLoader(SeatsGrid));
