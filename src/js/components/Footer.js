import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Footer.css';

@CSSModules( style )
export default class Footer extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="footer">
      </div>
    );
  }
}

