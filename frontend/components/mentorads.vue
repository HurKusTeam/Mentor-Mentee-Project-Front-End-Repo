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
                  Osman Bahadır</v-list-item-title
                >
                <v-list-item-subtitle> Software Engineer </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-school </v-icon>
                  Muğla Sıtkı Koçman Üniversitesi</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
                  29.07.2022</v-list-item-subtitle
                > </v-flex
              ><v-flex>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-email </v-icon>
                  osman_bahadır@gmail.com</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-phone </v-icon>
                  05553216549</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-map-marker </v-icon>
                  Ankara</v-list-item-subtitle
                ></v-flex
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" sm="4" md="4">
          <v-layout class="pa-3" justify-end>
            <v-icon class="pa-1" size="20"> mdi-linkedin </v-icon>
            <v-icon class="pa-1" size="20"> mdi-github </v-icon>
            <v-icon class="pa-1" size="20"> mdi-facebook </v-icon>
            <v-icon class="pa-1" size="20"> mdi-twitter </v-icon>
            <v-icon class="pa-1" size="20"> mdi-web </v-icon>
          </v-layout>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>