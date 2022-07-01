import React from "react";
import { View, Image } from "react-native";
import {
  SafeArea,
  SplashScreenWrapper,
  ImageWrapper,
  HeroImage,
  TextWrapper,
  HeroText,
  SubText,
  CTAWrapper,
  Slides,
  Slide,
  ArrowButton,
} from "./styles";
import { useFonts } from "expo-font";

export const SplashScreen = () => {
  const [loaded] = useFonts({
    RogerexRegular: require("../../assets/fonts/RogerexRegular.ttf"),
    RogerexSemiBold: require("../../assets/fonts/RogerexSemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeArea>
      <SplashScreenWrapper>
        <View style={{ flex: 1 }}>
          <ImageWrapper>
            <HeroImage source={require("../../assets/images/hero.png")} />
          </ImageWrapper>
          <TextWrapper>
            <HeroText>
              Make It Easier{"\n"}
              For You to Manage Your Finances
            </HeroText>
            <SubText>
              Fintechy is a mobile application that can{"\n"}
              find simple ways to manage your finances
            </SubText>
          </TextWrapper>
        </View>
        <CTAWrapper>
          <Slides>
            <Slide active></Slide>
            <Slide></Slide>
            <Slide></Slide>
          </Slides>
          <ArrowButton>
            <Image source={require("../../assets/images/arrow_right.png")} />
          </ArrowButton>
        </CTAWrapper>
      </SplashScreenWrapper>
    </SafeArea>
  );
};
