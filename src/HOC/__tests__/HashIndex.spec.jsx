import React from 'react';
import { shallow } from 'enzyme';
import hasIndex from '../HasIndex';

describe('HasIndex()', () => {
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

  it(`passes the ${indexPropName} state down as the ${indexPropName} prop`, () => {
    expect(wrapper.prop(indexPropName)).toBe(0);
    wrapper.setState({ index: 1 });
    expect(wrapper.prop(indexPropName)).toBe(1);
  });

  it(`has an ${indexPropName} state of 2 on decrement from 3`, () => {
    wrapper.setState({ index: 3 });
    wrapper.prop('indexDecrement')(3);
    expect(wrapper.state('index')).toBe(2);
  });

  it(`has an ${indexPropName} state of 1 on increment`, () => {
    wrapper.prop('indexIncrement')(3);
    expect(wrapper.state('index')).toBe(1);
  });

  it(`has the max ${indexPropName} state on decrement from 0`, () => {
    wrapper.setState({ index: 0 });
    wrapper.prop('indexDecrement')(3);
    expect(wrapper.state('index')).toBe(2);
  });

  it(`has the min ${indexPropName} state on increment from the max`, () => {
    wrapper.setState({ index: 2 });
    wrapper.prop('indexIncrement')(3);
    expect(wrapper.state('index')).toBe(0);
  });
});
