<template>
  <v-container>
    <v-card
      class="mb-6 mx-auto rounded-lg"
      max-width="1000"
      color=""
      v-for="user in users"
      :key="user.id"
    >
      <v-list-item class="pa-5">
        <v-list-item-avatar class="ml-2" size="100">
          <v-img
            height="100"
            width="100"
            :src="`${user.UserProf?.ProfileImage}`"
            alt="John"
          />
        </v-list-item-avatar>
        <v-col sm-4 md-4>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ user.Company?.Title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20">mdi-office-building</v-icon
              >{{ user.Company?.Sector }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-icon class="pa-1" size="20">mdi-phone</v-icon
              >{{ user.UserProf?.PhoneNumber }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-col>

        <v-col>
          <p
            class="amber--text font-weight-bold"
            v-if="user.Applications?.Status === 1"
          >
            <v-icon>mdi-clock</v-icon> Başvurunuz Değerlendiriliyor...
          </p>
          <p
            class="green--text font-weight-bold"
            v-if="user.Applications?.Status === 2"
          >
            <v-icon>mdi-check</v-icon> Başvurunuz Kabul Edildi
          </p>
          <p
            class="red--text font-weight-bold"
            v-if="user.Applications?.Status === 3"
          >
            <v-icon>mdi-close-circle</v-icon> Başvurunuz Reddedildi
          </p>
        </v-col>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userDatas: [],
      props:['userId'],
      users: [],
    }
  },
  mounted() {
    this.getUserData()
    console.log("page", this.userId)
  },

  methods: {
    getUserData() {
      return this.$axios.$get('/api/MyApplications/'+ this.userId).then((response) => {
        this.users = response

        console.log('response', response)
      })
    },
    sendConfirm(id) {
      return console.log(id)
    },
    sendDeny(id) {
      return console.log(id)
    },
    fullName(name, surName) {
      return name + ' ' + surName
    },
  },
}
</script>

<style></style>
