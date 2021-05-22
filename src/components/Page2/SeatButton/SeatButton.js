import React from 'react';
import PropTypes from 'prop-types';
import './SeatButton.css';
import { Button } from 'antd';

const SeatButton = ({
  id,
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
      deselectSeat(id);
    } else {
      selectSeat(id);
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
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  selectSeat: PropTypes.func.isRequired,
  deselectSeat: PropTypes.func.isRequired,
};

export default SeatButton;
