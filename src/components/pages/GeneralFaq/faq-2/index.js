import React, { Component } from 'react';
import { Section, Box, Heading, Paragraph, Card, Anchor } from '../../../grommet-export';
import SickImage from '../../../../assets/images/sick.jpg';
import AccidentImage from '../../../../assets/images/accident.jpg';
import ChildImage from '../../../../assets/images/child.jpg';

const Faq2 = () => {
  return <Box flex={true}
    direction='row'
    align='start'
    justify='center'>
    <Card thumbnail={SickImage}
      margin='medium'
      label='Sjukdom'
      heading='Hur mycket kan jag vabba?'
      description='Det är såklart upp till dig själv, vissa föräldrar vabbar i flera månader, vissa vabbar nästan aldrig. Känn efter själv kanske?' />
    <Card thumbnail={AccidentImage}
      margin='medium'
      label='Olyckor'
      heading='Vilken typ av olyckor finns?'
      description='Vi lottar ut olyckor om du köper det paketet, men det kan vara brutet ben, föll i grillen, påkörd av en statssubventionerad el-cykel osv.' />
    <Card thumbnail={ChildImage}
      margin='medium'
      label='Utseende'
      heading='Jag vill inte ha en ful unge!'
      description='Självklart är alla våra barn söta och underbara, detta är ingen hemsk tjänst. Vi garanterar att du kommer att bli nöjd!' />
  </Box>
};

export default Faq2;