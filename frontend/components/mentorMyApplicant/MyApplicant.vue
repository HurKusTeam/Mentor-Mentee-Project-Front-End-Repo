<template>
  <v-container>
    <v-card
      class="mb-6 mx-auto rounded-lg"
      max-width="1000"
      style="border: none"
    >
      <v-toolbar class="mb-2" width="1000" dense>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>
      </v-toolbar>
    </v-card>
    <v-card
      class="mb-6 mx-auto rounded-lg"
      max-width="1000"
      color=""
      v-for="user in users"
      :key="user.id"
    >
      <v-list-item class="pa-5">
        <v-list-item-avatar class="ml-2" size="100">
          <v-btn fab to="/menteeProfile">
            <v-img
              height="100"
              width="100"
              :src="`${user.Profile?.ProfileImage}`"
              alt="John"
          /></v-btn>
        </v-list-item-avatar>
        <v-col sm-4 md-4>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ fullName(user.Profile?.Name, user.Profile?.Surname) }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20">mdi-school</v-icon
              >{{ user.Universities }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-town-hall </v-icon>
              {{ user.Major }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-account-school </v-icon>
              {{ user.gpa }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-col>
        <v-col sm-4 md-4>
          <v-flex>
            <v-icon size="20">mdi-map-marker </v-icon>
            {{ user.location }}
            <v-icon size="20">mdi-linkedin</v-icon>
            {{ user.linkedin }}
            <v-icon size="20">mdi-github</v-icon>
            {{ user.gitHub }}
          </v-flex>
          <v-flex class="mt-2">
            <v-icon>mdi-star</v-icon>
            <v-list-item-action-subtitle
              v-for="skill in user.skills"
              :key="skill"
            >
              {{ skill }},</v-list-item-action-subtitle
            >
          </v-flex>
        </v-col>
        <v-col>
          <v-flex ml-12>
            <v-btn
              class="mb-3"
              v-on:click="sendConfirm(user.Advertidmodel, user.User?.ID)"
              color="green"
            >
              <v-icon>mdi-check</v-icon></v-btn
            >
            <v-btn
              v-on:click="sendDeny(user.Advertidmodel, user.User?.ID)"
              color="red"
            >
              <v-icon>mdi-close</v-icon></v-btn
            >
          </v-flex>
        </v-col>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mentorid: this.$route.params.mentorid,
      userDatas: [],
      users: [
        {
          id: 1,
          UserName: 'Semih',
          surName: 'Gür',
          department: 'Yazılım',
          Universities: 'Çankaya Üniversitesi',
          gpa: 2.54,
          location: 'Ankara',
          linkedin: 'semihgur',
          gitHub: 'github',
          skills: ['c', 'go'],
        },
      ],
    }
  },
  mounted() {
    this.getUserData()
  },

  methods: {
    getUserData() {
      return this.$axios
        .$get('/api/ReceivedApplications/' + this.mentorid)
        .then((response) => {
          this.users = response

          console.log('response', response)
        })
    },
    sendConfirm(advertId, userId, companyId) {
      return this.$axios
        .$get('/api/AcceptApplication/' + advertId + '/' + userId + '/' + '15')
        .then((response) => {
          console.log('response', response)
        })
    },
    sendDeny(advertId, userId) {
      return this.$axios
        .$get('/api/RejectApplication/' + advertId + '/' + userId)
        .then((response) => {
          console.log('response', response)
        })
    },
    fullName(name, surName) {
      return name + ' ' + surName
    },
  },
}
</script>

<style></style>
