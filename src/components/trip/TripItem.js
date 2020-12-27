//react-native
import { ListItem } from "native-base";

//react
import React from "react";

//styles
import { Title, TripImage, IconStyle } from "./styles";

//observer
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const TripItem = ({ trip, navigation }) => {
  return (
    <>
      {/* {trip.userId === authStore.user.id && (
        <IconStyle
          name="EditOutlined"
          type="antdesign"
          onPress={() => navigation.navigate("EditTripScreen", { trip: trip })}
        />
      )} */}

      <ListItem
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <TripImage source={{ uri: trip.image }} />
        <Title>{trip.title}</Title>
      </ListItem>
    </>
  );
};

export default observer(TripItem);
