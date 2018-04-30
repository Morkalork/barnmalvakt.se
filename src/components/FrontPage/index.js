import React, {Component} from 'react';
import {Article} from '../grommet-export';
import MyRights from './MyRights';
import MyOptions from './MyOptions';
import Faq from './Faq';
import Order from './Order';

const FrontPage = () => {
   return <Article align='center'>
     <MyRights />
     <MyOptions />
     <Faq />
     <Order />
   </Article>
};

export default FrontPage;