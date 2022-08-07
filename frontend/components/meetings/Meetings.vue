<template>
  <v-container class="pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-timeline class="pa-8">
        <v-timeline-item fill-dot class="white--text mb-12" color="blue" large>
          <template v-slot:icon>
            <span>M</span>
          </template>
          <v-form ref="form">
            <v-row>
              <v-col class="pa-0 pl-1 pr-1">
                <v-text-field
                  v-model="title"
                  :rules="inputRule"
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
                  :rules="inputRule"
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
                    <v-btn block depressed v-bind="attrs" v-on="on">
                      Renk seçiniz
                    </v-btn>
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
                      <v-btn
                        color="blue darken-1"
                        text
                        @click=";(dialog = false), saveColor()"
                      >
                        Kaydet
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>

              <v-col class="pt-1 pa-0 pl-1">
                <v-btn block class="mx-0" depressed @click="submit()">
                  Ekle
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-timeline-item>
        <v-timeline-item
          v-for="(meeting, i) in meetings"
          :key="i"
          :color="meeting.Description"
          :id="meeting.ID"
          :isDeleted="meeting.IsDeleted"
          :menteeId="meeting.MenteeID"
          :mentorId="meeting.MentorID"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${meeting.Description}--text`"
              :style="`color: ${meeting.Description}`"
              v-text="meeting.Date"
            ></span>
          </template>
          <div class="py-4">
            <h2
              :class="`headline font-weight-light mb-4 ${meeting.Description}--text`"
              :style="`color: ${meeting.Description}`"
            >
              {{ meeting.Title }}
            </h2>
            <div class="container1">
              <iframe
                class="responsive-iframe"
                :src="`https://www.youtube.com/embed/${meeting.Link.split(
                  '='
                ).pop()}`"
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
  data() {
    return {
      inputRule: [(v) => v.length >= 1 || 'Boş bırakılamaz'],
      dialog: false,
      meetings: [],
      link: '',
      title: '',
      clr: null,
      color: '#2196F3',
      menteeId: this.$route.params.menteeId,
    }
  },

  mounted() {
    this.createUser()
  },

  methods: {
    async createUser() {
      return await this.$axios.$get('/api/Meetings/' + this.menteeId).then((response) => {
        this.meetings = response
        console.log(response)
        console.log(this.menteeId)
      })
    },
    saveColor() {
      this.color = this.clr.hexa
    },
    async submit() {
      let values = {
        Title: this.title,
        Link: this.link,
        Date: new Date().toISOString().slice(0, 10),
        Description: this.color
      }
      console.log(values)
      if (this.$refs.form.validate()) {
        await this.$axios
          .$post('/api/Meetings/' + this.menteeId, values)
          .then((response) => console.log(response))
      }
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