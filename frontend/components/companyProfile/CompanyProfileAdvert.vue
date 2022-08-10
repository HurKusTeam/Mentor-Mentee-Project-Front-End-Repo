<template>
  <v-container class="pt-2 pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title pa-3 pb-2">İLAN</v-list-item-title>

          <v-list-item-subtitle class="pl-1 pb-1">
            <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
            {{this.advert.Advert?.StartDate}} / {{this.advert.Advert?.EndDate}}</v-list-item-subtitle
          >
          <v-list-item-action-text class="pr-3 pb-3 pl-3"
            >{{this.advert.Advert?.Description}}</v-list-item-action-text
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      advert: [],
    }
  },
  props: [
    'advertID'
  ],

  mounted(){
    this.createAdvert()
  },

  methods: {
    async  createAdvert() {
      return await this.$axios.$get("/api/GetAdvertSolo/" + this.advertID).then((response) => {
        this.advert = response
        console.log(response)
      })
    },
  },
}
</script>

<style>
</style>