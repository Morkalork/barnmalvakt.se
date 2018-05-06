import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { App, Article, Responsive } from './grommet-export';
import '../../node_modules/grommet-css';
import Top from './Top';
import Bottom from './Bottom';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Order from './pages/Order';
import Faq from './pages/FrontPage/Faq';
import GeneralFaq from './pages/GeneralFaq';
import Approve from './pages/Approve';
import Approved from './pages/Approved';

class Root extends Component {
  constructor() {
    super();

    this.onResponsive = this.onResponsive.bind(this);
  }

  componentDidMount() {
    this.responsive = Responsive.start(this.onResponsive);
  }

  componentWillUnmount() {
    this.responsive.stop();
  }

  onResponsive(e) {
    console.log('E: ', e);
  }

  render() {
    return <Router>
      <App centered={false}>
        <Article justify='center' align='center'>
          <Top />
          <Route exact path='/' component={FrontPage} />
          <Route path='/order' component={Order} />
          <Route path='/faq' component={GeneralFaq} />
          <Route path='/approve' component={Approve} />
          <Route path='/approved' component={Approved} />
          <Bottom />
        </Article>
      </App>
    </Router>
  };
}

Root.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object
};

export default Root;