import React from 'react';
import { Section, Heading, Anchor } from '../../../grommet-export';
import Faq1 from '../../GeneralFaq/faq-1';
import { injectIntl } from 'react-intl';

const Faq = ({ intl: { formatMessage } }) => {
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
    <Anchor
      path='/faq'
      primary={true}
      reverse={true}
      align='center'
      label={formatMessage({ id: 'faq.moreQuestions' })} />
  </Section>;
};

export default injectIntl(Faq);