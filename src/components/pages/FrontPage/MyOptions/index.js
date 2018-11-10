import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Box, Heading, Paragraph, Image } from 'grommet';
import FatherImage from '../../../../assets/images/father.png';
import BlueSection from '../../../BlueSection';

const MyOptions = () => {
  return <BlueSection justify='center' align='center' full={false}>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      <FormattedMessage id='myoptions.header' />
    </Heading>
    <Box
      flex={true}
      align='center'
      justify='between'>
      <Box>
        <Heading align='center'>
          <FormattedMessage id='myoptions.section1.header' />
        </Heading>
        <Paragraph>
          <FormattedMessage id='myoptions.section1.line1' />
        </Paragraph>
        <Paragraph>
          <FormattedMessage id='myoptions.section1.line2' />
        </Paragraph>
        <ul>
          <li>
            <FormattedMessage id='myoptions.section1.item1' />
          </li>
          <li>
            <FormattedMessage id='myoptions.section1.item2' />
          </li>
          <li>
            <FormattedMessage id='myoptions.section1.item3' />
          </li>
          <li>
            <FormattedMessage id='myoptions.section1.item4' />
          </li>
        </ul>

        <Heading align='center'>
          <FormattedMessage id='myoptions.section2.header' />
        </Heading>
        <Paragraph>
          <FormattedMessage id='myoptions.section2.line1' />
        </Paragraph>
        <Paragraph>
          <FormattedMessage
            id='myoptions.section2.line2'
            values={{
              link: <a href="https://www.parents.com/parenting/dynamics/grandparents/uninvolved-grandparents/">
                <FormattedMessage id='myoptions.section2.line2.link' />
              </a>
            }} />
        </Paragraph>
      </Box>
      <Box>
        <Image src={FatherImage} alt="Father and child" />
      </Box>
    </Box>
  </BlueSection>;
};

export default injectIntl(MyOptions);