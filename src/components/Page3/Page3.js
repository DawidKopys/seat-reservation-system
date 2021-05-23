import React from 'react';
import PropTypes from 'prop-types';
import './Page3.css';
import { connect } from 'react-redux';

import { Typography } from 'antd';
const { Title } = Typography;

const Page3 = ({ selectedSeats }) => {
  return (
    <div className='summary'>
      <Title level={2} className='summary__title'>
        Twoja rezerwacja przebiegła pomyślnie!
      </Title>

      <p className='summary-list__header'>Wybrałeś miejsca:</p>
      {selectedSeats.map((seat) => (
        <li key={seat.id} className='summary-list__item'>
          {`- rząd ${seat.row}, miejsce ${seat.col} (${seat.id})`}
        </li>
      ))}

      <Title level={4} className='summary__title'>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </Title>
    </div>
  );
};

Page3.propTypes = {
  selectedSeats: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeats: state.selectedSeats,
});

export default connect(mapStateToProps, null)(Page3);
