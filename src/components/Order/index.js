import React, { Component } from 'react';
import { Section, Box, List, ListItem, Heading, Paragraph, Article } from '../grommet-export';
import FormCheckmarkIcon from 'grommet/components/icons/base/FormCheckmark';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';
import styled from 'styled-components';
import OrderForm from './OrderForm';

const CheckMark = styled(FormCheckmarkIcon) `
  stroke: #32CD32;
`;
const CloseMark = styled(FormCloseIcon) `
stroke: #DB2525;
`;

const headers = ['Basic', 'Standard', 'Premium'];

const featureList = [
  { label: 'Födelsebevis', level: 1, title: 'Vi registrerar ett födelsebevis hos skatteverket och skickar dig orginalet.' },
  { label: 'Välja namn', level: 1, title: 'Så länge ditt val av namn överensstämmer med skatteverkets regler så får du välja namn fritt.' },
  { label: 'Välja blodgrupp', level: 1, title: 'Välj mellan 0, A, B eller den fräsiga AB.' },
  { label: 'Bilder från födsel', level: 1, title: 'Vi sänder över 3 bilder från födseln, professionellt fejkade.' },
  { label: '10 st bebis-bilder', level: 1, title: 'Beroende på vald ålder så genererar vi 10 st bilder från födsel upp till nuvarande ålder.' },
  { label: '3 st anekdoter', level: 1, title: 'Kul anekdoter att berätta om att ni födde i bilen, fick reda på graviditeten så sent som i 6:e månaden eller varför inte den klassiska "de blandade ihop barnen på BB, vi hoppas det blev rätt, haha!"' },
  { label: 'Välja mellannamn', level: 2, title:'Samma regler gäller som med namn, skatteverket ska godkänna det.' },
  { label: 'Förskoleplats', level: 2, title:'Vi har samarbete med över 40 förskolor i landet för fejkade platser och skolorna kommer att svara på förfrågningar om barnet om så behövs.' },
  { label: 'Skolmålvakt', level: 2, title:'Vi har riktiga barn i skolan som kommer att agera målvakt för ditt barn (utan vetskap, ingen skadas av det) vilket innebär att du kan vabba när de är sjukregisterade.' },
  { label: 'Enkla sjukdomar', level: 2, title: 'Vill du att ditt barn ska ha någon kul sjukdom som mässlingen eller röda hund? Enklare sjukdomar kan beställas upp till två gånger i månaden.'},
  { label: 'Kroniska jukdomar', level: 3, title: 'Ulcerös Kolit? Reumatism? Kronisk Bronkit? Vad du än är ute efter så har din unge det om du beställer det!' },
  { label: 'Lånebarn, 3 tillfällen', level: 3, title: 'Låna ett barn att ta med till jobbet eller vännerna för att visa upp. Max 6 timmar per tillfälle.' },
  { label: '"Facebook Family"', level: 3, title: 'Få speciellt genererade bilder med dig och barnet tillsammans i Thailand, Ishotellet i Jukkasjärvi eller varför inte på en valsafari i Polen? Dela som en galning!' },
  { label: 'Olycka', level: 3, title: 'Ha en olycka med barnet, brutet ben, påkörd av en bil eller nafsad av en bäver, vi fejkar intygen!' },
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
            <span title={feature.title}>{feature.label}</span>
            <span>{feature.level <= (i + 1) ? <CheckMark /> : <CloseMark />}</span>
          </ListItem>
        })}
      </List>
      <Paragraph>{price[i]}kr/mån</Paragraph>
    </Box>;
    boxes.push(box);
  }

  return <Article>
    <Section flex={true} justify='center' align='center' alignContent='between' direction='row'>
      {boxes}
    </Section>
    <Section flex={true} justify='center' align='center' alignContent='between' direction='row'>
      <OrderForm />
    </Section>
  </Article>
};

export default Order;