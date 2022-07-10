import React from "react";
import { Image } from "react-native";
import {
  SafeArea,
  GreetingsContainer,
  ProfileDetails,
  ProfilePicture,
  ProfileGreeting,
  UserName,
  Greeting,
} from "./styles";
import { Balance } from "../../components/card";

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
        <Image source={require("../../assets/images/notification_bell.png")} />
      </GreetingsContainer>
      {/* Total Balance */}
      <Balance navigation={navigation} />
      {/* Income/Outcome */}
    </SafeArea>
  );
};
