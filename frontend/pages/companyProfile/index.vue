<template>
  <v-main>
    <CompanyProfileHeader 
    :title="this.users.Title" 
    :sector="this.users.Sector"
    :personalCount="this.users.PersonalCount"
    :sinceDate="this.users.SinceDate"
    :mail="this.users.Mail"
    :phoneNumber="this.users.PhoneNumber"
    :city="this.users.City"
    :linkedin="this.users.Linkedin"
    :github="this.users.GitHub"
    :facebook="this.users.Facebook"
    :twitter="this.users.Twitter"
    :website="this.users.Website"/>
    <CompanyProfileAdvert />
    <CompanyProfileInfo 
    :description="this.users.Description" />
    <CompanyProfileCards/> 
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
        this.uni = this.users.Universities
        console.log(response)
      })
    },
  },
}
</script>