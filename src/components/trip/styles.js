import styled from "styled-components/native";

export const Listcontainer = styled.View`
  marign-top: 20%;
`;

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

export const BackgroundColorTest = styled.View`
  background-color: red;
`;

//****detail******
export const TripDetailWrapper = styled.View`
  margin-top: 20;
  align-items: center;
  justify-content: center;
`;

export const TripDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 30;
`;
export const TripDetailImage = styled.Image`
  width: 60%;
  height: 60%;
`;

export const TripDetailDescription = styled.Text`
  font-size: 25;
`;

//****detail******

export const Wrapper = styled.View`
  margin-top: 20%;
  align-items: center;
  justify-content: center;
`;

//***********************Form***************************
export const FormContainer = styled.View`
  margin-top: 20%;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const FormTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: blue;
`;

export const FormTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  width: 90%;
  margin-bottom: 30px;
  border-bottom-color: blue;
  border-bottom-width: 1px;
`;

export const FormButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  background-color: gray;
`;

export const FormButtonText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

//end Form
