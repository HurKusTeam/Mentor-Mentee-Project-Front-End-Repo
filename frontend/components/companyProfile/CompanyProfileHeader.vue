<template>
  <v-container class="pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_960_720.jpg"
      ></v-img>

      <v-row no-gutters>
        <v-col cols="12" sm="10" md="10">
          <v-list-item class="pa-5">
            <v-list-item-avatar class="ml-2" size="100">
              <img
                src="https://i.pinimg.com/originals/99/7b/e0/997be08fea707cddda41d010e04d6a3e.png"
                alt="John"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-col sm="3" md="3">
                <v-list-item-title class="title">
                  {{ title }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ sector }} / {{ type }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-account-supervisor</v-icon>
                  {{ personal_count }}+</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-calendar-range</v-icon>
                  {{ since_date }}</v-list-item-subtitle
                >
              </v-col>
              <v-col sm="7" md="7">
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
              </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" sm="2" md="2">
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
      title: 'ASELSAN',
      mail: 'example@hotmail.com',
      phoneNumber: '05435391856',
      city: 'Ankara',
      since_date: '14.11.1975',
      sector: 'Yazılım',
      type: 'Özel',
      personal_count: '8888',
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
