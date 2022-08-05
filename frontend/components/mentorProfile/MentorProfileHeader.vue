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
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="John"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-col>
                <v-list-item-title class="title">
                  {{ name }} {{ surname }}
                </v-list-item-title>
                <v-list-item-subtitle> {{ major }} </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-school </v-icon>
                  {{ university }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-calendar-range </v-icon>
                  {{ birthDate }}
                </v-list-item-subtitle> </v-col
              ><v-col>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-email </v-icon>
                  {{ mail }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-phone </v-icon>
                  {{ phoneNumber }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>
                  <v-icon class="pa-1" size="20"> mdi-map-marker </v-icon>
                  {{ city }}
                </v-list-item-subtitle></v-col
              >
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

            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                  <v-icon class="pa-1" size="20"> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Adı"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Soyadı"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Branş"
                          hint="Bilgisayar Mühendisi"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="[
                            'Hacettepe Üniversitesi ',
                            'Orta Doğu Teknik Üniversitesi (ODTÜ)',
                            'Koç Üniversitesi',
                            'stanbul Teknik Üniversitesi (İTÜ)',
                            'İstanbul Üniversitesi',
                            'Ankara Üniversitesi',
                            'Gazi Üniversitesi',
                            'Ege Üniversitesi',
                            'Sabancı Üniversitesi',
                            'Yıldız Teknik Üniversitesi',
                            'Boğaziçi Üniversitesi',
                          ]"
                          label="Okulu"
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="[
                            'Skiing',
                            'Ice hockey',
                            'Soccer',
                            'Basketball',
                            'Hockey',
                            'Reading',
                            'Writing',
                            'Coding',
                            'Basejump',
                          ]"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      dialog: false,
    }
  },
  props: [
    'name',
    'surname',
    'major',
    'university',
    'birthDate',
    'mail',
    'phoneNumber',
    'city',
    'linkedin',
    'github',
    'facebook',
    'twitter',
    'website',
  ],
}
</script>

<style>
</style>