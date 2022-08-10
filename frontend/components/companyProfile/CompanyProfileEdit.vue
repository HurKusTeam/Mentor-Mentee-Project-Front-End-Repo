<template>
  <div>
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
                <v-text-field
                  v-model="name" label="Şirket Adı"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="sector"
                  label="Sektör"
                  hint="Yazılım"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="employee"
                  label="Çalışan Sayısı"
                  hint="10.000"
                  type="number"
                  min="0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="date" label="Kuruluş Tarihi" type="date"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="mail"
                  label="Email"
                  hint="örnek_mail@gmail.com"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Şifre"
                  type="password"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="phone"
                  label="Telefon Numarası"
                  type="number"
                  min="0"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="city" label="Şehir"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Hakkında" v-model="about"></v-textarea>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="linkedin"
                  label="Linkedin"
                  hint="linkedin.com"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  v-model="github"
                  label="Github"
                  hint="github.com"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="facebook"
                  label="Facebook"
                  hint="facebook.com"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  v-model="twitter"
                  label="Twitter"
                  hint="twitter.com"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  v-model="web"
                  label="Website"
                  hint="örnek.com"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Kapat
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click=";(dialog = false), submit()"
          >
            Kaydet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'sector',
    'employee',
    'date',
    'mail',
    'phone',
    'linkedin',
    'github',
    'facebook',
    'twitter',
    'web',
    'city',
    'about',
  ],
  data() {
    return {
      loading: true,
      dialog: false,
      i: 0,
      password: '',
    }
  },
  methods: {
    async submit() {
      let data = {
        Mail: this.mail,
        Password: this.password,
        Companies: [
          {
            Title: this.name,
            Description: this.about,
            Sector: this.sector,
            PersonalCount: parseFloat(this.employee),
            SinceDate: this.date,

          },
        ],
        UserProfiles: [
          {
            PhoneNumber: this.phone,
            City: this.city,
          },
        ],
        Abouts: [
          {
            Facebook: this.facebook,
            Twitter: this.twitter,
            Linkedin: this.linkedin,
            Website: this.web,
            GitHub: this.github,
          },
        ],
      }
      await this.$axios.$post('/api/Profile', data).then((response) => {
        this.$emit('loading', this.loading)
        this.loading = true
        console.log(response)
      })
    },
  },
}
</script>

<style>
</style>