import React, { Component } from 'react';
import { Section, Box, Heading, Paragraph, Button } from '../grommet-export';
import { Cart } from 'grommet-icons';
import styled from 'styled-components';
import BlueBackgroundImage from '../../assets/images/blue-background.png';

const ColoredSection = styled(Section) `
  background-color: #D1F4FF;
  background-image: url(${BlueBackgroundImage});
  background-position: right 4px bottom 4px;
  background-repeat: no-repeat;
  background-size: 120px 116px;
  height: auto;
  min-height: 100vh;
  max-height: none;
`;

const BlueSection = ({children}) => {
  return <ColoredSection justify='center' align='center' full={true}>
    <Box 
      size='xxlarge' 
      flex={true}
      justify='center'
      align='center'>
      {children}
    </Box>
  </ColoredSection>
};

export default BlueSection;