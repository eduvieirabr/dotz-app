import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../utils/conts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Input = styled.TextInput`
 width: 80%;
 height: 40;
 backgroundColor:${colors.secondary};
 borderRadius:10; 
 margin-top: 10px;
 margin-bottom: 10px;
 margin-left: 10px;
 margin-right: 10px;
`

export const CenterView = styled.View`
  flex: 1;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  backgroundColor: transparent;
`;

export const Image = styled.Image`
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
`;

export const SafeArea = styled.SafeAreaView`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Content = styled.View`
  ${StyleSheet.absoluteFill};
  justify-content: flex-end;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
	color: ${colors.light};
	font-weight: 500;
    font-size: 21px;
`;

export const SubTitle = styled.Text`
  color: ${colors.light};
  width: 290px;
  align-self: center;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${colors.light};
  font-weight: 300;
  text-align: left;
  margin-left: 0px;
  font-size: 16px;
`;

export const LabelAlert = styled.Text`
  color: ${colors.light};
  font-weight: 500;
  text-align: left;
  margin-left: 0px;
  font-size: 18px;
`;

export const UseTermsText = styled.Text`
  color: ${({theme}) => '#002ccc'};
  text-decoration: underline;
  text-decoration-color: ${({theme}) => '#002ccc'};
  font-weight: bold;
`;

export const UseTermsLink = styled.TouchableWithoutFeedback``;

export const Footer = styled.View`
  padding: 16px 16px;
`;

export const ButtonStart = styled(TouchableOpacity)`
       borderWidth:1;
       borderColor:#ffab52;
       alignItems: center;
       justifyContent:center;
       width: 80%;
       height: 60;
       backgroundColor: transparent;
       borderRadius:10;   
`;

export const ContainerSplash = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const ImageSplash = styled.Image`
  width: 60%;
`;
