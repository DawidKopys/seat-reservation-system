import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Page2.css';
import { connect } from 'react-redux';
import { getSeats } from '../../redux/seats';

import { Button } from 'antd';
import SeatsGrid from './SeatsGrid/SeatsGrid';

const Page2 = ({ nextStep, getSeats }) => {
  useEffect(() => {
    getSeats();
  }, [getSeats]);

  return (
    <div className='seats-panel'>
      <div className='seats-grid-wrapper'>
        <SeatsGrid />
      </div>
      <div className='legend seats-panel__legend'>
        <div className='legend__item'>
          <div className={`seat-btn legend__seat-btn`} />
          Miejsca dostępne
        </div>
        <div className='legend__item'>
          <div className={`seat-btn legend__seat-btn seat-btn--reserved`} />
          Miejsca zarezerwowane
        </div>
        <div className='legend__item'>
          <div className={`seat-btn legend__seat-btn seat-btn--selected`} />
          Twój wybór
        </div>
        <Button
          htmlType='button'
          className='legend__confirmation-btn'
          onClick={nextStep}
        >
          Rezerwuj
        </Button>
      </div>
    </div>
  );
};

Page2.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getSeats };

export default connect(null, mapDispatchToProps)(Page2);
