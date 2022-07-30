<template>
  <v-container class="ma-0 pa-0 pl-2">
    <v-layout row wrap class="mt-1">
      <v-flex xs12 md12>
        <v-card flat class="mx-auto" max-width="1000" min-height="200" tile>
          <v-card-title class="pa-4">Bio</v-card-title>
          <v-card-text> {{ bio }} </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md6>
        <v-card flat max-width="500">
          <v-card-title> Language </v-card-title>
          <v-card-text v-for="skill in skills" :key="skill">{{
            skill
          }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bio: 'asmndgauksdgkjasaaaaaaaaaaaaaaaaaaaaaaaaaaaaagd',
      skills: ['java', 'c#', 'unity'],
    }
  },
}
</script>

<style></style>
>
