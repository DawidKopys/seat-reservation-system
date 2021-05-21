import React from 'react';
import PropTypes from 'prop-types';
import './Page2.css';
import { seats } from './seats';
import { Button } from 'antd';

const Page2 = (props) => {
  return (
    <div className='seats-choice-container'>
      <div className='seats'>
        {seats.map((seat) => {
          const {
            id,
            cords: { x, y },
            reserved,
          } = seat;
          const reservedClass = `${reserved ? 'seat-btn--reserved' : ''}`;

          return (
            <Button
              htmlType='button'
              className={`seat-btn seats__seat-btn ${reservedClass}`}
              key={id}
              disabled={reserved}
              style={{ gridRow: x + 1, gridColumn: y + 1 }}
            >
              {' '}
            </Button>
          );
        })}
      </div>
      <div className='legend seats-choice-container__legend'>
        <div className='legend__item'>
          <div className={`seat-btn legend__seat-btn`} />
          Miejsca dostępne
        </div>
        <div className='legend__item'>
          <div className={`seat-btn legend__seat-btn seat-btn--reserved`} />
          Miejsca zarezerwowane
        </div>
        <div className='legend__item'>
          <div className={`seat-btn legend__seat-btn seat-btn--chosen`} />
          Twój wybór
        </div>
        <Button htmlType='button' className='legend__confirmation-btn'>
          Rezerwuj
        </Button>
      </div>
    </div>
  );
};

Page2.propTypes = {};

export default Page2;
