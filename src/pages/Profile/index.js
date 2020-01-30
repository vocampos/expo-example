import React from "react";
import { Container, Avatar, Label, Name, Column, Title, Row } from "./styles";

export default function Profile({ navigation }) {
  const {
    id,
    name,
    email,
    phone,
    website,
    address,
    company
  } = navigation.getParam("user");
  return (
    <Container>
      <Row>
        <Avatar source={{ uri: `https://i.pravatar.cc/150?img=${id}` }} />
      </Row>
      <Column>
        <Name>{name}</Name>
        <Label>{company.bs}</Label>
        <Label>{email}</Label>
        <Label>{phone}</Label>
      </Column>
      <Title>ADDRESS</Title>
      <Column>
        <Label>
          {address.street} {address.suite}
        </Label>
        <Label>{address.city}</Label>
      </Column>
      <Title>COMPANY</Title>
      <Column>
        <Label>{company.name}</Label>
        <Label>{website}</Label>
        <Label>{company.catchPhrase}</Label>
      </Column>
    </Container>
  );
}
