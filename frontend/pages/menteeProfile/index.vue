<template>
  <v-main>
    <MenteeProfileHeader
      :name="this.users.Name"
      :surname="this.users.Surname"
      :major="this.users.Department"
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
      :website="this.users.Website"
      :profilePhoto="this.users.ProfileImage"
      :about="this.users.Biography"
      @loading="getLoading"
    />
    <MenteeProfileInfo :biography="this.users.Biography" />
    <MenteeProfileSkills
      :languages="this.users.Languages"
      :skills="this.users.Skills"
      @loading="getLoading"
    />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      loading: true,
    }
  },

  mounted() {
    this.createUser()
  },

  methods: {
    async getLoading(e) {
      this.loading = e
      if (this.loading) {
        await this.$axios.$get('/api/Profile').then((response) => {
          this.users = response
          console.log(this.loading)
        })
      }
    },
    async createUser() {
      return await this.$axios.$get('/api/Profile').then((response) => {
        this.users = response
        console.log(response)
      })
    },
  },
}
</script>
