import React, { Component } from 'react';
import { App, Article, Footer, Section, Heading, Box, Paragraph } from './grommet-export';
import '../../node_modules/grommet-css';
import Top from './Top';
import Bottom from './Bottom';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/jumbotron.jpg';
import { HashRouter  as Router, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Order from './pages/Order';
import Faq from './pages/FrontPage/Faq';
import GeneralFaq from './pages/GeneralFaq';
import Approve from './pages/Approve';
import Approved from './pages/Approved';

const Jumbotron = styled(Section) `
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
`;

const WhiteBox = styled(Box) `
  background-color: rgba(255, 255, 255, 0.75);
`;

const TopBox = styled(Box) `
  margin-top: 10rem;
  margin-right: 5rem;
`;

const Root = () => {
  return <Router>
    <App centered={false}>
      <Article justify='center' align='center'>
        <Top />
        <Jumbotron
          full={true}
          justify='between'>
          <TopBox margin={{ 'vertical': 'large' }}>
            <Heading
              tag='h3'
              align='end'>
              För en ekonomisk jämställdhet...
          </Heading>
          </TopBox>
          <WhiteBox
            pad={{ 'horizontal': 'medium' }}>
            <Box flex={true} direction='row' justify='between' align='center'>
              <Heading
                align='start'
                strong={true}
                tag='h1'
                margin='medium'
                uppercase={true}>
                barnmalvakt.se
            </Heading>
              <Heading
                tag='h3'
                uppercase={true}>
                <em>"I en värld av Fake News, ha en Fake Family"</em>
              </Heading>
            </Box>
          </WhiteBox>
        </Jumbotron>
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

export default Root;