//react
import React, { useState } from "react";

//components
import Background from "../../components/Background";
import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import BackButton from "../../components/BackButton";

//stores
import tripStore from "../../stores/tripStore";

const EditTripScreen = ({ route, navigation }) => {
  const { test } = route.params;
  //state
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  //add data to backend
  const handleEdit = () => {
    tripStore.editTrip(trip);
    navigation.navigate("TripListScreen");
  };

  //form

  return (
    <Background>
      <Header>{test}</Header>
      <BackButton goBack={navigation.goBack} />

      <Header>Edit trip</Header>
      <TextInput
        label="Title"
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <TextInput
        label="Description"
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <TextInput
        label="Image"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />

      <Button mode="contained" onPress={handleEdit}>
        Add
      </Button>
    </Background>
  );
};

export default EditTripScreen;
