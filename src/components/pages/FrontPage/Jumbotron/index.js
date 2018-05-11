import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Section, Heading, Box, Paragraph } from '../../../grommet-export';
import styled from 'styled-components';
import BackgroundImage from '../../../../assets/images/jumbotron.jpg';
import BackgroundImageMobile from '../../../../assets/images/jumbotron_mobile.jpg';

const WhiteBox = styled(Box) `
  background-color: rgba(255, 255, 255, 0.75);
`;

const TopBox = styled(Box) `
  margin-top: 10rem;
  margin-right: 5rem;
`;

const getStyledSection = (isMobile) => styled(Section) `
  background-image: url(${isMobile ? BackgroundImageMobile : BackgroundImage});
  background-size: cover;
  background-position: center center;
`;

const Jumbotron = ({ isMobile }) => {
  const StyledSection = getStyledSection(isMobile);

  return <StyledSection
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
      <Box flex={true} justify='between' align='center'>
        <Heading
          align='start'
          strong={true}
          tag='h1'
          margin='medium'
          uppercase={true}>
          barnmalvakt.se
        </Heading>
        <Heading
          tag='h5'
          uppercase={true}>
          <em>"I en värld av Fake News, ha en Fake Family"</em>
        </Heading>
      </Box>
    </WhiteBox>
  </StyledSection>
};

Jumbotron.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default connect((state) => ({
  isMobile: state.root.isMobile
}))(Jumbotron);