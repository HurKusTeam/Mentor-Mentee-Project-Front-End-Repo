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
    <MenteeProfileHeader
      v-if="!reload"
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
    <MenteeProfileInfo v-if="!reload" :biography="this.users.Biography" />
    <MenteeProfileSkills
      v-if="!reload"
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
      reload: false,
      mentorid: this.$route.params.menteeId,
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
        await this.$axios.$get('/api/Profile').then((response) => {
          this.users = response
          this.reload = false
          console.log(this.loading)
        })
      }
    },
    async createUser() {
      this.reload = true
      console.log("menteeid",this.mentorid)
      if (this.mentorid != null) {
        return await this.$axios
          .$get('/api/Profile/' + this.mentorid)
          .then((response) => {
            this.users = response
            this.reload = false
            console.log(response)
            console.log(this.mentorid)
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
