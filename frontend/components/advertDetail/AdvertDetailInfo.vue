<template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title pa-3 pb-2">İLAN</v-list-item-title>

        <v-list-item-subtitle class="pl-1 pb-1">
          <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
          {{startDate}} / {{endDate}}</v-list-item-subtitle
        >
        <v-list-item-action-text class="pr-3 pb-3 pl-3"
          >{{details}}</v-list-item-action-text
        >
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ['startDate', 'endDate', 'details'],
}
</script>

<style>
</style>