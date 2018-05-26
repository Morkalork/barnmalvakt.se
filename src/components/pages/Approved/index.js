import React from 'react';
import { Article, Paragraph, Image, Heading } from '../../grommet-export';
import swatImage from '../../../assets/images/swat.jpg';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

const Approved = ({intl: {formatMessage}}) => {
  return <Article margin={{'top': 'large'}} pad='medium'>
    <Heading margin={'large'}>
      <FormattedMessage id='order.approved' />
    </Heading>
    <Paragraph><FormattedMessage id='order.approved.line1' /></Paragraph>
    <Paragraph><FormattedHTMLMessage id='order.approved.line2' /></Paragraph>
    <Paragraph margin={'large'}><FormattedMessage id='order.approved.line3' /></Paragraph>
    <Image src={swatImage}
      alt={formatMessage({id: 'order.approved.image.alt'})}
      caption={formatMessage({id: 'order.approved.image.caption'})} />
  </Article>;
};

export default injectIntl(Approved);