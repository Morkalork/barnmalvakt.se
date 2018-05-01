import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Heading, Paragraph, Article, Box, Button } from '../grommet-export';
import { connect } from 'react-redux';

const Approve = ({
  selectedPackage,
  invoicing,
  name,
  surname,
  email,
  childsName,
  childsAge,
  childsMiddleName,
  childsSimpleIllness,
  childsDifficultIllness,
  childsAccident }) => {
  const itemsToApprove = [
    { key: 'Namn', val: name },
    { key: 'Efternamn', val: surname },
    { key: 'E-post', val: email },
    { key: 'Barnets namn', val: childsName },
    { key: 'Barnets ålder', val: childsAge },
    { key: 'Enklare sjukdom', val: childsSimpleIllness },
    { key: 'Svårare sjukdom', val: childsDifficultIllness },
    { key: 'Olycksdatum', val: childsAccident }
  ];

  return <Article>
    <Heading margin={'large'}>
      Godkänn och betala!
    </Heading>
    <Paragraph>Tack för att du valt att använda dig av vår tjänst! Vi tror att du kommer att bli jättenöjd med ditt paket ({selectedPackage})!</Paragraph>
    <Paragraph>Titta igenom uppgifterna ytterligare en gång här under och tryck sedan godkänn så kommer ett e-mail med faktura att skickas ut till dig!</Paragraph>
    <List>
      {itemsToApprove.map((item, index) =>
        <ListItem justify='between' separator='horizontal' key={index}>
          <span>{item.key}</span>
          <span className='secondary'>{item.val}</span>
        </ListItem>
      )}
    </List>
    <Paragraph margin={'large'}>Om allt ser bra ut så var välj knappen 'Bekräfta', annars gå tillbaka och gör de ändringar du behöver!</Paragraph>
    <Box flex={true}
      direction='row'
      justify='between'>
        <Button label='Tillbaks...'
          path='/Order'
          secondary={true} />
        <Button label='Godkänn!'
          path='/Approved'
          primary={true} />  
      </Box>
  </Article>
};

Approve.propTypes = {
  selectedPackage: PropTypes.string.isRequired,
  invoicing: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  childsName: PropTypes.string.isRequired,
  childsAge: PropTypes.number.isRequired,
  childsMiddleName: PropTypes.string,
  childsSimpleIllness: PropTypes.string,
  childsDifficultIllness: PropTypes.string,
  childsAccident: PropTypes.string
};

Approve.defaultProps = {
  selectedPackage: 'Standard',
  invoicing: 'Yearly',
  name: 'Geoff',
  surname: 'Pontsy',
  email: 'Yeff@heffheff.keff',
  childsName: 'Barney',
  childsAge: 3
};

export default connect((state) => {
  if (!state.form || !state.form.order) {
    return {};
  }

  const order = state.form.order;

  return {
    selectedPackage: order.values.package.label,
    invoicing: order.values.invoicing,
    name: order.values.name
  };
})(Approve);