import React from 'react';
import PropTypes from 'prop-types';

const capitalize = word => `${word[0].toUpperCase()}${word.slice(1)}`;

export default (Component, indexPropName) => {
  const defaultIndexPropName = `default${capitalize(indexPropName)}`;

  return class extends React.PureComponent {
    static displayName = `hasIndex(${Component.displayName || Component.name})`;

    static propTypes = {
      [indexPropName]: PropTypes.number,
      [defaultIndexPropName]: PropTypes.number,
      onIndexChange: PropTypes.func,
    };

    static defaultProps = {
      [defaultIndexPropName]: 0,
    };

    constructor(props) {
      super(props);
      this.state = {
        [indexPropName]: props[defaultIndexPropName],
      };
    }

    static getDerivedStateFromProps(props, state) {
      if (
        props[indexPropName] != null &&
        props[indexPropName] !== state[indexPropName]
      ) {
        return { [indexPropName]: props[indexPropName] };
      }
      return null;
    }

    handleDecrement = len => {
      const { onIndexChange } = this.props;
      this.setState(({ [indexPropName]: i }) => {
        const newIndex = (i - 1 + len) % len;
        if (onIndexChange) {
          onIndexChange({ target: { value: newIndex } });
          return {}; // no change
        } else {
          return {
            [indexPropName]: newIndex,
          };
        }
      });
    };

    handleIncrement = len => {
      const { onIndexChange } = this.props;
      this.setState(({ [indexPropName]: i }) => {
        const newIndex = (i + 1) % len;
        if (onIndexChange) {
          onIndexChange({ target: { value: newIndex } });
          return {}; // no change
        } else {
          return {
            [indexPropName]: newIndex,
          };
        }
      });
    };

    render() {
      const {
        [defaultIndexPropName]: _defaultIndexProp,
        ...rest
      } = this.props;

      const indexProps = {
        [indexPropName]: this.state[indexPropName],
        [`${indexPropName}Decrement`]: this.handleDecrement,
        [`${indexPropName}Increment`]: this.handleIncrement,
      };
      return <Component {...rest} {...indexProps} />;
    }
  };
};
