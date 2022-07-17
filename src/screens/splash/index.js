import React from 'react';
import { View, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  SafeArea,
  SplashScreenWrapper,
  ImageWrapper,
  TextWrapper,
  HeroText,
  SubText,
  CTAWrapper,
  Slides,
  Slide,
  ArrowButton,
} from './styles';
import { useFonts } from 'expo-font';
import hero from '../../assets/images/hero';
import arrowRight from '../../assets/images/arrow_right';

export const SplashScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    RogerexRegular: require('../../assets/fonts/RogerexRegular.ttf'),
    RogerexSemiBold: require('../../assets/fonts/RogerexSemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeArea>
      <SplashScreenWrapper>
        <View style={{ flex: 1 }}>
          <ImageWrapper>
            <SvgXml xml={hero} width={350} height={350} />
          </ImageWrapper>
          <TextWrapper>
            <HeroText>
              Make It Easier{'\n'}
              For You to Manage Your Finances
            </HeroText>
            <SubText>
              Fintechy is a mobile application that can{'\n'}
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
          <ArrowButton
            onPress={() => {
              navigation.navigate('Account');
            }}
          >
            <SvgXml xml={arrowRight} />
          </ArrowButton>
        </CTAWrapper>
      </SplashScreenWrapper>
      <StatusBar barStyle="light-content" />
    </SafeArea>
  );
};
