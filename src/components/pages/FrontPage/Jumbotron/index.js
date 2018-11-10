import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Section, Heading, Box } from 'grommet';
import styled from 'styled-components';
import BackgroundImage from '../../../../assets/images/jumbotron.jpg';
import BackgroundImageMobile from '../../../../assets/images/jumbotron_mobile.jpg';

const WhiteBox = styled(Box)`
  background-color: rgba(255, 255, 255, 0.75);
`;

const TopBox = styled(Box)`
  margin-top: 10rem;
  margin-right: 5rem;
`;

const getStyledSection = (isMobile) => styled(Section)`
  background-image: url(${isMobile ? BackgroundImageMobile : BackgroundImage});
  background-size: cover;
  background-position: center center;
`;

const Jumbotron = ({ isMobile, intl: { formatMessage } }) => {
  const StyledSection = getStyledSection(isMobile);

  return <StyledSection
    full={true}
    justify='between'>
    <TopBox margin={{ 'vertical': 'large' }}>
      <Heading
        tag='h3'
        align='end'>
        <FormattedMessage id='frontpage.mainHeader' />
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
          <FormattedMessage id='frontpage.url' />
        </Heading>
        <Heading
          tag='h5'
          uppercase={true}>
          <FormattedMessage id='frontpage.tagLine' />
        </Heading>
      </Box>
    </WhiteBox>
  </StyledSection>;
};

Jumbotron.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default injectIntl(connect((state) => ({
  isMobile: state.root.isMobile
}))(Jumbotron));