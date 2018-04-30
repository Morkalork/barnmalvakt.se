import React, { Component } from 'react';
import { Form, Header, Heading, FormFields, TextInput, NumberInput, RadioButton, Select, FormField, Paragraph, Button } from '../../grommet-export';
import { Field, reduxForm } from 'redux-form';
import validateForm from './validate-form';

const packages = [{
  label: 'Basic',
  value: 'basic'
}, {
  label: 'Standard',
  value: 'standard'
}, {
  label: 'Premium',
  value: 'premium'
}];

const renderSelect = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <Select options={packages}
      value={input.value}
      onChange={({ target, option }) => {
        input.onChange(option);
      }} />
  </FormField>
};

const renderRadioButtons = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <RadioButton id='monthly'
      value='monthly'
      label='Månadsvis'
      onChange={(e) => input.onChange(e.target.value)}
      checked={input.value === 'monthly'} />
    <RadioButton id='quarterly'
      value='quarterly'
      label='Kvartalsvis (5% rabatt!)'
      onChange={(e) => input.onChange(e.target.value)}
      checked={input.value === 'quarterly'} />
    <RadioButton id='yearly'
      value='yearly'
      label='Årsvis (15% rabatt!)'
      onChange={(e) => input.onChange(e.target.value)}
      checked={input.value === 'yearly'} />
  </FormField>
}

const renderTextbox = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <TextInput value={input.value} onDOMChange={(e) => input.onChange(e.target.value)} />
  </FormField>
};

const renderNumberbox = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <NumberInput value={input.value} onChange={(e) => input.onChange(e.target.value)} />
  </FormField>
};

const OrderForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit(validateForm)}>
      <Header>
        <Heading>
          Beställ nu!
        </Heading>
      </Header>
      <Field name='package' label='Välj paket' component={renderSelect} />
      <Field name='name' label='Förnamn' component={renderTextbox} />
      <Field name='surname' label='Efternamn' component={renderTextbox} />
      <Field name='email' label='E-post' component={renderTextbox} />
      <Field name='childsName' label='Barnets förnamn' component={renderTextbox} />
      <Field name='childsAge' label='Barnets ålder' component={renderNumberbox} />
      <Field name='invoicing' label='Fakturering' component={renderRadioButtons} />
      <Paragraph>
        <Button label='Beställ!'
          type='submit'
          primary={true} />
      </Paragraph>
    </Form>
  );
};

export default reduxForm({
  initialValues: {
    package: packages[1],
    invoicing: 'yearly'
  },
  form: 'order'
})(OrderForm);