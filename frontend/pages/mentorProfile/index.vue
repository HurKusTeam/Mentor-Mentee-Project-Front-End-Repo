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
    <MentorProfileHeader
      v-if="!reload"
      :name="this.users.Name"
      :surname="this.users.Surname"
      :major="this.users.Major"
      :university="this.users.University"
      :birthDate="this.users.BirthDate"
      :mail="this.users.Mail"
      :phoneNumber="this.users.PhoneNumber"
      :city="this.users.City"
      :linkedin="this.users.Linkedin"
      :github="this.users.GitHub"
      :facebook="this.users.Facebook"
      :twitter="this.users.Twitter"
      :website="this.users.Website"
      :companyId="this.users.CompanyID"
      :profilePhoto="this.users.ProfileImage"
      :biography="this.users.Biography"
      @loading="getLoading"
    />
    <MentorProfileCompanie
      v-if="this.users.IsIndividual == false && !reload"
      :title="this.users.Title"
      :sector="this.users.Sector"
      :image="this.users.CompanyImg"
      :personal="this.users.PersonalCount"
      :sinceDate="this.users.SinceDate"
      :desctiption="this.users.Description"
    />
    <MentorProfileAdvert
      v-if="this.users.IsIndividual && !reload"
      :advertID="this.users.AdvertID"
    />
    <MentorProfileInfo v-if="!reload" :biography="this.users.Biography" />
    <MentorProfileSkills
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
      mentorid: this.$route.params.mentorid,
    }
  },
  mounted() {
    this.createUser()
  },

  methods: {
    async getLoading(e) {
      this.loading = e
      this.reload = true
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

<style></style>
