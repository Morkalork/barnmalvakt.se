import React, { Component } from 'react';
import { Section, Heading, Paragraph } from 'grommet';

const MyRights = () => {
  return <Section size='xxlarge' justify='center' align='center' full={true}>
    <Heading
      tag='h2'
      align='center'
      strong={true}
      margin='large'
      uppercase={true}>
      Bejaka dina rättigheter!
      </Heading>
    <Paragraph size='large'>
      Har du tröttnat på att dina kollegor vabbar 6 dagar i veckan? På att alla andra är föräldrarlediga men lämnar dig med jobbet?
      </Paragraph>
    <Paragraph size='large'>
      Har du fått nog av att dina medarbetare alltid kan lägga upp semesterbilder med familjen från Maldiverna på LinkedIn med texten "<em>Offline, livet är mer än bara jobb</em>" och få 800 likes när du tvingas jobba över för att täcka deras statligt finansierade frånvaro?
      </Paragraph>
    <Paragraph size='large'>
      Känner du att det kanske är dags för dig att casha ut, tid att få svar på frågan "<em>Vad fan får <strong>jag</strong> för pengarna?</em>" och äntligen få lite välförjänt, statsfinansierad långsemester och betala dina Jägerbombs med barnbidrag?
      </Paragraph>
  </Section>
};

export default MyRights;