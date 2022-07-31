import { SafeAreaView, StatusBar, Pressable } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  background-color: #242424;
  height: 100%;
`;

export const SplashScreenWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  height: 100%;
  max-width: 350px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const ImageWrapper = styled.View`
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`};
`;

export const TextWrapper = styled.View`
  padding-top: 72px;
`;

export const HeroText = styled.Text`
  font-family: RogerexSemiBold;
  color: white;
  font-size: 32px;
  line-height: 40px;
  font-weight: 600;
`;

export const SubText = styled.Text`
  font-family: RogerexRegular;
  color: white;
  font-size: 16px;
  line-height: 28px;
  margin-top: 8px;
`;

export const CTAWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Slides = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Slide = styled.View`
  border-radius: 100px;
  background-color: ${(props) =>
    props.active ? 'white' : '#a0a0a0'};
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const ArrowButton = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: white;
  width: 56px;
  height: 56px;
`;
