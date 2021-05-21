import React from 'react';
import PropTypes from 'prop-types';
import './SeatButton.css';
import { Button } from 'antd';

const SeatButton = ({ id, row, col, reserved, chosen }) => {
  const reservedClass = `${reserved ? 'seat-btn--reserved' : ''}`;
  const chosenClass = `${chosen ? 'seat-btn--chosen' : ''}`;

  return (
    <Button
      htmlType='button'
      className={`seat-btn seats__seat-btn ${reservedClass} ${chosenClass}`}
      disabled={reserved}
      style={{ gridRow: row, gridColumn: col }}
    >
      {' '}
    </Button>
  );
};

SeatButton.propTypes = {
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
  chosen: PropTypes.bool.isRequired,
};

export default SeatButton;
