import React from 'react';
import PropTypes from 'prop-types';
import './SeatsGrid.css';
import { connect } from 'react-redux';

import SeatButton from '../SeatButton/SeatButton';
import { withLoader } from '../../../hocs/withLoader/withLoader';

const SeatsGrid = ({ seats }) => {
  return (
    <div className='seats'>
      {seats.map((seat) => {
        const {
          id,
          cords: { x, y },
          reserved,
        } = seat;

        return (
          <SeatButton
            key={id}
            id={id}
            row={x + 1}
            col={y + 1}
            reserved={reserved}
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
