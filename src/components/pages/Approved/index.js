import React from 'react';
import { Article, Paragraph, Image, Heading } from '../../grommet-export';
import swatImage from '../../../assets/images/swat.jpg';

const Approved = () => {
  return <Article margin={{'top': 'large'}} pad='medium'>
    <Heading margin={'large'}>
      Färdig!
    </Heading>
    <Paragraph>Tack för att du har gjort en beställning! Du kommer inte att ångra det, förutom att vi nu skickat dina uppgifter till Skatteverket!</Paragraph>
    <Paragraph>Vi har använt en jättestor sattelit för att spåra dig och för att underlätta för <b>S</b>katte<b>W</b>erkets <b>A</b>nhållnings<b>T</b>orpeder att hitta dig, det är bara att sitta ner och vänta! </Paragraph>
    <Paragraph margin={'large'}>Om det knackar så behöver du inte ens öppna...</Paragraph>
    <Image src={swatImage}
      alt='You can expect a visit soon!'
      caption='Staten är din vän!' />
  </Article>;
};

export default (Approved);