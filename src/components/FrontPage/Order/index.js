import React, { Component } from 'react';
import { Section, Box, Heading, Paragraph, Pulse, Button } from 'grommet';
import { Cart } from 'grommet-icons';
import styled from 'styled-components';
import BlueSection from '../../BlueSection';

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
      Processen är så enkel den kan bli! Tryck på knappen här under så kommer du till vårt beställningsformulär, väl där så väljer du vilket paket du vill ha och hur du vill betala och sen så är det bara att trycka på beställ-knappen så sköter vi resten! Enkelt, va?
    </Paragraph>
    <Paragraph>
      <Button
        label='Beställ!'
        path='/order'
        primary={true} />
    </Paragraph>
  </BlueSection>
};

export default Order;