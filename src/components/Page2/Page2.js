import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Page2.css';

import { Button } from 'antd';
import SeatsChoicePanel from './SeatsChoicePanel/SeatsChoicePanel';

const Page2 = ({ nextStep }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeats();
  }, []);

  const getSeats = async () => {
    const response = await fetch('http://localhost:3000/seats');
    const json = await response.json();
    setSeats(json);
    setLoading(false);
  };

  return (
    <div className='seats-choice-container'>
      <SeatsChoicePanel seats={seats} loading={loading} />
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

export default Page2;
