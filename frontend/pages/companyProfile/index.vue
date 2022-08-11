<template>
  <v-main>
      <v-flex justify-center xs10 class="mx-auto">
        <v-progress-circular
          v-if="reload"
          :size="100"
          :width="10"
          color="#c1b3fd"
          style="text-align: center; !important"
          indeterminate
        ></v-progress-circular>
    </v-flex>
    <CompanyProfileHeader
      v-if="!reload"
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
    <CompanyProfileAdvert v-if="!reload" :advertID="this.users.AdvertID" />
    <CompanyProfileInfo v-if="!reload" :description="this.users.Description" />
    <CompanyProfileCards v-if="!reload" />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      reload:false,
      companyid: this.$route.params.companyid,
    }
  },

  mounted() {
    this.createUser()
  },

  methods: {
    async getLoading(e) {
      this.reload = true
      this.loading = e
      if (this.loading) {
        this.$axios.$get('/api/Profile').then((response) => {
          this.users = response
          this.reload = false
          console.log(response)
        })
      }
    },

    async createUser() {
      this.reload = true
      if (this.companyid != null) {
        return await this.$axios
          .$get('/api/Profile/' + this.companyid)
          .then((response) => {
            this.users = response
            this.users = response
            this.reload = false
            this.uni = this.users.Universities
            console.log(this.companyid)
          })
      } else {
        return await this.$axios.$get('/api/Profile').then((response) => {
          this.users = response
          this.reload = false

          console.log(response)
        })
      }
    },
  },
}
</script>