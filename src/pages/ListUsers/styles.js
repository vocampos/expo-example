import styled from "styled-components/native";

export const Avatar = styled.Image`
  height: 54px;
  width: 54px;
  border-radius: 27px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Email = styled.Text`
  font-size: 14px;
`;

export const Container = styled.TouchableOpacity`
  align-items: center;
  padding-vertical: 5px;
  padding-horizontal: 10px;
  flex-direction: row;
  padding-bottom: 5px;
  border-style: solid;
  border-bottom-width: 0.5px;
  border-color: #eaeded;
  background-color: #fff;
`;

export const Column = styled.View`
  flex-direction: column;
`;
