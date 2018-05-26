import React from 'react';
import { Section, Heading } from '../../grommet-export';
import Faq1 from './faq-1';
import Faq2 from './faq-2';
import { injectIntl } from 'react-intl';

const GeneralFaq = ({ intl: { formatMessage } }) => {
  return <Section justify='center' align='center' full={{ 'horizontal': true }}>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      {formatMessage({ id: 'faq.title' })}
    </Heading>
    <Faq1 />
    <Faq2 />
  </Section>;
};

export default injectIntl(GeneralFaq);