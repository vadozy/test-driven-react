import React from 'react';

export default (Component, indexPropName) => class extends React.PureComponent {
    static displayName = `hasIndex(${Component.displayName || Component.name})`;

    constructor(props) {
      super(props);
      this.state = {
        [indexPropName]: 0,
      };
    }

    handleDecrement = len => {
      this.setState(({ [indexPropName]: i }) => ({
        [indexPropName]: (i - 1 + len) % len,
      }));
    }

    handleIncrement = len => {
      this.setState(({ [indexPropName]: i }) => ({
        [indexPropName]: (i + 1) % len,
      }));
    }

    render() {
      const indexProps = {
        [indexPropName]: this.state[indexPropName],
        [`${indexPropName}Decrement`]: this.handleDecrement,
        [`${indexPropName}Increment`]: this.handleIncrement,
      };
      return <Component {...this.props} {...indexProps} />;
    }
  };
