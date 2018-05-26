import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Footer, Paragraph, Box } from '../grommet-export';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const SmallParagraph = styled(Paragraph)`
  max-width: 60%;
`;

const ColoredBox = styled(Footer)`
  background-color: #eaeaea;
`;

const Bottom = ({ isMobile, intl: { formatMessage } }) => {
  return <ColoredBox size='xxlarge' margin={{ 'top': 'large' }} pad='medium'>
    <Footer justify='between'>
      <SmallParagraph size={isMobile ? 'small' : 'medium'} >
        <em>{formatMessage({ id: 'footer.quote' })}</em>
        <br />
        <strong> - {formatMessage({ id: 'footer.quotee' })}</strong>
      </SmallParagraph>
      <Box responsive={false}
        align='start'>
        <Paragraph margin='none'>
          © 2018 <a href="http://www.morkalork.com">Morkalork</a>
        </Paragraph>
        <Paragraph margin='none'>
          {formatMessage({ id: 'footer.sourceCode' })} <a href="https://github.com/Morkalork/barnmalvakt.se">GitHub</a>!
        </Paragraph>
      </Box>
    </Footer>
  </ColoredBox>;
};

Bottom.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default injectIntl(connect((state) => ({
  isMobile: state.root.isMobile
}))(Bottom));