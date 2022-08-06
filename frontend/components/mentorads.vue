<template>
  <v-container class="pb-0">
    <v-card class="mx-auto mb-5" max-width="1500" tile
       v-for="user in users"
       :key="user.id1"
    >
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_960_720.jpg"
      ></v-img>

      <v-row no-gutters>
        <v-col cols="12" sm="10" md="10">
          <v-list-item class="pa-5">
            <v-list-item-avatar class="ml-2" size="100">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="John"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-col>
                <v-list-item-title class="title">
                  {{ name }} {{ surname }}
                </v-list-item-title>
                <v-list-item-subtitle> <v-icon class="pa-1" size="20"> mdi-school </v-icon> {{ user.Major }} </v-list-item-subtitle>
                <v-list-item-subtitle>
                  
                  {{ university }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
                  {{ birthDate }}
                </v-list-item-subtitle> </v-col
              ><v-col>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-email </v-icon>
                  {{ mail }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-phone </v-icon>
                  {{ phoneNumber }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-map-marker </v-icon>
                  {{ city }}
                </v-list-item-subtitle></v-col
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" sm="2" md="2">
          <v-layout class="pa-3" justify-end>
            <v-btn icon :href="`https://${linkedin}`"
              ><v-icon class="pa-1" size="20"> mdi-linkedin </v-icon></v-btn
            >
            <v-btn icon :href="`https://${github}`"
              ><v-icon class="pa-1" size="20"> mdi-github </v-icon></v-btn
            >
            <v-btn icon :href="`https://${facebook}`"
              ><v-icon class="pa-1" size="20"> mdi-facebook </v-icon></v-btn
            >
            <v-btn icon :href="`https://${twitter}`"
              ><v-icon class="pa-1" size="20"> mdi-twitter </v-icon></v-btn
            >
            <v-btn icon :href="`https://${website}`"
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
  },

  mounted() {
    this.createUser()
  },

}
</script>

<style>

</style>