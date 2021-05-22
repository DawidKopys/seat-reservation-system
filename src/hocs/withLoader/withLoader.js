import React, { Component } from 'react';
import { Spin } from 'antd';
import './withLoader.css';

export const withLoader = (WrappedComponent) => {
  class Loader extends Component {
    render() {
      const { loading, ...props } = this.props;

      return loading ? (
        <div className='loading-indicator-wrapper'>
          <Spin size='large' className='loading-indicator' />
        </div>
      ) : (
        <WrappedComponent {...props} />
      );
    }
  }

  return Loader;
};
