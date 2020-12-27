import instance from "./instance";
import { makeAutoObservable } from "mobx";

class TripStore {
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
        "🚀 ~ file: tripStore.js ~ line 16 ~ TripStore ~ fetchTrips= ~ this.trips",
        this.trips
      );
      this.loading = false;
    } catch (error) {
      console.error("tripStore --> fetchTrips", error);
    }
  }; //end fetch

  //add trip
  addTrip = async (newTrip) => {
    try {
      const response = await instance.post("/trips", newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.error("tripStore --> addTrip", error);
    }
  }; //end add trip

  //edit trip
  editTrip = async (newTrip) => {
    try {
      const response = await instance.put("/trips", newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.error("tripStore --> editTrip", error);
    }
  }; //end edit trip
} //end class

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
