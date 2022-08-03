<template>
  <v-container>
    <v-flex>
      <v-card
        class="mb-6 mx-auto rounded-lg"
        max-width="1000"
        color=""
        v-for="user in users"
        :key="user.id"
      >
        <v-row>
          <v-col sm12 md12>
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
                      {{ fullName(user.UserName, ' ') }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <v-icon class="pa-1" size="20">mdi-school</v-icon
                      >{{ user.department }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <v-icon class="pa-1" size="20"> mdi-town-hall </v-icon>
                      {{ user.Universities }}</v-list-item-subtitle
                    >
                    <v-list-item-subtitle>
                      <v-icon class="pa-1" size="20">
                        mdi-account-school
                      </v-icon>
                      {{ user.gpa }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-col>
                <v-col sm12 md12 class="ml-4" cols="6">
                  <v-flex>
                    <v-icon size="20">mdi-map-marker </v-icon>
                    {{ user.location }} <v-icon size="20">mdi-linkedin</v-icon>
                    {{ user.linkedin }} <v-icon size="20">mdi-github</v-icon>
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
                <v-col sm12 md12>
                  <v-btn
                    class="mb-3 mt-3"
                    v-on:click="sendConfirm(user.ID)"
                    color="green"
                  >
                    <v-icon>mdi-check</v-icon></v-btn
                  >
                  <v-btn v-on:click="sendDeny(user.ID)" color="red">
                    <v-icon>mdi-close</v-icon></v-btn
                  >
                </v-col>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
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
      return this.$axios.$get('/api/GetUsers').then((response) => {
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
