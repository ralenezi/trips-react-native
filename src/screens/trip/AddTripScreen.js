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

const AddTripScreen = ({ navigation }) => {
  //state
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  //add data to backend
  const handleAdd = () => {
    tripStore.addTrip(trip);
    navigation.navigate("TripListScreen");
  };

  //form

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Add new trip</Header>
      <TextInput
        label="Title"
        placeholder="Title"
        onChangeText={(title) => setTrip({ ...trip, title })}
      />
      <TextInput
        label="Description"
        placeholder="Description"
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      <TextInput
        label="Image"
        placeholder="Image"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />

      <Button mode="contained" onPress={handleAdd}>
        Add
      </Button>
    </Background>
  );
};

export default AddTripScreen;
