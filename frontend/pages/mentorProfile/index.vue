<template>
  <v-main>
    <MentorProfileHeader 
    v-if="uni != null"
    :name="this.users.Name" 
    :surname="this.users.Surname" 
    :major="this.users.Major"
    :university="this.uni.Name"
    :birthDate="this.users.BirthDate"
    :mail="this.users.Mail"
    :phoneNumber="this.users.PhoneNumber"
    :city="this.users.City"
    :linkedin="this.users.Linkedin"
    :github="this.users.GitHub"
    :facebook="this.users.Facebook"
    :twitter="this.users.Twitter"
    :website="this.users.Website"/>
    <MentorProfileCompanie />
    <MentorProfileAdvert />
    <MentorProfileInfo
    :biography="this.users.Biography" />
    <MentorProfileSkills
    :languages="this.users.Languages"
    :skills="this.users.Skills"  />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      uni: null,
    }
  },

  mounted() {
    this.createUser()
  },

  methods: {
    async createUser() {
      return await this.$axios.$get('/api/Profile/75').then((response) => {
        this.users = response
        this.uni = this.users.Universities
        console.log(response)
      })
    },
  },
}
</script>

<style>
</style>