import React, { Component } from 'react';
import { Footer, Title, Paragraph, Box } from '../grommet-export';


const Bottom = () => {
  return <Box size='xxlarge' margin={{'top': 'large'}}>
    <Footer justify='between'>
      <Title>
        barnmalvakt.se
    </Title>
      <Box responsive={false}
        align='center'
        pad={{ 'between': 'medium' }}>
        <Paragraph margin='none'>
          © 2018 <a href="http://www.morkalork.com">Morkalork</a>
        </Paragraph>
      </Box>
    </Footer>
  </Box>
};

export default Bottom;