import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import JsxCode from '../../lib/JsxCode'
import A from '../../A'

const snippet1 = `import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};`

export default function Bootstrap(props) {
  return (
    <Fragment>
      <h1>Bootstrap</h1>
      <Row>
        <Col md={5}>
          <p>
            <i>(Installed separately)</i>
          </p>
          <p>
            <A href="https://getbootstrap.com/">Bootstrap</A> is a popular
            library for creating responsive, mobile-friendly web sites with nice
            styling out of the box. You can use bootstrap by itself, or by using{' '}
            <A href="https://reactstrap.github.io/">Reactstrap</A>, which
            provides bindings for React.
            <br />
            <code>npm i --save bootstrap reactstrap</code>
          </p>
        </Col>
        <Col md={6}>
          <JsxCode code={snippet1} />
        </Col>
      </Row>
    </Fragment>
  )
}
