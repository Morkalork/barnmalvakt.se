import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Header, Heading, TextInput, NumberInput, RadioButton, Select, FormField, Paragraph, Button, SearchInput, DateTime } from '../../../grommet-export';
import { Field, reduxForm } from 'redux-form';
import validateForm from './validate-form';
import { injectIntl } from 'react-intl';

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
  meta: { touched, error, warning } }, formatMessage) => {
  return <FormField label={label}
    error={error}>
    <RadioButton id='monthly'
      value='monthly'
      label={formatMessage({ id: 'order.form.invoicing.monthly' })}
      onChange={(e) => input.onChange(e.target.value)}
      checked={input.value === 'monthly'} />
    <RadioButton id='quarterly'
      value='quarterly'
      label={formatMessage({ id: 'order.form.invoicing.quarterly' })}
      onChange={(e) => input.onChange(e.target.value)}
      checked={input.value === 'quarterly'} />
    <RadioButton id='yearly'
      value='yearly'
      label={formatMessage({ id: 'order.form.invoicing.yearly' })}
      onChange={(e) => input.onChange(e.target.value)}
      checked={input.value === 'yearly'} />
  </FormField>;
};

const renderTextbox = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <TextInput value={input.value} onDOMChange={(e) => input.onChange(e.target.value)} />
  </FormField>;
};

const renderNumberbox = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <NumberInput value={input.value} onChange={(e) => input.onChange(e.target.value)} />
  </FormField>;
};

const renderDateTime = ({
  input,
  label,
  meta: { touched, error, warning } }) => {
  return <FormField label={label}
    error={error}>
    <DateTime value={input.value} onChange={(newDate) => input.onChange(newDate)} />
  </FormField>;
};

const renderSearchbox = (
  fields,
  suggestionId,
  suggestionCount,
  formatMessage) => {
  const {
    input,
    label,
    meta: { error }
  } = fields;

  const suggestions = [];
  for (var i = 1; i <= suggestionCount; i++) {
    suggestions.push(`${suggestionId}${i}`);
  }

  return <FormField label={label}
    error={error}>
    <SearchInput
      value={input.value}
      suggestions={suggestions.map((suggestion) => formatMessage({ id: suggestion }))}
      onSelect={({ target, suggestion }) => input.onChange(formatMessage({ id: suggestion }))} />
  </FormField>;
};

const renderSimpleIllnesses = (fields, formatMessage) => renderSearchbox(fields, 'order.simpleIllness', 10, formatMessage);
const renderDifficultIllnesses = (fields, formatMessage) => renderSearchbox(fields, 'order.difficultIllness', 12, formatMessage);
const renderBloodTypes = (fields, formatMessage) => renderSearchbox(fields, 'order.bloodTypes', 4, formatMessage);

const handleOnClick = () => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Clicked approve-button'
  });
};

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
    </FormField>;
  }

  handleSubmit(values) {
    validateForm(values);

    this.props.onSubmit();
  }

  render() {
    const { handleSubmit, intl: { formatMessage } } = this.props;
    const isStandard = this.state.package > packages[0].value;
    const isPremium = this.state.package > packages[1].value;

    return (
      <Form onSubmit={handleSubmit(this.handleSubmit)} compact={this.props.isMobile}>
        <Header justify='center'>
          <Heading strong={true}
            tag={this.props.isMobile ? 'h5' : 'h2'}>
            {formatMessage({ id: 'order.form.orderNow' })}
          </Heading>
        </Header>
        <Field name='package' label={formatMessage({ id: 'order.form.choosePackage' })} component={this.renderSelect} />
        <Field name='name' label={formatMessage({ id: 'order.form.firstname' })} component={renderTextbox} />
        <Field name='surname' label={formatMessage({ id: 'order.form.surname' })} component={renderTextbox} />
        <Field name='email' label={formatMessage({ id: 'order.form.email' })} component={renderTextbox} />
        <Field name='childsName' label={formatMessage({ id: 'order.form.child.firstname' })} component={renderTextbox} />
        <Field name='childsBloodType' label={formatMessage({ id: 'order.form.child.bloodType' })} component={(fields) => renderBloodTypes(fields, formatMessage)} />
        {isStandard && <Field name='childsMiddleName' label={formatMessage({ id: 'order.form.child.middlename' })} component={renderTextbox} />}
        <Field name='childsAge' label={formatMessage({ id: 'order.form.child.age' })} component={renderNumberbox} />
        {isStandard && <Field name='childsSimpleIllness' label={formatMessage({ id: 'order.form.child.simpleIllness' })} component={(fields) => renderSimpleIllnesses(fields, formatMessage)} />}
        {isPremium && <Field name='childsDifficultIllness' label={formatMessage({ id: 'order.form.child.difficultIllness' })} component={(fields) => renderDifficultIllnesses(fields, formatMessage)} />}
        {isPremium && <Field name='childsAccident' label={formatMessage({ id: 'order.form.child.accident' })} component={renderDateTime} />}
        <Field name='invoicing' label={formatMessage({ id: 'order.form.invoicing' })} component={(fields) => renderRadioButtons(fields, formatMessage)} />
        <Paragraph>
          <Button label={formatMessage({ id: 'order.how.orderButton' })}
            type='submit'
            onClick={handleOnClick}
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

// HOC hell :)
export default injectIntl(connect((state) => ({
  isMobile: state.root.isMobile
}))(reduxForm({
  initialValues: {
    package: packages[1],
    invoicing: 'yearly'
  },
  form: 'order',
  destroyOnUnmount: false
})(OrderForm)));