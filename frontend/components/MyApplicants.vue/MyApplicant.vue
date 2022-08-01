<template>
  <v-container>
    <v-card
      class="mb-6 mx-auto rounded-xl"
      max-width="1000"
      color="cyan"
      v-for="user in users"
      :key="user.id"
    >
      <v-row>
        <v-col>
          <v-card color="cyan" class="pa-2 rounded-xl" outlined tile>
            <v-list-item class="pa-5">
              <v-list-item-avatar class="ml-2" size="100">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="John"
                />
              </v-list-item-avatar>
              <v-col>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ fullName(user.name, user.surName) }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon class="pa-1" size="20">mdi-school</v-icon
                    >{{ user.department }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon class="pa-1" size="20"> mdi-town-hall </v-icon>
                    {{ user.uni }}</v-list-item-subtitle
                  >
                  <v-list-item-subtitle>
                    <v-icon class="pa-1" size="20"> mdi-account-school </v-icon>
                    {{ user.gpa }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-col>
              <v-col class="ml-4" cols="6">
                <v-icon size="20">mdi-map-marker </v-icon> {{ user.location }}
                <v-icon size="20">mdi-linkedin</v-icon> {{ user.linkedin }}
                <v-icon size="20">mdi-github</v-icon> {{ user.gitHub }}
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
                <v-btn v-on:click="sendConfirm(user.id)" color="green">
                  <v-icon>mdi-check</v-icon></v-btn
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
      users: [
        {
          id: 1,
          name: 'Semih',
          surName: 'Gür',
          department: 'Yazılım',
          uni: 'Çankaya Üniversitesi',
          gpa: 2.54,
          location: 'Ankara',
          linkedin: 'semihgur',
          gitHub: 'github',
          skills: ['c', 'go'],
        },
        {
          id: 2,
          name: 'Aust',
          surName: 'Lawhammer',
          department: 'Bilgisayar',
          uni: 'Poşet',
          gpa: 3.5,
          location: 'İstanbul',
          linkedin: 'austlawhammer',
          gitHub: 'github',
          skills: ['java', 'c#'],
        },
        {
          id: 1,
          name: 'Semih',
          surName: 'Gür',
          department: 'Yazılım',
          uni: 'Çankaya Üniversitesi',
          gpa: 2.54,
          location: 'Ankara',
          linkedin: 'semihgur',
          gitHub: 'github',
          skills: ['c', 'go'],
        },
      ],
    }
  },
  computed: {},
  methods: {
    sendConfirm(id) {
      return console.log(id)
    },
    fullName(name, surName) {
      return name + ' ' + surName
    },
  },
}
</script>

<style></style>
