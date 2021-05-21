import React from 'react';
import PropTypes from 'prop-types';
import './SeatButton.css';
import { Button } from 'antd';

const SeatButton = ({ id, row, col, reserved, picked }) => {
  const reservedClass = `${reserved ? 'seat-btn--reserved' : ''}`;

  return (
    <Button
      htmlType='button'
      className={`seat-btn seats__seat-btn ${reservedClass}`}
      key={id}
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
  picked: PropTypes.bool.isRequired,
};

export default SeatButton;
