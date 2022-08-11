<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text> İlan Oluştur </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">İlan oluştur.</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="12">
              <v-text-field
                v-model="adtitle"
                label="Başlık"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea
                v-model="addescription"
                outlined
                name="input-7-4"
                label="İlanın içeriği"
              ></v-textarea>
            </v-col>

            <v-row>
              <v-col cols="12" sm="6">
                <v-date-picker
                  v-model="dates"
                  format="MMMM Do YYYY, h:mm:ss a"
                  range
                  no-title
                ></v-date-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="dateRangeText"
                  label="Seçilen Tarihler"
                  prepend-icon="mdi-calendar"
                  readonly
                ></v-text-field>
                -Başlangıç tarihi: {{ dates[0] }}
                <br />
                <p>-Bitiş tarihi: {{ dates[1] }}</p>
              </v-col>
            </v-row>
          </v-row>
        </v-container>
        <small>İlanınızın detayını ve tarihlerini eksiksiz girin</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Kapat
        </v-btn>
        <v-btn color="blue darken-1" text @click="createAdvert"> Kaydet </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dates: [],
    adtitle: null,
    addescription: null,
  }),
  props: ['userId'],
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    },
  },

  methods: {
    async createAdvert() {
      let AdvertModel = {
        Title: this.adtitle,
        Description: this.addescription,
        Startdate: this.dates[0],
        Enddate: this.dates[1],
      }
      console.log(AdvertModel)

      return await this.$axios
        .$post('/api/AddAdvert/' + this.userId, AdvertModel)
        .then((response) => {
          console.log(response)
          window.localStorage.setItem('advertId', response.ID),

          this.dialog = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style>
</style>