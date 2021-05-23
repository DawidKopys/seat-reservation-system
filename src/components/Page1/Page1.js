import React from 'react';
import PropTypes from 'prop-types';
import './Page1.css';
import { connect } from 'react-redux';
import { setAdjecent, setNumberOfSeats } from '../../redux/seats';

import { Form, InputNumber, Button, Checkbox } from 'antd';

const Page1 = ({ nextStep, setNumberOfSeats, setAdjecent }) => {
  const initialValues = {
    seatsNumber: 1,
    adjecentSeats: true,
  };

  const handleFinish = ({ seatsNumber, adjecentSeats }) => {
    setNumberOfSeats(seatsNumber);
    setAdjecent(adjecentSeats);
    nextStep();
  };

  return (
    <Form
      className='center-container'
      onFinish={handleFinish}
      requiredMark={false}
      initialValues={initialValues}
    >
      <Form.Item
        className='seats-number-container'
        label='Liczba miejsc:'
        name='seatsNumber'
        rules={[
          {
            required: true,
            message: 'Proszę określić liczbę miejsc!',
          },
        ]}
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item name='adjecentSeats' valuePropName='checked'>
        <Checkbox>Czy miejsca mają być obok siebie?</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' block style={{ height: '50px' }}>
          Wybierz miejsca
        </Button>
      </Form.Item>
    </Form>
  );
};

Page1.propTypes = {
  nextStep: PropTypes.func.isRequired,
  setNumberOfSeats: PropTypes.func.isRequired,
  setAdjecent: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setNumberOfSeats,
  setAdjecent,
};

export default connect(null, mapDispatchToProps)(Page1);
