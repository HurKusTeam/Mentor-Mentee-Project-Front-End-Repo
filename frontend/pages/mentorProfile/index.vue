<template>
  <v-main>
    <MentorProfileHeader :name="this.users.Name" :surname="this.users.Surname" :major="this.users.Major"
      :university="this.users.University" :birthDate="this.users.BirthDate" :mail="this.users.Mail"
      :phoneNumber="this.users.PhoneNumber" :city="this.users.City" :linkedin="this.users.Linkedin"
      :github="this.users.GitHub" :facebook="this.users.Facebook" :twitter="this.users.Twitter"
      :website="this.users.Website" :companyId="this.users.CompanyID" :profilePhoto="this.users.ProfileImage"
      :biography="this.users.Biography" @loading="getLoading" />
    <MentorProfileCompanie v-if="this.users.IsIndividual == false" :title="this.users.Title" :sector="this.users.Sector"
      :personal="this.users.PersonalCount" :sinceDate="this.users.SinceDate" :desctiption="this.users.Description" />
    <MentorProfileAdvert v-if="this.users.IsIndividual" :advertID="this.users.AdvertID" />
    <MentorProfileInfo :biography="this.users.Biography" />
    <MentorProfileSkills :languages="this.users.Languages" :skills="this.users.Skills" @loading="getLoading" />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      loading: true,
      mentorid: this.$route.params.mentorid,
    }
  },

  mounted() {
    this.createUser()
  },

  methods: {
    async getLoading(e) {
      this.loading = e
      if (this.loading) {
        this.$axios.$get('/api/Profile').then((response) => {
          this.users = response
          console.log(response)
        })
      }
    },
    async createUser() {
      if (this.mentorid != null) {
        return await this.$axios.$get('/api/Profile/' + this.mentorid)
          .then((response) => {
            this.users = response
            console.log(response)
            console.log(this.mentorid)
          })
      } else {
        return await this.$axios.$get('/api/Profile').then((response) => {

          this.users = response
          console.log(response)

        })



      }
    },
  },
}
</script>

<style>
</style>