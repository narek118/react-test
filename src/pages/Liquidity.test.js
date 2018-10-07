import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Liquidity } from './Liquidity';

describe('Page: Liquidity', () => {
  let wrapper;
  let setDataSpy;
  const sandbox = sinon.createSandbox();
  const defaultProps = {
    count: 10,
    list: [],
    setData: () => {},
  };

  afterEach(() => {
    sandbox.restore();
  });

  beforeEach(() => {
    setDataSpy = sandbox.spy(defaultProps, 'setData');
    wrapper = shallow(<Liquidity {...defaultProps} />);
  });

  it('renders <Liquidity /> page', () => {
    setDataSpy.should.not.have.been.called;
    wrapper.find('h4').should.have.length(1);
  });
});
