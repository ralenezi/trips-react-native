import styled from "styled-components/native";
import Icon from "native-base";

export const Title = styled.Text`
  color: #000;
  font-size: 28;
  text-align: center;
`;

export const TripImage = styled.Image`
  width: 30%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2%;
`;

//****detail******

export const Wrapper = styled.View`
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ItemWrapper = styled.View`
  margin-top: 2%;
  align-items: center;
  justify-content: center;
`;

//****Icon******
export const IconStyle = styled(Icon)`
  color: black;
`;
