<template>
  <v-card style="position: sticky; top: 0;">
    <v-list-item>
      <v-list-item-content style="text-align: center">
        <v-list-item-avatar size="100">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="John"
          />
        </v-list-item-avatar>
        <v-list-item-title v-if="users.length != 0" class="pt-3"> {{ this.users[2].UserName }} </v-list-item-title>
        <v-list-item-subtitle> Software Engineer </v-list-item-subtitle>
        <v-list-item-subtitle class="pt-2">
          <v-icon size="20"> mdi-email </v-icon>
          furkan_berber@gmail.com</v-list-item-subtitle
        >
        <v-list-item-subtitle>
          <v-icon size="20"> mdi-phone </v-icon>
          05553216549</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },

  mounted(){
    this.createUser()
  },

  methods: {
    async  createUser() {
      return await this.$axios.$get("/api/GetAllAdverts").then((response) => {
        this.users = response
        console.log(response)
      })
    },
  },
}
</script>

<style>
</style>