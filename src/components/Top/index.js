import React from 'react';
import { Header, Title, Box, Anchor } from '../grommet-export';
import styled from 'styled-components';

const WhiteBox = styled(Box)`
  background-color: #fff;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
`;

const Top = () => {
  return <WhiteBox full={{ 'horizontal': true }} align='center'>
    <Box size='xxlarge'>
      <Header direction='row' justify='center'>
        <Title>
          <Anchor path='/'>
            Barnmålvakt.se
          </Anchor>
        </Title>
      </Header>
    </Box>
  </WhiteBox>;
};

export default Top;