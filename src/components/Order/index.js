import React, { Component } from 'react';
import { Section, Box, List, ListItem, Pulse, Heading, Paragraph } from 'grommet';
import FormCheckmarkIcon from 'grommet/components/icons/base/FormCheckmark';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';
import styled from 'styled-components';

const CheckMark = styled(FormCheckmarkIcon) `
  stroke: #32CD32;
`;
const CloseMark = styled(FormCloseIcon) `
stroke: #DB2525;
`;

const headers = ['Basic', 'Standard', 'Premium'];

const featureList = [
  { label: 'Födelsebevis', level: 1 },
  { label: 'Välja namn', level: 1 },
  { label: 'Välja blodgrupp', level: 1 },
  { label: 'Bilder från födsel', level: 1 },
  { label: '10 st bebis-bilder*', level: 1 },
  { label: '3 st anekdoter', level: 1 },
  { label: 'Välja mellannamn', level: 2 },
  { label: 'Förskoleplats', level: 2 },
  { label: 'Skolmålvakt', level: 2 },
  { label: 'Enkla sjukdomar', level: 2 },
  { label: 'Kroniska jukdomar', level: 3 },
  { label: 'Lånebarn, 3 tillfällen', level: 3 },
  { label: '"Facebook Family"', level: 3 },
  { label: 'Olycka', level: 3 },
];

const price = [500, 2000, 5000];

const Order = () => {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    const box = <Box key={i} margin='medium'>
      <Heading
        tag='h3'
        align='center'
        uppercase={true}
        strong={true}>
        {headers[i]}
      </Heading>
      <List>
        {featureList.map((feature, index) => {
          return <ListItem justify='between' separator='horizontal' key={index}>
            <span>{feature.label}</span>
            <span>{feature.level <= (i + 1) ? <CheckMark /> : <CloseMark />}</span>
          </ListItem>
        })}
      </List>
      <Paragraph>{price[i]}kr/mån</Paragraph>
    </Box>;
    boxes.push(box);
  }

  return <Section flex={true} justify='center' align='center' alignContent='between' direction='row'>
    {boxes}
  </Section>
};

export default Order;