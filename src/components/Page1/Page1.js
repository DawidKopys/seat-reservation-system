import React from 'react';
import PropTypes from 'prop-types';
import './Page1.css';
import { Form, InputNumber, Button, Checkbox } from 'antd';

const Page1 = ({ nextStep }) => {
  const initialValues = {
    seatsNumber: 1,
    adjecentSeats: true,
  };

  return (
    <Form
      className='center-container'
      onFinish={nextStep}
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
};

export default Page1;
