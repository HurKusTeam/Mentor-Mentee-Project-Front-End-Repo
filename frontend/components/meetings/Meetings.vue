<template>
  <v-container class="pb-0">
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
            <v-col class="pa-0 pl-1 pr-1">
              <v-text-field
                v-model="title"
                hide-details
                dense
                flat
                label="Title"
                outlined
                @keydown.enter="comment"
              >
              </v-text-field>
            </v-col>
            <v-col class="pa-0 pl-1 pr-1">
              <v-text-field
                v-model="link"
                hide-details
                dense
                flat
                label="Youtube link"
                outlined
                @keydown.enter="comment"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0 pt-1 pr-1">
              <v-dialog v-model="dialog" persistent max-width="350px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn block depressed v-bind="attrs" v-on="on"> Renk seçiniz </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Renk seçiniz</span>
                  </v-card-title>
                  <v-card-text>
                    <v-color-picker
                      v-model="clr"
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
                    <v-btn color="blue darken-1" text @click="dialog = false, saveColor()">
                      Kaydet
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>

            <v-col class="pt-1 pa-0 pl-1">
              <v-btn block class="mx-0" depressed @click="comment"> Ekle </v-btn>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          v-for="(meeting, i) in meetings"
          :key="i"
          :color="meeting.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${meeting.color}--text`"
              :style="`color: ${meeting.color}`"
              v-text="meeting.day"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${meeting.color}--text`"
              :style="`color: ${meeting.color}`">
              {{ meeting.title }}
            </h2>
            <div class="pb-2">
              <v-icon size="20"> mdi-calendar-range </v-icon>
              {{ meeting.date }}
            </div>
            <div class="container1">
              <iframe
                class="responsive-iframe"
                :src='`${meeting.link}`'
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
    meetings: [
      {
        title: 'Video izle',
        color: 'cyan',
        day: 'Pazartesi',
        link: 'https://www.youtube.com/embed/u9oSVuf-0rc',
        date: new Date().toISOString().slice(0,10),
      },
      {
        title: 'Video izle',
        color: 'green',
        day: 'Salı',
        link: 'https://www.youtube.com/embed/u9oSVuf-0rc',
        date: new Date().toISOString().slice(0,10),
      },
      {
        title: 'Video izle',
        color: 'pink',
        day: 'Çarşamba',
        link: 'https://www.youtube.com/embed/u9oSVuf-0rc',
        date: new Date().toISOString().slice(0,10),
      },
      {
        title: 'Video izle',
        color: 'amber',
        day: 'Perşembe',
        link: 'https://www.youtube.com/embed/u9oSVuf-0rc',
        date: new Date().toISOString().slice(0,10),
      },
      {
        title: 'Video izle',
        color: '#FF0000FF',
        day: 'Cumartesi',
        link: 'https://www.youtube.com/embed/u9oSVuf-0rc',
        date: new Date().toISOString().slice(0,10),
      },
    ],
    link: null,
    title: null,
    clr: null,
    color: null,
  }),

  methods: {
    saveColor(){
      this.color = this.clr.hexa
    },
    comment() {
      this.meetings.push({
        title: this.title,
        link: 'https://www.youtube.com/embed/' + this.link.split("=").pop(),
        day: 'Salı',
        color: this.color,
        date: new Date().toISOString().slice(0,10),
      })
      this.link = "",
      this.title = ""
    },
  },
}
</script>

<style>
.container1 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>