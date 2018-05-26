import React from 'react';
import ReactGA from 'react-ga';
import { Heading, Paragraph, Button } from '../../../grommet-export';
import BlueSection from '../../../BlueSection';
import { injectIntl } from 'react-intl';

const handleOnClick = () => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Clicked order-button'
  });
};

const Order = ({ intl: { formatMessage } }) => {
  return <BlueSection justify='center' align='center' full={true}>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      {formatMessage({id: 'order.how.title'})}
    </Heading>
    <Paragraph size='large'>
      {formatMessage({id: 'order.how.description'})}
    </Paragraph>
    <Paragraph>
      <Button
        label={formatMessage({id: 'order.how.orderButton'})}
        onClick={handleOnClick}
        path='/order'
        primary={true} />
    </Paragraph>
  </BlueSection>;
};

export default injectIntl(Order);