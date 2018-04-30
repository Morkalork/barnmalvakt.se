import { SubmissionError } from 'redux-form';

export default function (values) {
  const errors = {
    _error: 'Submit failed'
  };

  if (!values.package) {
    errors.package = 'Du måste välja ett paket';
  }

  if (!values.name) {
    errors.name = 'Har du inget namn?';
  }

  if(!values.surname) {
    errors.surname = 'Vi behöver ett efternamn';
  }

  if(!values.email) {
    errors.email = 'Vi behöver kunna nå dig';
  }

  if(!values.childsName) {
    errors.childsName = 'Detta får du ju bara inte glömma!';
  }

  if(!values.childsAge) {
    errors.childsAge = 'Ditt barn behöver en ålder!';
  } else if(values.childsAge >= 18) {
    errors.childsAge = 'Du försöker beställa en vuxen...';
  }

  if(!values.invoicing) {
    errors.invoicing = 'Vill du inte betala, eller?!';
  }

  if (Object.keys(errors).length > 1) {
    throw new SubmissionError(errors);
  }
}