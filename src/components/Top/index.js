import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { Header, Title, Box, Anchor, Image } from '../grommet-export';
import styled from 'styled-components';
import flagEn from '../../assets/icons/uk.png';
import flagSv from '../../assets/icons/sv.png';
import { setLanguage } from '../actions';

const WhiteBox = styled(Box)`
  background-color: #fff;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
`;

const LangImg = styled(Image)`
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

// Language icons from https://www.iconfinder.com/iconsets/ensign-11
const Top = ({ dispatch, intl: { formatMessage } }) => {
  return <WhiteBox full={{ 'horizontal': true }} align='center'>
    <Box size='xxlarge' direction='row' justify='center'>
      <Header direction='row' justify='center'>
        <Title>
          <Anchor path='/'>
            {formatMessage({ id: 'Title' })}
          </Anchor>
        </Title>
      </Header>
      <Box direction='row' alignContent='between'>
        <Box margin='small'>
          <LangImg src={flagEn}
            alt='English language'
            title='Switch to English language'
            onClick={() => dispatch(setLanguage('en'))}
            size='thumb' />
        </Box>
        <Box margin='small'>
          <LangImg src={flagSv}
            alt='Svenskt språk'
            title='Byt till Svenska'
            onClick={() => dispatch(setLanguage('sv'))}
            size='thumb' />
        </Box>
      </Box>
    </Box>

  </WhiteBox>;
};

Top.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(connect()(Top));