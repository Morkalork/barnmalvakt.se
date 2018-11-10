import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Section, Heading, Paragraph } from 'grommet';

const MyRights = ({ intl: { formatMessage } }) => {
  return <Section justify='center' align='center' full={true} pad='small'>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      <FormattedMessage id='myrights.header' />
    </Heading>
    <Paragraph size='medium' align='center'>
      <FormattedMessage id='myrights.line1' />
    </Paragraph>
    <Paragraph size='medium' align='center'>
      <FormattedMessage
        id='myrights.line2'
        values={{
          linkedInMessage: <em>
            <FormattedMessage id='myrights.line2.linkedInMessage' />
          </em>
        }} />
    </Paragraph>
    <Paragraph size='medium' align='center'>
      <FormattedMessage
        id='myrights.line3'
        values={{
          taxMoney: <em>
            <FormattedMessage id='myrights.line3.taxMoney' />
          </em>
        }} />
    </Paragraph>
  </Section>;
};

export default injectIntl(MyRights);