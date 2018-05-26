import React from 'react';
import { Box, Card } from '../../../grommet-export';
import LawImage from '../../../../assets/images/law.jpg';
import SchoolImage from '../../../../assets/images/school.jpg';
import SocialImage from '../../../../assets/images/social-media.jpg';
import { injectIntl } from 'react-intl';

const Faq1 = ({ intl: { formatMessage } }) => {
  return <Box flex={true}
    align='start'
    direction='row'
    wrap={true}
    justify='center'>
    <Card thumbnail={LawImage}
      margin='medium'
      label={formatMessage({ id: 'faq.law' })}
      heading={formatMessage({ id: 'faq.law.title' })}
      description={formatMessage({ id: 'faq.law.description' })} />
    <Card thumbnail={SchoolImage}
      margin='medium'
      label={formatMessage({ id: 'faq.age' })}
      heading={formatMessage({ id: 'faq.age.title' })}
      description={formatMessage({ id: 'faq.age.description' })} />
    <Card thumbnail={SocialImage}
      margin='medium'
      label={formatMessage({ id: 'faq.social' })}
      heading={formatMessage({ id: 'faq.social.title' })}
      description={formatMessage({ id: 'faq.social.description' })} />
  </Box>;
};

export default injectIntl(Faq1);