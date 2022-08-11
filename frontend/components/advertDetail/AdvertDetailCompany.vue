<template>
  <v-card style="position: sticky; top: 0">
    <v-list-item>
      <v-list-item-content style="text-align: center">
        <v-list-item-avatar size="100">
          <img :src="`${image}`" alt="Aselsan" />
        </v-list-item-avatar>
        <v-list-item-title class="pt-3"> {{ name }} </v-list-item-title>
        <v-list-item-subtitle> {{ sector }} </v-list-item-subtitle>
        <v-list-item-subtitle class="pt-2">
          <v-icon size="20"> mdi-email </v-icon>
          {{ mail }}</v-list-item-subtitle
        >
        <v-list-item-subtitle>
          <v-icon size="20"> mdi-phone </v-icon>
          {{ phone }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ['name', 'sector', 'mail', 'phone', 'image'],
  mounted() {
    console.log(this.image)
  },
}
</script>

<style></style>
