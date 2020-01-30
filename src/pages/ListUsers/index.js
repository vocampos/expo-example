import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import api from "../../services/api";

import { Container, Avatar, Email, Name, Column } from "./styles";

export default function Main({ navigation }) {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await api.get("/users");
    setUsers(response.data);
  }

  function detail(user) {
    navigation.navigate("Profile", { user });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      {users.map(user => (
        <Container onPress={() => detail(user)} key={user.id}>
          <Avatar
            source={{ uri: `https://i.pravatar.cc/150?img=${user.id}` }}
          />
          <Column>
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </Column>
        </Container>
      ))}
    </ScrollView>
  );
}
