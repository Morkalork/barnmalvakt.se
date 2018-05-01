import React, { Component } from 'react';
import { Section, Heading, Anchor } from '../../../grommet-export';
import Faq1 from '../../GeneralFaq/faq-1';

const Faq = () => {
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
    <Anchor
      path='/faq'
      primary={true}
      reverse={true}
      align='center'
      label='Undrar du över något mer?' />
  </Section>
};

export default Faq;