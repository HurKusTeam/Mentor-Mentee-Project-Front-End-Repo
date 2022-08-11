<template>
  <v-container class="pt-2 pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-list-item class="pa-5">
        <v-list-item-avatar class="ml-2" size="100">
          <img :src="`${image}`" alt="TUSAŞ" />
        </v-list-item-avatar>
        <v-flex>
          <v-list-item-content>
            <v-list-item-title class="title"> {{ title }}</v-list-item-title>
            <v-list-item-subtitle> {{ sector }} </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-account-supervisor </v-icon>
              {{ personal }}+</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
              {{ sinceDate }}</v-list-item-subtitle
            >
          </v-list-item-content></v-flex
        ><v-flex pl-10>
          <v-list-item-content>
            <v-list-item-action-text>{{
              desctiption
            }}</v-list-item-action-text></v-list-item-content
          >
        </v-flex>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['title', 'sector', 'personal', 'sinceDate', 'desctiption', 'image'],
}
</script>

<style></style>
