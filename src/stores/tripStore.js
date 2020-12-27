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

  //delete trip
  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== +tripId);
    } catch (error) {
      console.log("TripStore -> deleteTrip -> error", error);
    }
  };

  //find user
  findUser = async (userId) => {
    try {
      const response = await instance.get(`/users/${userId}`);
      console.log("TripStore -> findUser -> response", response.data);
    } catch (error) {
      console.log("TripStore -> findUser -> error", error);
    }
  };
} //end class

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
