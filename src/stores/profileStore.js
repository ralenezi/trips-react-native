import instance from "./instance";
import { makeAutoObservable } from "mobx";

class profileStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  //fetch
  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      console.log(
        "🚀 ~ file: tripStore.js ~ line 16 ~ profileStore ~ fetchTrips= ~ this.trips",
        this.trips
      );
      this.loading = false;
    } catch (error) {
      console.error("tripStore --> fetchTrips", error);
    }
  }; //end fetch

  //edit trip
  editTrip = async (updatedTrip) => {
    try {
      const response = await instance.put(
        `/trips/${updatedTrip.id}`,
        updatedTrip
      );

      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in trip) trip[key] = updatedTrip[key];
    } catch (error) {
      console.error("tripStore --> editTrip", error);
    }
  }; //end edit trip
} //end class

const tripStore = new profileStore();
tripStore.fetchTrips();
export default tripStore;
