import React from 'react';
import { shallow } from 'enzyme';
import hasIndex from '../HasIndex';

describe('hasIndex()', () => {
  const MockComponent = () => null;
  MockComponent.displayName = 'MockComponent';
  const indexPropName = 'index';
  const MockComponentWithIndex = hasIndex(MockComponent, indexPropName);

  it('has the expected displayName', () => {
    expect(MockComponentWithIndex.displayName).toBe('hasIndex(MockComponent)');
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MockComponentWithIndex />);
  });

  it(`has an initial ${indexPropName} state of 0`, () => {
    expect(wrapper.state(indexPropName)).toBe(0);
  });

  it('has initial `index` state equal to the `defaultIndex` prop', () => {
    expect(wrapper.state('index')).toBe(0);
    wrapper.setProps({ [indexPropName]: 1 });
    expect(wrapper.state('index')).toBe(1);
  });

  it('always has `index` state equal to the `index` prop', () => {
    const wrapper2 = shallow(<MockComponentWithIndex index={1} />);
    expect(wrapper2.state('index')).toBe(1);
    wrapper2.setProps({ index: 2 });
    wrapper2.setState({ index: 3 });
    expect(wrapper2.state('index')).toBe(2);
  });

  it('allows `index` state to change if the `index` prop is unset', () => {
    const wrapper2 = shallow(<MockComponentWithIndex index={1} />);
    wrapper2.setProps({ index: undefined });
    wrapper2.setState({ index: 3 });
    expect(wrapper2.state('index')).toBe(3);
  });

  it('calls `onIndexChange` on decrement/increment', () => {
    const onIndexChange = jest.fn();
    wrapper.setProps({ index: 0, onIndexChange });
    wrapper.prop('indexDecrement')(3);
    expect(onIndexChange).toHaveBeenCalledWith({ target: { value: 2 } });
    wrapper.prop('indexIncrement')(3);
    expect(onIndexChange).toHaveBeenCalledWith({ target: { value: 1 } });
  });

  it('passes the `index` state down as the `index` prop', () => {
    expect(wrapper.prop('index')).toBe(0);
    wrapper.setState({ index: 1 });
    expect(wrapper.prop('index')).toBe(1);
  });

  it('has an `index` state of 2 on decrement from 3', () => {
    wrapper.setState({ index: 3 });
    wrapper.prop('indexDecrement')(3);
    expect(wrapper.state('index')).toBe(2);
  });

  it('has an `index` state of 1 on increment', () => {
    wrapper.prop('indexIncrement')(3);
    expect(wrapper.state('index')).toBe(1);
  });

  it('has the max `index` state on decrement from 0', () => {
    wrapper.setState({ index: 0 });
    wrapper.prop('indexDecrement')(3);
    expect(wrapper.state('index')).toBe(2);
  });

  it('has the min `index` state on increment from the max', () => {
    wrapper.setState({ index: 2 });
    wrapper.prop('indexIncrement')(3);
    expect(wrapper.state('index')).toBe(0);
  });
});
