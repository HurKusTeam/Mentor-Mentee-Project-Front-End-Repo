<template>
  <v-main>
    <MenteeProfileHeader
    :name="this.users.Name" 
    :surname="this.users.Surname" 
    :major="this.users.Major"
    :university="this.users.University"
    :gpa="this.users.GPA"
    :mail="this.users.Mail"
    :phoneNumber="this.users.PhoneNumber"
    :city="this.users.City"
    :menteeCount="this.users.MenteeCount"
    :linkedin="this.users.Linkedin"
    :github="this.users.GitHub"
    :facebook="this.users.Facebook"
    :twitter="this.users.Twitter"
    :website="this.users.Website" />
    <MenteeProfileInfo
    :biography="this.users.Biography"  />
    <MenteeProfileSkills 
    :languages="this.users.Languages"
    :skills="this.users.Skills"  />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
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
