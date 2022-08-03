<template>
  <v-container class="pt-2 pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-timeline class="pa-8">
        <v-timeline-item
          fill-dot
          class="white--text mb-12"
          color="orange"
          large
        >
          <template v-slot:icon>
            <span>JL</span>
          </template>
          <v-row>
            <v-col class="d-flex pa-0 pl-0 pr-1" cols="12" sm="4">
              <v-text-field
                v-model="input"
                hide-details
                dense
                flat
                label="Youtube link"
                outlined
                @keydown.enter="comment"
              >
              </v-text-field>
            </v-col>
            <v-col class="d-flex pa-0 pl-1 pr-1" cols="12" sm="4">
              <v-dialog v-model="dialog" persistent max-width="350px" align-self="center">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed v-bind="attrs" v-on="on"> Renkler </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Renk seçiniz</span>
                  </v-card-title>
                  <v-card-text>
                    <v-color-picker
                      dot-size="25"
                      mode="hexa"
                      swatches-max-height="200"
                    ></v-color-picker>
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
            </v-col>

            <v-col class="d-flex pl-1 pa-0" cols="12" sm="4">
              <v-btn class="mx-0" depressed @click="comment"> Ekle </v-btn>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Lorem ipsum
            </h2>
            <div class="pb-2">
              <v-icon size="20"> mdi-calendar-range </v-icon>
              18.02.2020
            </div>
            <div class="pb-2">
              <iframe
                max-width="350"
                max-height="200"
                src="https://www.youtube.com/embed/u9oSVuf-0rc"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    years: [
      {
        color: 'cyan',
        year: '1960',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'green',
        year: '1970',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'pink',
        year: '1980',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'amber',
        year: '1990',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
      {
        color: 'orange',
        year: '2000',
        text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Communescaevola imperdiet nec ut, sed euismod convenire principes at. Estet nobis iisque percipit, an vim zril disputando voluptatibus, vixan salutandi sententiae.',
      },
    ],
    input: null,
  }),

  methods: {
    comment() {
      this.years.push({
        text: this.input,
        year: 'Salı',
        color: 'blue',
      })

      this.input = null
    },
  },
}
</script>

<style>
</style>