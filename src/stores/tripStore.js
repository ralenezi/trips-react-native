import instance from "./instance";
import { makeAutoObservable } from "mobx";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("tripStore --> line 17 --> fetchTrips");
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
