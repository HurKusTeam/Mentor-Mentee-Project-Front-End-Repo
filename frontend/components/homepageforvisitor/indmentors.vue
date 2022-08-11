<template>
  <v-container class="pb-0">
    <v-card class="mx-auto mb-5 rounded-lg" max-width="1500" tile v-for="user in users" :key="user.id1">
      <v-img height="200"
        src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"></v-img>
      <v-row no-gutters>
        <v-col cols="12" sm="10" md="10">
          <v-list-item class="pa-5">
            <v-list-item-avatar class="ml-2" size="100">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="John" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-col>
                <v-list-item-title class="title">
                  <a class="item-link" v-on:click="sendConfirm(user.ID)">
                    {{ user.Name }} {{ user.Surname }}

                  </a>
                  <v-list-item-subtitle> {{ user.Major }} </v-list-item-subtitle>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-school </v-icon>
                  {{ user.Uni }}
                </v-list-item-subtitle>

                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
                  {{ user.Birthdate }}
                </v-list-item-subtitle>
              </v-col>
              <v-col>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-email </v-icon>
                  {{ user.Mail }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-phone </v-icon>
                  {{ user.Tel }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-map-marker </v-icon>
                  {{ user.City }}
                </v-list-item-subtitle>
              </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" sm="2" md="2">
          <v-layout class="pa-3" justify-end>
            <v-btn icon :href="`https://${user.Linkedin}`">
              <v-icon class="pa-1" size="20"> mdi-linkedin </v-icon>
            </v-btn>
            <v-btn icon :href="`https://${user.Github}`">
              <v-icon class="pa-1" size="20"> mdi-github </v-icon>
            </v-btn>
            <v-btn icon :href="`https://${user.Facebook}`">
              <v-icon class="pa-1" size="20"> mdi-facebook </v-icon>
            </v-btn>
            <v-btn icon :href="`https://${user.Twitter}`">
              <v-icon class="pa-1" size="20"> mdi-twitter </v-icon>
            </v-btn>
            <v-btn icon :href="`https://${user.Website}`">
              <v-icon class="pa-1" size="20"> mdi-web </v-icon>
            </v-btn>

            <v-flex ml-12>
              <v-btn class="mb-3" v-on:click="sendapp((user.AdID))" color="green">
               başvur! <v-icon>mdi-check</v-icon>
              </v-btn>             
            </v-flex>

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
      users: [],
      users1: [],

    }

  },

  methods: {
    async createUser() {
      return await this.$axios.$get('/api/IndividualMentors').then((response) => {
        this.users = response

        console.log(response)
      })
    },
    sendConfirm(id) {

      console.log(id)

      this.$router.push({
        name: 'mentorProfile',
        params: { mentorid: id },
      })
    },
    sendapp(advertId) {
      return this.$axios
        .$get('/api/MakeAnApplication/' + advertId)
        .then((response) => {
          console.log('response', response)
        })
    },
    
  },
   

  mounted() {
    this.createUser()
  },

}
</script>

<style>
</style>