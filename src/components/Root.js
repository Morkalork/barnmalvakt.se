import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { IntlProvider, addLocaleData } from 'react-intl';
import messagesSV from '../locales/sv.json';
import messagesEN from '../locales/en.json';
import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';
import { connect } from 'react-redux';
import { App, Article, Responsive } from 'grommet';
import '../styling/index.scss';
import Top from './Top';
import Bottom from './Bottom';
import { HashRouter as Router, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Order from './pages/Order';
import GeneralFaq from './pages/GeneralFaq';
import Approve from './pages/Approve';
import Approved from './pages/Approved';
import { toggleResponsiveness, loadLanguage } from './actions';

// Starting important stuff up!
// Google analytics
ReactGA.initialize('UA-55751818-4');

// React Intl (translations)
addLocaleData([...en, ...sv]);
const messages = {
  'en': messagesEN,
  'sv': messagesSV
};

class Root extends Component {
  constructor() {
    super();

    this.onResponsive = this.onResponsive.bind(this);
  }

  componentDidMount() {
    this.responsive = Responsive.start(this.onResponsive);
    this.props.dispatch(loadLanguage());
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
    const language = this.props.lang;

    return <IntlProvider locale={navigator.language} messages={messages[language]}>
      <Router onUpdate={this.onRouterUpdate}>
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
    </IntlProvider>;
  };
}

Root.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object
};

export default connect((state) => {
  return {
    lang: state.root.lang
  };
})(Root);