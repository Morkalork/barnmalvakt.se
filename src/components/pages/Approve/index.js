import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { List, ListItem, Heading, Paragraph, Article, Box, Button } from 'grommet';
import { connect } from 'react-redux';
import ScrollToTop from '../../ScrollToTop';
import { FormattedMessage } from 'react-intl';

const handleOnApproveClick = () => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Clicked approved-button'
  });
};

const handleOnCancelClick = () => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Clicked cancel order-button'
  });
};

const Approve = ({
  selectedPackage,
  invoicing,
  name,
  surname,
  email,
  childsName,
  childsBloodType,
  childsAge,
  childsMiddleName,
  childsSimpleIllness,
  childsDifficultIllness,
  childsAccident }) => {
  const itemsToApprove = [
    { key: 'order.form.firstname', val: name },
    { key: 'order.form.surname', val: surname },
    { key: 'order.form.email', val: email },
    { key: 'order.form.child.firstname', val: childsName },
    { key: 'order.form.child.bloodType', val: childsBloodType },
    { key: 'order.form.child.age', val: childsAge },
    { key: 'order.form.child.simpleIllness', val: childsSimpleIllness },
    { key: 'order.form.child.difficultIllness', val: childsDifficultIllness },
    { key: 'order.form.child.accident', val: childsAccident }
  ];

  return <Article margin={{ 'top': 'large' }} pad='medium'>
    <ScrollToTop>
      <Heading margin={'large'}>
        <FormattedMessage id='order.approve' />
      </Heading>
      <Paragraph><FormattedMessage id='order.approve.line1' /> ({selectedPackage})!</Paragraph>
      <Paragraph><FormattedMessage id='order.approve.line2' /></Paragraph>
      <List>
        {itemsToApprove.map((item, index) =>
          <ListItem justify='between' separator='horizontal' key={index} responsive={false}>
            <span><strong><FormattedMessage id={item.key} /></strong></span>
            <span className='secondary'>{item.val}</span>
          </ListItem>
        )}
      </List>
      <Paragraph margin={'large'}><FormattedMessage id='order.approve.line3' /></Paragraph>
      <Box flex={true}
        justify='between'
        align='center'
        pad={{ 'between': 'small' }}>
        <Button label={<FormattedMessage id='order.approve.back' />}
          path='/Order'
          onClick={handleOnCancelClick}
          secondary={true} />
        <Button label={<FormattedMessage id='order.approve.accept' />}
          path='/Approved'
          onClick={handleOnApproveClick}
          primary={true} />
      </Box>
    </ScrollToTop>
  </Article>;
};

Approve.propTypes = {
  selectedPackage: PropTypes.string.isRequired,
  invoicing: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  childsName: PropTypes.string.isRequired,
  childsBloodType: PropTypes.string.isRequired,
  childsAge: PropTypes.string.isRequired,
  childsMiddleName: PropTypes.string,
  childsSimpleIllness: PropTypes.string,
  childsDifficultIllness: PropTypes.string,
  childsAccident: PropTypes.string
};

export default connect((state) => {
  if (!state.form || !state.form.order) {
    return {};
  }

  const order = state.form.order;

  return {
    selectedPackage: order.values.package.label,
    invoicing: order.values.invoicing,
    name: order.values.name,
    surname: order.values.surname,
    email: order.values.email,
    childsName: order.values.childsName,
    childsBloodType: order.values.childsBloodType,
    childsAge: order.values.childsAge,
    childsMiddleName: order.values.childsMiddleName,
    childsSimpleIllness: order.values.childsSimpleIllness,
    childsDifficultIllness: order.values.childsDifficultIllness,
    childsAccident: order.values.childsAccident
  };
})(Approve);