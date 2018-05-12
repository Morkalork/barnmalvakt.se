import React from 'react';
import { Article } from '../../grommet-export';
import MyRights from './MyRights';
import MyOptions from './MyOptions';
import Faq from './Faq';
import Order from './Order';
import Jumbotron from './Jumbotron';

const FrontPage = () => {
  return <Article align='center'>
    <Jumbotron />
    <MyRights />
    <MyOptions />
    <Faq />
    <Order />
  </Article>;
};

export default FrontPage;