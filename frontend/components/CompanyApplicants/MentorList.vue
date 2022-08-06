<template>
  <v-container>
    <v-card
      class="mb-6 pa-2 mx-auto rounded-lg"
      max-width="1000"
      color=""
      v-for="user in users"
      :key="user.id"
    >
      <v-list-item class="pa-5">
        <v-list-item-avatar class="ml-2" size="100">
          <v-img
            height="100"
            width="100"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="John"
          />
        </v-list-item-avatar>
        <v-col cols="4">
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ fullName(user.Profile.Name, user.Profile.Surname) }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20">mdi-school</v-icon
              >{{ user.Mentor.Major }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-phone </v-icon>
              {{ user.Profile.PhoneNumber }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-email </v-icon>
              {{ user.User.Mail }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-col>
        <v-col cols="4" class="ml-4">
          <v-flex>
            <v-icon size="20">mdi-map-marker </v-icon>
            {{ user.Profile.City }}
            <v-icon size="20">mdi-linkedin</v-icon>
            {{ user.About.Linkedin }}
            <v-icon size="20">mdi-github</v-icon>
            {{ user.About.GitHub }}
          </v-flex>
          <v-flex class="mt-2">
            <v-icon>mdi-star</v-icon>
            <v-list-item-action-subtitle
              v-for="skill in user.Skills"
              :key="skill"
            >
              {{ skill.Name }},</v-list-item-action-subtitle
            >
          </v-flex>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="mb-3 mt-3"
            v-on:click="sendConfirm(user.ID)"
            to="/companyApplicants/menteeListPage"
            color="green"
          >
            <v-icon>mdi-clipboard-account</v-icon>
          </v-btn>
        </v-col>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userDatas: [],
      users: [
        {
          id: 1,
          Name: 'Semih',
          Surname: 'Gür',
          Major: 'Yazılım',
          Skills: ['c', 'go'],
          City: 'Ankara',
          Profile: [],
          About: [],
          Mentor: [],
          User: [],
        },
      ],
    }
  },
  mounted() {
    this.getUserData()
  },

  methods: {
    async getUserData() {
      return this.$axios.$get('/api/MyMentors').then((response) => {
        this.users = response
        console.log(response)
      })
    },
    sendConfirm(id) {
      return console.log(id)
    },
    sendDeny(id) {
      return console.log(id)
    },
    fullName(name, surName) {
      return name + ' ' + surName
    },
  },
}
</script>

<style></style>
