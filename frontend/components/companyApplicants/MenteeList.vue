<template>
  <v-container>
    <v-card
      class="mb-6 mx-auto rounded-lg"
      max-width="1000"
      color=""
      v-for="user in users"
      :key="user.id"
    >
      <v-row>
        <v-col>
          <v-card class="pa-2 rounded-lg" outlined tile style="border: none">
            <v-list-item class="pa-5">
              <v-list-item-avatar class="ml-2" size="100">
                <v-btn fab to="/menteeProfile">
                  <v-img
                    height="100"
                    width="100"
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="John"
                /></v-btn>
              </v-list-item-avatar>
              <v-col sm12 md12>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ fullName(user.User?.Name, user.User?.Surname) }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon class="pa-1" size="20">mdi-school</v-icon
                    >{{ user.Mentee?.Department }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon class="pa-1" size="20"> mdi-town-hall </v-icon>
                    {{ user.Userdefault?.Universities }}</v-list-item-subtitle
                  >
                  <v-list-item-subtitle>
                    <v-icon class="pa-1" size="20"> mdi-account-school </v-icon>
                    {{ user.Mentee?.GPA }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-col>
              <v-col sm12 md12 class="ml-4" cols="6">
                <v-flex>
                  <v-icon size="20">mdi-map-marker </v-icon>
                  {{ user.User?.City }} <v-icon size="20">mdi-linkedin</v-icon>
                  {{ user.About?.Linkedin }}
                  <v-icon size="20">mdi-github</v-icon>
                  {{ user.About?.GitHub }}
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
              <v-col sm12 md12>
                <p
                  class="green--text text-xl font-weight-black"
                  v-if="user.Percent >= 70"
                >
                  %{{ user.Percent }} Eşleşme
                </p>
                <p
                  class="amber--text text-xl font-weight-black"
                  v-if="user.Percent >= 50 && user.Percent < 70"
                >
                  %{{ user.Percent }} Eşleşme
                </p>
                <p
                  class="red--text text-xl font-weight-black"
                  v-if="user.Percent < 50"
                >
                  %{{ user.Percent }} Eşleşme
                </p>
                <v-btn
                  class="mb-3 mt-3"
                  v-on:click="sendConfirm(user.ID)"
                  color="green"
                >
                  <v-icon>mdi-account-multiple-check</v-icon></v-btn
                >
              </v-col>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      tweened: 0,
      mentorId: this.$route.params.mentorId,
      userDatas: [],
      users: [
        {
          id: 1,
          UserName: '',
          surName: '',
          department: '',
          Universities: '',
          gpa: 2.54,
          location: '',
          linkedin: '',
          gitHub: '',
          skills: ['c'],
        },
      ],
    }
  },

  mounted() {
    console.log(this.mentorId)
    this.getUserData()
  },

  methods: {
    getUserData() {
      return this.$axios
        .$get('/api/MatchMenteeMentor/' + this.mentorId)
        .then((response) => {
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
