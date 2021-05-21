import React from 'react';
import PropTypes from 'prop-types';
import './Page2.css';

import { Button } from 'antd';
import SeatsChoicePanel from './SeatsChoicePanel/SeatsChoicePanel';

const Page2 = () => {
  return (
    <div className='seats-choice-container'>
      <SeatsChoicePanel />
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
