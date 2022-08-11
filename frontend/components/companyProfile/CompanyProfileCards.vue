<template>
  <v-container class="pt-2 pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-sheet class="mx-auto" elevation="8">
        <v-slide-group class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="(mentor, i) in mentors" :key="i">
            <v-card class="ma-4" height="250" width="300">
              <v-list-item>
                <v-list-item-content style="text-align: center">
                  <v-list-item-avatar size="100">
                    <img :src="`${mentor.Profile.ProfileImage}`" alt="John" />
                  </v-list-item-avatar>
                  <v-btn text @click="goMentor(mentor.Mentor.UserID)">
                    <v-list-item-title class="pt-3">
                      {{ mentor.Profile.Name }} {{ mentor.Profile.Surname }}
                    </v-list-item-title>
                  </v-btn>
                  <v-list-item-subtitle>
                    {{ mentor.Mentor.Major }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="pt-2">
                    <v-icon size="20"> mdi-email </v-icon>
                    {{ mentor.User.Mail }}</v-list-item-subtitle
                  >
                  <v-list-item-subtitle>
                    <v-icon size="20"> mdi-phone </v-icon>
                    {{ mentor.Profile.PhoneNumber }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mentors: [],
    }
  },
  mounted() {
    this.getMentors()
  },

  methods: {
    async getMentors() {
      return this.$axios.$get('/api/MyMentors').then((response) => {
        this.mentors = response
        console.log(response)
      })
    },
    goMentor(id) {
      console.log(id)
      this.$router.push({
        name: 'mentorProfile',
        params: { mentorid: id },
      })
    },
  },
}
</script>

<style>
.v-application .elevation-8 {
  box-shadow: none !important;
}
</style>