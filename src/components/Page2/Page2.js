import React from 'react';
import PropTypes from 'prop-types';
import './Page2.css';
import { seats } from './seats';
import { Button } from 'antd';

const Page2 = (props) => {
  return (
    <div className='seats'>
      {seats.map((seat) => {
        const {
          id,
          cords: { x, y },
          reserved,
        } = seat;
        const reservedClass = `${reserved ? 'seats__seat-btn--reserved' : ''}`;

        return (
          <button
            className={`btn seats__seat-btn ${reservedClass}`}
            key={id}
            disabled={reserved}
            style={{ gridRow: x + 1, gridColumn: y + 1 }}
          ></button>
        );
      })}
    </div>
  );
};

Page2.propTypes = {};

export default Page2;
