import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Section, Box, List, ListItem, Heading, Paragraph, Article } from '../../grommet-export';
import FormCheckmarkIcon from 'grommet/components/icons/base/FormCheckmark';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';
import styled from 'styled-components';
import OrderForm from './OrderForm';
import { withRouter } from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop';
import { injectIntl } from 'react-intl';

const CheckMark = styled(FormCheckmarkIcon)`
  stroke: #32CD32;
`;
const CloseMark = styled(FormCloseIcon)`
stroke: #DB2525;
`;

const headers = ['order.header1', 'order.header2', 'order.header3'];

const featureList = [
  { label: 'order.feature.birthCertificate', level: 1, title: 'order.feature.birthCertificateText' },
  { label: 'order.feature.chooseName', level: 1, title: 'order.feature.chooseNameText' },
  { label: 'order.feature.bloodType', level: 1, title: 'order.feature.bloodTypeText' },
  { label: 'order.feature.birthPictures', level: 1, title: 'order.feature.birthPicturesText' },
  { label: 'order.feature.babyPictures', level: 1, title: 'order.feature.babyPicturesText' },
  { label: 'order.feature.anecdotes', level: 1, title: 'order.feature.anecdotesText' },
  { label: 'order.feature.middleName', level: 2, title: 'order.feature.middleNameText' },
  { label: 'order.feature.preSchool', level: 2, title: 'order.feature.preSchoolText' },
  { label: 'order.feature.schoolie', level: 2, title: 'order.feature.schoolieText' },
  { label: 'order.feature.simpleIllness', level: 2, title: 'order.feature.simpleIllnessText' },
  { label: 'order.feature.difficultIllness', level: 3, title: 'order.feature.difficultIllnessText' },
  { label: 'order.feature.kidRental', level: 3, title: 'order.feature.kidRentalText' },
  { label: 'order.feature.facebookFamily', level: 3, title: 'order.feature.facebookFamilyText' },
  { label: 'order.feature.accident', level: 3, title: 'order.feature.accidentText' }
];

const price = [500, 2000, 5000];

const Order = ({ history, isMobile, intl: { formatMessage } }) => {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    const box = <Box key={i} margin='medium'>
      <Heading
        tag='h3'
        align='center'
        uppercase={true}
        strong={true}>
        {formatMessage({id: headers[i]})}
      </Heading>
      <List>
        {featureList.map((feature, index) => {
          return <ListItem justify='between' separator='horizontal' key={index} responsive={false}>
            <span title={formatMessage({id: feature.title})}>{formatMessage({id: feature.label})}</span>
            <span>{feature.level <= (i + 1) ? <CheckMark /> : <CloseMark />}</span>
          </ListItem>;
        })}
      </List>
      <Paragraph align='center'>{price[i]}{formatMessage({id: 'order.denomination'})}</Paragraph>
    </Box>;
    boxes.push(box);
  }

  return <Article margin={{'top': 'large'}} pad='medium'>
    <ScrollToTop>
      <Section margin={{'top': 'large'}}>
        <Heading strong={true}
          tag={isMobile ? 'h5' : 'h2'}
          uppercase={true}
          align='center'>
          {formatMessage({id: 'order.title'})}
        </Heading>
      </Section>
      <Section flex={true} justify='center' align='center' alignContent='between' direction='row' wrap={true}>
        {boxes}
      </Section>
      <Section flex={true} justify='center' align='center' alignContent='between'>
        <OrderForm onSubmit={() => {
          history.push('/approve');
        }} />
      </Section>
    </ScrollToTop>
  </Article>;
};

Order.propTypes = {
  history: PropTypes.object.isRequired, // From react-router
  isMobile: PropTypes.bool.isRequired
};

export default injectIntl(connect((state) => ({
  isMobile: state.root.isMobile
}))(withRouter(Order)));