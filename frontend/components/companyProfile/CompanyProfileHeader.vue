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
                src="https://i.pinimg.com/originals/99/7b/e0/997be08fea707cddda41d010e04d6a3e.png"
                alt="John"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-col sm="3" md="3">
                <v-list-item-title class="title">
                  {{ title }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ sector }}</v-list-item-subtitle
                >
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

            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                  <v-icon class="pa-1" size="20"> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Profil Düzenleme</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Şirket Adı" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Sektör"
                          hint="Yazılım"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Çalışan Sayısı"
                          hint="10.000"
                          type="number"
                          min="0"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Kuruluş Tarihi"
                          type="date"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          hint="örnek_mail@gmail.com"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3">
                        <v-text-field
                          label="Linkedin"
                          hint="linkedin.com"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <v-text-field
                          label="Github"
                          hint="github.com"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3">
                        <v-text-field
                          label="Facebook"
                          hint="facebook.com"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <v-text-field
                          label="Twitter"
                          hint="twitter.com"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <v-text-field
                          label="Website"
                          hint="örnek.com"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*Doldurulması zorunlu alanlar</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Kapat
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Kaydet
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
  ],
}
</script>
