import React, {Component} from 'react';
import Form from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

const OrderForm = () => {
  return <Form>
    <Header>
      <Heading>
        Beställ nu!
      </Heading>
    </Header>
    <Select placeHolder='Välj paket'
      options={['Basic', 'Standard', 'Premium']}
      values={['basic', 'standard', 'premium']} />
    <FormField label='Namn'>
      <TextInput id='name' name='name' />
    </FormField>
    <FormField label='Efternamn'>
      <TextInput id='surname' name='surname' />
    </FormField>
    <FormField label='E-post'>
      <TextInput id='email' name='email' />
    </FormField>
  </Form>
};

export default OrderForm;