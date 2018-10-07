import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('Page: Home', () => {
  let wrapper;
  let setDataSpy;
  const sandbox = sinon.createSandbox();
  const defaultProps = {
    count: 10,
    list: [],
    setData: () => {},
    changeCount: () => {},
  };

  afterEach(() => {
    sandbox.restore();
  });

  beforeEach(() => {
    setDataSpy = sandbox.spy(defaultProps, 'setData');
    wrapper = shallow(<Home {...defaultProps} />);
  });

  it('renders <Home /> page', () => {
    setDataSpy.should.not.have.been.called;
    wrapper.find('h4').should.have.length(1);
  });
});
