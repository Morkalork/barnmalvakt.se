import React, { Component } from 'react';
import { Header, Title, Box, Menu, Anchor } from 'grommet';
import { Actions } from 'grommet-icons';
import styled from 'styled-components';

const WhiteBox = styled(Box) `
  background-color: #fff;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
`;

const Top = () => {
  return <WhiteBox full={{ 'horizontal': true }} align='center'>
    <Box size='xxlarge'>
      <Header>
        <Title>
          Barnmålvakt
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu icon={<Actions />}
            dropAlign={{ 'right': 'right' }}>
            <Anchor href='#'>Intro</Anchor>
            <Anchor href='#'>Info</Anchor>
            <Anchor href='#'>Into</Anchor>
          </Menu>
        </Box>
      </Header>
    </Box>
  </WhiteBox>
};

export default Top;