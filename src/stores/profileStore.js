import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ProfileStore {
  profiles = [];

  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // Edit Profile
  editProfile = async (updatedProfile) => {
    try {
      const response = await instance.put(
        `/profiles/${updatedProfile.id}`,
        updatedProfile
      );

      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      for (const key in profile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.error("profileStore --> editProfile", error);
    }
  };
}

const profileStore = new ProfileStore();
export default profileStore;
