import React, { Component } from 'react';
import { Header, Title, Box, Menu, Anchor } from '../grommet-export';
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
      <Header direction='row'>
        <Title>
          <Anchor path='/'>
            Barnmålvakt
          </Anchor>
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'>
          <Menu icon={<Actions />}
            dropAlign={{ 'right': 'right' }}>
            <Anchor href='#'>Home</Anchor>
            <Anchor href='#/order'>Order</Anchor>
            <Anchor href='#/faq'>General FAQ</Anchor>
          </Menu>
        </Box>
      </Header>
    </Box>
  </WhiteBox>
};

export default Top;