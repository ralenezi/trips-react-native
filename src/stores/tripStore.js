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
      this.loading = false;
    } catch (error) {
      console.error("tripStore --> line 17 --> fetchTrips");
    }
  }; //end fetch

  //add trip
  addTrip = async (newTrip) => {
    try {
      const response = await instance.post("/trips", newTrip);
      this.trips.push(response.data);
    } catch (error) {
      console.error("error");
    }
  }; //end add trip
} //end class

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
