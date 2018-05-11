import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Footer, Heading, Paragraph, Box } from '../grommet-export';
import styled from 'styled-components';

const SmallParagraph = styled(Paragraph)`
  max-width: 60%;
`;

const ColoredBox = styled(Footer)`
  background-color: #eaeaea;
`;

const Bottom = ({isMobile}) => {
  return <ColoredBox size='xxlarge' margin={{ 'top': 'large' }} pad='medium'>
    <Footer justify='between'>
        <SmallParagraph size={isMobile ? 'small' : 'medium'} >
          <em>"Ge dig själv kärlek, mera kärlek och ännu mera kärlek så kommer pengarna av sig själv."</em>
          <br />
          <strong> - Okänd barnboksförfattare</strong>
        </SmallParagraph>
      <Box responsive={false}
        align='center'
        pad={{ 'between': 'medium' }}>
        <Paragraph margin='none'>
          © 2018 <a href="http://www.morkalork.com">Morkalork</a>
        </Paragraph>
      </Box>
    </Footer>
  </ColoredBox>
};

Bottom.PropTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default connect((state) => ({
  isMobile: state.root.isMobile
}))(Bottom);