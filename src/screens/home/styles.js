import { SafeAreaView, StatusBar, Pressable } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  display: flex;
  height: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

export const GreetingsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 25px;
  width: 100%;
`;

export const ProfileDetails = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ProfilePicture = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100;
  background-color: #C4C4C4;
`;

export const ProfileGreeting = styled.View`
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-family: RogerexSemiBold;
  color: #242424;
  font-size: 18px;
  line-height: 24px;
`;

export const Greeting = styled.Text`
  font-family: Inter_400Regular;
  color: #242424;
  font-size: 12px;
  line-height: 18px;
`;
