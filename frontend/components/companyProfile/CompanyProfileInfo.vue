<template>
  <v-container class="pt-2 pb-0">
    <v-card  class="mx-auto" max-width="1000" tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title pa-3">HAKKINDA</v-list-item-title>
          <v-list-item-action-text class="pr-3 pb-3 pl-3">{{ description }}</v-list-item-action-text>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: [
    "description"
  ]
}
</script>

<style>
</style>