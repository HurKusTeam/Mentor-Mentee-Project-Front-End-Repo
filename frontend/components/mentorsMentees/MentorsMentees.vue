<template>
  <v-container>
    <v-card
      class="pa-2 mb-6 mx-auto rounded-lg"
      max-width="1000"
      color=""
      v-for="user in users"
      :key="user.MenteeID"
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
              {{ user.Name }} {{ user.Surname }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ user.Department }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-town-hall </v-icon>
              {{ user.University }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-phone </v-icon>
              numara</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-email </v-icon>
              mail</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-col>
        <v-col cols="4">
          <v-flex>
            <v-icon size="20">mdi-map-marker </v-icon>
            {{ user.City }} <v-icon size="20">mdi-linkedin</v-icon>
            {{ user.Linkedin }} <v-icon size="20">mdi-github</v-icon>
            {{ user.Github }}
          </v-flex>
          <v-flex class="mt-2">
            <v-icon>mdi-star</v-icon>
            <v-list-item-action-subtitle
              v-for="(skill, i) in user.Skill"
              :key="i"
            >
              {{ skill }},</v-list-item-action-subtitle
            >
          </v-flex>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="mb-3 mt-3"
            to="/meetings"
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
      users: [],
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      return this.$axios.$get('/api/MenteeList').then((response) => {
        this.users = response
        console.log(response)
      })
    },
  },
}
</script>

<style></style>