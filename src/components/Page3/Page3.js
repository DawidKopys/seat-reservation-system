import React from 'react';
import PropTypes from 'prop-types';
import './Page3.css';
import { Typography } from 'antd';
const { Title } = Typography;

const listContent = [
  'rząd x1, miejcse y1 (id1)',
  'rząd x2, miejcse y2 (id2)',
  'rząd x3, miejcse y3 (id3)',
];

const Page3 = (props) => {
  return (
    <div className='summary'>
      <Title level={2} className='summary__title'>
        Twoja rezerwacja przebiegła pomyślnie!
      </Title>

      <p className='summary-list__header'>Wybrałeś miejsca:</p>
      {listContent.map((item) => (
        <li className='summary-list__item'>- {item}</li>
      ))}

      <Title level={4} className='summary__title'>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </Title>
    </div>
  );
};

Page3.propTypes = {};

export default Page3;
