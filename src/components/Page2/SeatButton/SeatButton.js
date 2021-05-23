import React from 'react';
import PropTypes from 'prop-types';
import './SeatButton.css';
import { Button } from 'antd';

import { connect } from 'react-redux';
import { selectSeat, deselectSeat } from '../../../redux/seats';

const SeatButton = ({
  row,
  col,
  reserved,
  selected,
  selectSeat,
  deselectSeat,
}) => {
  const reservedClass = `${reserved ? 'seat-btn--reserved' : ''}`;
  const selectedClass = `${selected ? 'seat-btn--selected' : ''}`;

  const handleClick = () => {
    if (selected) {
      deselectSeat();
    } else {
      selectSeat();
    }
  };

  return (
    <Button
      htmlType='button'
      className={`seat-btn seats__seat-btn ${reservedClass} ${selectedClass}`}
      disabled={reserved}
      style={{ gridRow: row, gridColumn: col }}
      onClick={handleClick}
    />
  );
};

SeatButton.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  selectSeat: PropTypes.func.isRequired,
  deselectSeat: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { selectedSeats } = state;
  const { id } = ownProps;

  const selected = selectedSeats.some((seat) => seat.id === id);
  return { selected };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;

  return {
    selectSeat: () => dispatch(selectSeat(id)),
    deselectSeat: () => dispatch(deselectSeat(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatButton);
