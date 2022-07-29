<template>
  <v-container class="ma-1 pa-1">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_960_720.jpg"
      ></v-img>

      <v-row no-gutters>
        <v-col cols="12" sm="8" md="8">
          <v-card class="pa-2" outlined tile>
            <v-list-item>
              <v-list-item-avatar size="100">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="John"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-flex>
                  <v-list-item-title class="title">
                    {{ name }} {{ surName }}
                    <v-btn
                      class="ml-2 mb-2"
                      color="#C5D3C5"
                      elevation="1"
                      x-small
                      ><v-icon>mdi-feather</v-icon></v-btn
                    >
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
          </v-card>
        </v-col>
        <v-col cols="6" sm="4" md="4">
          <v-card class="pa-3" outlined tile>
            <v-layout justify-end>
              <v-icon class="pa-1" size="20"> mdi-linkedin </v-icon>
              <v-icon class="pa-1" size="20"> mdi-github </v-icon>
              <v-icon class="pa-1" size="20"> mdi-facebook </v-icon>
              <v-icon class="pa-1" size="20"> mdi-twitter </v-icon>
              <v-icon class="pa-1" size="20"> mdi-web </v-icon>
            </v-layout>
            <v-layout justify-end align-end class="mt-5">
              <v-btn v-if="isMentor()" color="">TODO</v-btn>
            </v-layout>
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
