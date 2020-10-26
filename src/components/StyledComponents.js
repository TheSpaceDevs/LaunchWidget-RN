import styled from 'styled-components';

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBg};
`;

export const StatusText = styled.Text`
  font-size: 35px;
  font-family: Roboto_900Black;
`;

export const SubtitleText = styled.Text`
  font-family: Roboto_100Thin;
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
`;

export const CreditsText = styled.Text`
  font-family: Roboto_100Thin;
  color: ${(props) => props.theme.fontColor}
  margin-bottom: 15px;
`;
