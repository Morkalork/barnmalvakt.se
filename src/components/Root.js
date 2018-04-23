import React, { Component } from 'react';
import { App, Article, Footer, Section, Heading, Box, Paragraph } from 'grommet';
import '../../node_modules/grommet-css';
import Top from './Top';
import Bottom from './Bottom';
import FrontPage from './FrontPage';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/jumbotron.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Order from './Order';
import Faq from './FrontPage/Faq';
import GeneralFaq from './GeneralFaq';

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
                <em>"I en värd av Fake News, ha en Fake Family"</em>
              </Heading>
            </Box>
          </WhiteBox>
        </Jumbotron>
        <Route exact path="/" component={FrontPage} />
        <Route path="/order" component={Order} />
        <Route path="/faq" component={GeneralFaq} />
        <Bottom />
      </Article>
    </App>
  </Router>
};

export default Root;