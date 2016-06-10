import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Main.css';
import { Button } from 'react-bootstrap';

@CSSModules( style )
export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="main">
        <Button bsStyle="info">hoge</Button>
      </div>
    );
  }
}

