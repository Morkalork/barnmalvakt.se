import React from 'react';
import { Box, Card } from 'grommet';
import SickImage from '../../../../assets/images/sick.jpg';
import AccidentImage from '../../../../assets/images/accident.jpg';
import ChildImage from '../../../../assets/images/child.jpg';
import { injectIntl } from 'react-intl';

const Faq2 = ({ intl: { formatMessage } }) => {
  return <Box flex={true}
    align='start'
    direction='row'
    wrap={true}
    justify='center'>
    <Card thumbnail={SickImage}
      margin='medium'
      label={formatMessage({ id: 'faq.illness' })}
      heading={formatMessage({ id: 'faq.illness.title' })}
      description={formatMessage({ id: 'faq.illness.description' })} />
    <Card thumbnail={AccidentImage}
      margin='medium'
      label={formatMessage({ id: 'faq.accidents' })}
      heading={formatMessage({ id: 'faq.accidents.title' })}
      description={formatMessage({ id: 'faq.accidents.description' })} />
    <Card thumbnail={ChildImage}
      margin='medium'
      label={formatMessage({ id: 'faq.looks' })}
      heading={formatMessage({ id: 'faq.looks.title' })}
      description={formatMessage({ id: 'faq.looks.description' })} />
  </Box>;
};

export default injectIntl(Faq2);