import React from 'react';
import CSSModules from 'react-css-modules';
import style from './Main.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Contents from './Contents/Contents';
import Footer from './Footer';

@CSSModules( style )
export default class Main extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div styleName="main">
        <div styleName="wrapper">
          <Header />
          <Contents />
          <Footer />
        </div>
      </div>
    );
  }
}

