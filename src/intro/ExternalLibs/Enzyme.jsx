import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'
import A from '../../A'

const snippet2 = `import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyComponent from './MyComponent';
import Foo from './Foo';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });

  it('renders an \`.icon-star\`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });
})`

export default function Enzyme(props) {
  return (
    <Fragment>
      <h1>Enzyme</h1>
      <Row>
        <Col md={4}>
          <p>
            <i>(Installed separately)</i>
          </p>
          <p>
            Another popular testing addon is{' '}
            <A href="https://airbnb.io/enzyme/">Enzyme</A>, which can be used
            with Jest to more thoroughly evaluate rendered components.
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet2} />
        </Col>
      </Row>
    </Fragment>
  )
}
