<template>
  <v-container class="pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2017/01/16/19/40/mountains-1985027_960_720.jpg"
      ></v-img>

      <v-row no-gutters>
        <v-col cols="12" sm="10" md="10">
          <v-list-item class="pa-5">
            <v-list-item-avatar class="ml-2" size="100">
              <img v-if="profilePhoto" :src="`${profilePhoto}`" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-col sm="3" md="3">
                <v-list-item-title class="title">
                  {{ title }}
                </v-list-item-title>

                <v-list-item-subtitle> {{ sector }}</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-account-supervisor</v-icon>
                  {{ personalCount }}+</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-calendar-range</v-icon>
                  {{ sinceDate }}</v-list-item-subtitle
                >
              </v-col>
              <v-col sm="7" md="7">
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-email</v-icon>
                  {{ mail }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-phone</v-icon>
                  {{ phoneNumber }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20">mdi-map-marker</v-icon>
                  {{ city }}</v-list-item-subtitle
                >
              </v-col>
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
            <v-file-input
              hide-input
              type="file"
              @change="updatePhoto"
              prepend-icon="mdi-image-edit"
              class="ma-0 pa-0 pl-1"
            ></v-file-input>
            <CompanyProfileEdit
              :name="title"
              :sector="sector"
              :employee="personalCount"
              :date="sinceDate"
              :mail="mail"
              :phone="phoneNumber"
              :linkedin="linkedin"
              :github="github"
              :facebook="facebook"
              :twitter="twitter"
              :web="website"
              :city="city"
              :about="description"
              @loading="getLoading"
            />
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
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      companyid: this.$route.params.companyid,
      loading: true,
    }
  },
  props: [
    'title',
    'sector',
    'personalCount',
    'sinceDate',
    'mail',
    'phoneNumber',
    'city',
    'linkedin',
    'github',
    'facebook',
    'twitter',
    'website',
    'profilePhoto',
    'description',
  ],
  methods: {
    async getLoading(e) {
      this.$emit('loading', e)
    },
    async updatePhoto(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        if (file) {
          reader.readAsDataURL(file)
        }
        reader.onload = async () => {
          resolve((this.photo = reader.result))
          let p = {
            Image: this.photo,
          }
          await this.$axios.$post('/api/ProfileImg/', p).then(() => {
            this.$emit('loading', this.loading)
          })
        }
      })
    },
  },
}
</script>
