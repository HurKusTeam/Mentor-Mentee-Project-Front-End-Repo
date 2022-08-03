<template>
  <v-container class="pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_960_720.jpg"
      ></v-img>

      <v-row no-gutters>
        <v-col cols="12" sm="8" md="8">
          <v-list-item class="pa-5">
            <v-list-item-avatar class="ml-2" size="100">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="John"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-flex>
                <v-list-item-title class="title">
                  {{ name }} {{ surName }}
                </v-list-item-title>

                <v-list-item-subtitle> {{ department }}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-school</v-icon>
                  {{ uni }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-account-school</v-icon>
                  {{ gpa }}</v-list-item-subtitle
                >
              </v-flex>
              <v-flex>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-email</v-icon>
                  {{ mail }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-phone</v-icon>
                  {{ phoneNumber }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-map-marker</v-icon>
                  {{ city }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-account-plus</v-icon>
                  {{ menteeCount }}</v-list-item-subtitle
                >
              </v-flex>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" sm="4" md="4">
          <v-layout class="pa-3" justify-end>
            <v-btn icon
              ><v-icon class="pa-1" size="20"> mdi-linkedin </v-icon></v-btn
            >
            <v-btn icon
              ><v-icon class="pa-1" size="20"> mdi-github </v-icon></v-btn
            >
            <v-btn icon
              ><v-icon class="pa-1" size="20"> mdi-facebook </v-icon></v-btn
            >
            <v-btn icon
              ><v-icon class="pa-1" size="20"> mdi-twitter </v-icon></v-btn
            >
            <v-btn icon
              ><v-icon class="pa-1" size="20"> mdi-web </v-icon></v-btn
            >
          </v-layout>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: 'Semih',
      surName: 'Gür',
      mail: 'example@hotmail.com',
      phoneNumber: '05435391856',
      city: 'Ankara',
      uni: 'Çankaya Üniversitesi',
      department: 'Yazılım Mühendisliği',
      gpa: '2.55',
      menteeCount: '54',
      mentorId: 1,
      userId: 1,

      skills: ['java', 'c#', 'unity'],
    }
  },
  methods: {
    isMentor() {
      if (this.userId == this.mentorId) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>
