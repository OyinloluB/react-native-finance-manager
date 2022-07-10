import React from "react";
import { SvgXml } from "react-native-svg";
import {
  SafeArea,
  GreetingsContainer,
  ProfileDetails,
  ProfilePicture,
  ProfileGreeting,
  UserName,
  Greeting,
} from "./styles";
import { Balance, Expenses } from "../../components/card";
import notification from "../../assets/images/notification_bell"

export const Home = ({ navigation }) => {
  return (
    <SafeArea>
      {/* Greetings */}
      <GreetingsContainer>
        <ProfileDetails>
          <ProfilePicture />
          <ProfileGreeting>
            <Greeting>Good morning!</Greeting>
            <UserName>Zarror Nibros</UserName>
          </ProfileGreeting>
        </ProfileDetails>
        <SvgXml xml={notification} />
      </GreetingsContainer>
      {/* Total Balance */}
      <Balance navigation={navigation} />
      {/* Income/Outcome */}
      <Expenses />
    </SafeArea>
  );
};
