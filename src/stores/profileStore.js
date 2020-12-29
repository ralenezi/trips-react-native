import instance from './instance'
import { makeAutoObservable } from 'mobx'
import authStore from '../stores/authStore'

class ProfileStore {
  profile = []

  loading = true

  constructor() {
    makeAutoObservable(this)
  }

  //fetch profile
  fetchProfile = async (userId) => {
    try {
      const response = await instance.get(`/profiles/${userId}`)
      this.profile = response.data
      this.loading = false
    } catch (error) {
      console.error('profileStore --> fetchProfile', error)
    }
  }

  // Edit Profile
  editProfile = async (updatedProfile) => {
    try {
      const response = await instance.put(
        `/profiles/${updatedProfile.id}`,
        updatedProfile
      )

      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      )
      for (const key in profile) profile[key] = updatedProfile[key]
    } catch (error) {
      console.error('profileStore --> editProfile', error)
    }
  }
}

const profileStore = new ProfileStore()
profileStore.fetchProfile(authStore.user.id)
export default profileStore
