import React from 'react';
import { Box, Card } from '../../../grommet-export';
import LawImage from '../../../../assets/images/law.jpg';
import SchoolImage from '../../../../assets/images/school.jpg';
import SocialImage from '../../../../assets/images/social-media.jpg';

const Faq1 = () => {
  return <Box flex={true}
    align='start'
    direction='row'
    wrap={true}
    justify='center'>
    <Card thumbnail={LawImage}
      margin='medium'
      label='Juridiskt'
      heading='Är detta lagligt?'
      description='Självklart känner vi att det är så. Olagligt är det som kan bestraffas, och det finns inte ett enda fall av barnmålvakter som lett till dom.*' />
    <Card thumbnail={SchoolImage}
      margin='medium'
      label='Ålder'
      heading='Kommer mitt barn åldras?'
      description='Från registreringstillfället kommer barnet att åldras i normal takt. Det innebär bl.a. att du kommer att behöva tilläggstjänsten "Skolmålvakt" från och med 7 års ålder.' />
    <Card thumbnail={SocialImage}
      margin='medium'
      label='Socialt'
      heading='Får jag fina bilder att dela?'
      description='Tilläggstjänsten "Facebook Family" genererar bildpaket från semestrar, resor och andra events som du kan dela i sociala medier.' />
  </Box>;
};

export default Faq1;