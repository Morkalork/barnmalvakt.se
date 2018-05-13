import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import {connect} from 'react-redux';
import { App, Article, Responsive } from './grommet-export';
import '../styling/index.scss';
import Top from './Top';
import Bottom from './Bottom';
import { HashRouter as Router, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Order from './pages/Order';
import GeneralFaq from './pages/GeneralFaq';
import Approve from './pages/Approve';
import Approved from './pages/Approved';
import { toggleResponsiveness } from './actions';

ReactGA.initialize('UA-55751818-4');

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
    this.props.dispatch(toggleResponsiveness(e));
  }

  onRouterUpdate() {
    ReactGA.pageview(window.location.hash);
  }

  render() {
    return <Router onUpdate={this.onRouterUpdate}>
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
    </Router>;
  };
}

Root.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object
};

export default connect()(Root);