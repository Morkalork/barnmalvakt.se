import React from 'react';
import { Section, Heading } from '../../grommet-export';
import Faq1 from './faq-1';
import Faq2 from './faq-2';

const GeneralFaq = () => {
  return <Section justify='center' align='center' full={{ 'horizontal': true }}>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      Frågor &amp; Svar
    </Heading>
    <Faq1 />
    <Faq2 />
  </Section>;
};

export default GeneralFaq;