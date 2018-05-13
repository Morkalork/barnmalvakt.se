import React from 'react';
import ReactGA from 'react-ga';
import { Heading, Paragraph, Button } from '../../../grommet-export';
import BlueSection from '../../../BlueSection';

const handleOnClick = () => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Clicked order-button'
  });
};

const Order = () => {
  return <BlueSection justify='center' align='center' full={true}>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      Hur går jag tillväga?
    </Heading>
    <Paragraph size='large'>
      Processen är så enkel den kan bli! Tryck på knappen här under så kommer du till vårt beställningsformulär. Väl där väljer du vilket paket du vill ha och hur du vill betala och sen är det bara att trycka på beställ-knappen så sköter vi resten! Enkelt, inte sant?
    </Paragraph>
    <Paragraph>
      <Button
        label='Beställ!'
        onClick={handleOnClick}
        path='/order'
        primary={true} />
    </Paragraph>
  </BlueSection>;
};

export default Order;