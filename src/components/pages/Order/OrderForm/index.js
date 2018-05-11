import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Header, Heading, FormFields, TextInput, NumberInput, RadioButton, Select, FormField, Paragraph, Button, SearchInput, DateTime } from '../../../grommet-export';
import { Field, reduxForm } from 'redux-form';
import validateForm from './validate-form';
import { SimpleIllnesses, DifficultIllness, BloodTypes } from './constants';

const packages = [{
  label: 'Basic',
  value: 1
}, {
  label: 'Standard',
  value: 2
}, {
  label: 'Premium',
  value: 3
}];

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

const renderDateTime = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <DateTime value={input.value} onChange={(newDate) => input.onChange(newDate)} />
  </FormField>
};

const renderSearchbox = ({
  input,
  label,
  meta: { touched, error, warning } },
  suggestions) => {
  return <FormField label={label}
    error={error}>
    <SearchInput
      value={input.value}
      suggestions={suggestions}
      onSelect={({ target, suggestion }) => input.onChange(suggestion)} />
  </FormField>
};

const renderSimpleIllnesses = (fields) => renderSearchbox(fields, SimpleIllnesses);
const renderDifficultIllnesses = (fields) => renderSearchbox(fields, DifficultIllness);
const renderBloodTypes = (fields) => renderSearchbox(fields, BloodTypes);

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      package: props.initialValues.package.value
    };

    this.renderSelect = this.renderSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderSelect({
    input,
    label,
    meta: { touched, error, warning } }) {
    return <FormField label={label}
      error={error}>
      <Select options={packages}
        value={input.value}
        onChange={({ target, option }) => {
          input.onChange(option);
          this.setState({ package: option.value });
        }} />
    </FormField>
  }

  handleSubmit(values) {
    validateForm(values);

    this.props.onSubmit();
  }

  render() {
    const { handleSubmit } = this.props;
    const isStandard = this.state.package > packages[0].value;
    const isPremium = this.state.package > packages[1].value;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)} compact={this.props.isMobile}>
        <Header justify='center'>
          <Heading strong={true}
            tag={this.props.isMobile ? 'h5' : 'h2'}>
            Beställ nu!
        </Heading>
        </Header>
        <Field name='package' label='Välj paket' component={this.renderSelect} />
        <Field name='name' label='Förnamn' component={renderTextbox} />
        <Field name='surname' label='Efternamn' component={renderTextbox} />
        <Field name='email' label='E-post' component={renderTextbox} />
        <Field name='childsName' label='Barnets förnamn' component={renderTextbox} />
        <Field name='childsBloodType' label='Barnets blodgrupp' component={renderBloodTypes} />
        {isStandard && <Field name='childsMiddleName' label='Barnets mellannamn' component={renderTextbox} />}
        <Field name='childsAge' label='Barnets ålder' component={renderNumberbox} />
        {isStandard && <Field name='childsSimpleIllness' label='Enklare sjukdom' component={renderSimpleIllnesses} />}
        {isPremium && <Field name='childsDifficultIllness' label='Svårare sjukdom' component={renderDifficultIllnesses} />}
        {isPremium && <Field name='childsAccident' label='Olycka (datum för olyckan)' component={renderDateTime} />}
        <Field name='invoicing' label='Fakturering' component={renderRadioButtons} />
        <Paragraph>
          <Button label='Beställ!'
            type='submit'
            primary={true} />
        </Paragraph>
      </Form>
    );
  };
}

OrderForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // From redux-form
  onSubmit: PropTypes.func.isRequired // From parent
};

export default connect((state) => ({
  isMobile: state.root.isMobile
}))(reduxForm({
  initialValues: {
    package: packages[1],
    invoicing: 'yearly'
  },
  form: 'order',
  destroyOnUnmount: false
})(OrderForm));