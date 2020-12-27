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
  const { trip } = route.params;
  //state
  const [tripEdit, setTrip] = useState(trip);

  //add data to backend
  const handleEdit = () => {
    tripStore.editTrip(tripEdit);
    navigation.navigate("TripListScreen");
  };

  //form

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <Header>Edit</Header>
      <TextInput
        label="Title"
        value={tripEdit.title}
        onChangeText={(title) => setTrip({ ...tripEdit, title })}
      />
      <TextInput
        label="Description"
        value={tripEdit.description}
        onChangeText={(description) => setTrip({ ...tripEdit, description })}
      />
      <TextInput
        label="Image"
        value={tripEdit.image}
        onChangeText={(image) => setTrip({ ...tripEdit, image })}
      />

      <Button mode="contained" onPress={handleEdit}>
        Edit
      </Button>
    </Background>
  );
};

export default EditTripScreen;
