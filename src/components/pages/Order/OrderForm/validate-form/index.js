import { SubmissionError } from 'redux-form';
import { SimpleIllnesses, DifficultIllness } from '../constants';

export default function (values, formatMessage) {
  const errors = {
    _error: 'Submit failed'
  };

  if (!values.package) {
    errors.package = formatMessage({id: 'order.validate.package'});
  }

  if (!values.name) {
    errors.name = formatMessage({id: 'order.validate.firstname'});
  }

  if (!values.surname) {
    errors.surname = formatMessage({id: 'order.validate.surname'});
  }

  if (!values.email) {
    errors.email = formatMessage({id: 'order.validate.email'});
  }

  if (!values.childsName) {
    errors.childsName = formatMessage({id: 'order.validate.child.name'});
  }

  if (!values.childsAge) {
    errors.childsAge = formatMessage({id: 'order.validate.child.age'});
  } else if (values.childsAge >= 18) {
    errors.childsAge = formatMessage({id: 'order.validate.child.notChild'});
  }

  if (!values.invoicing) {
    errors.invoicing = formatMessage({id: 'order.validate.invoicing'});
  }

  if (values.childsSimpleIllness && !SimpleIllnesses.includes(values.childsSimpleIllness)) {
    errors.childsSimpleIllness = formatMessage({id: 'order.validate.unknownIllness'});
  }

  if (values.childsDifficultIllness && !DifficultIllness.includes(values.childsDifficultIllness)) {
    errors.childsDifficultIllness = formatMessage({id: 'order.validate.unknownIllness'});
  }

  if (Object.keys(errors).length > 1) {
    throw new SubmissionError(errors);
  }
}