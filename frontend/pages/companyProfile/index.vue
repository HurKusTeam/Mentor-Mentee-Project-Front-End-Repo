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
      :website="this.users.Website"
      :description="this.users.Description"
      :profilePhoto="this.users.ProfileImage"
      @loading="getLoading"
    />
    <CompanyProfileAdvert :advertID="this.users.AdvertID" />
    <CompanyProfileInfo :description="this.users.Description" />
    <CompanyProfileCards />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      companyid: this.$route.params.companyid,
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
      if (this.companyid != null) {
        return await this.$axios
          .$get('/api/Profile/' + this.companyid)
          .then((response) => {
            this.users = response
            this.users = response
            this.uni = this.users.Universities
            console.log(this.companyid)
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