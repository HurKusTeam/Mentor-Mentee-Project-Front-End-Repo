<template>
  <v-main>
    <MentorProfileHeader
    :name="this.users.Name" 
    :surname="this.users.Surname" 
    :major="this.users.Major"
    :university="this.users.Universities?.Name"
    :birthDate="this.users.BirthDate"
    :mail="this.users.Mail"
    :phoneNumber="this.users.PhoneNumber"
    :city="this.users.City"
    :linkedin="this.users.Linkedin"
    :github="this.users.GitHub"
    :facebook="this.users.Facebook"
    :twitter="this.users.Twitter"
    :website="this.users.Website"/>
    <MentorProfileCompanie
    v-if="this.users.IsIndividual == false" />
    <MentorProfileAdvert
    v-if="this.users.IsIndividual" />
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
      return await this.$axios.$get('/api/Profile').then((response) => {
        this.users = response
        console.log(response)
      })
    },
  },
}
</script>

<style>
</style>