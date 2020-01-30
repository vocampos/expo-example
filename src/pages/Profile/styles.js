import styled from "styled-components/native";

export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;

export const Name = styled.Text`
  margin-top: 25px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  padding-vertical: 2px;
  font-size: 14px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 12px;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const Container = styled.ScrollView`
  background-color: #fff;
  flex: 1;
  padding: 25px;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  margin-left: auto;
  margin-right: auto;
`;
