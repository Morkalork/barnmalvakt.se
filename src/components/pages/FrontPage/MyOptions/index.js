import React, { Component } from 'react';
import { Section, Box, Heading, Paragraph, Image } from '../../../grommet-export';
import styled from 'styled-components';
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
      Barn är juridik, inte biologi...
      </Heading>
    <Box
      flex={true}
      direction='row'
      align='center'
      justify='between'>
      <Box>
        <Heading>Registrera ditt eget barn</Heading>
        <Paragraph>Att skaffa ett barn behöver inte vara en fysisk handling, det kan ske rent juridiskt genom att registrera det hos skatteverket. Tänk dig bilar och bilmålvakter, fast med barn.</Paragraph>
        <Paragraph>Vi erbjuder dig möjligheten att registrera ett barn utan att faktiskt behöva ha ett på riktigt. Du kan nu:</Paragraph>
        <ul>
          <li>Få ut barnbidrag</li>
          <li>Vabba</li>
          <li>Ta ut föräldraledighet</li>
          <li>Ta del av den status småbarnsförälderrollen ger!</li>
        </ul>


        <Heading>I första hand för män</Heading>
        <Paragraph>Det finns ingen anledning att hyckla om att vår tjänst i första hand riktar sig till män, det är trots allt de som tjänar mest på bilden av att vara småbarnsförälder. När en manlig kollega går hem tidigt eller vabbar så kan han utan tvekan känna sig som en hjälte, föräldraledigheten är något han kan skryta om. Detta är inte garanterat för föräldrar av det andra könet.</Paragraph>
        <Paragraph>Tjänsten går dock att anpassa för att fokusera mer på din familj än på din arbetsgivare. Det är kanske en annan typ av föräldraledighet du är ute efter, ledighet från dina egna tjatande föräldrar? Få tyst på deras okvädningar om barnbarn och registrera en unge för att få tyst på dem. <a href="https://www.parents.com/parenting/dynamics/grandparents/uninvolved-grandparents/">Studier</a> visar på att många far- och morföräldrar är mer intresserade av statusen ett barnbarn ger än själva barnet i sig. Om de inte ber om att få träffa ditt juridiska barn så är ju biffen klar.</Paragraph>
      </Box>
      <Box>
        <Image src={FatherImage} alt="Father and child" />
      </Box>
    </Box>
  </BlueSection>
};

export default MyOptions;