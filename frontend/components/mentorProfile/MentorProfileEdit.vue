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
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="name"
                  label="Adı"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="surname" label="Soyadı"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="branş"
                  label="Branş"
                  hint="Bilgisayar Mühendisi"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="selectedUni"
                  :items="unis"
                  item-text="Name"
                  item-value="ID"
                  label="Okulu"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="birthDate"
                  label="Doğum Tarihi"
                  type="date"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="mail"
                  label="Email*"
                  hint="örnek_mail@gmail.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  type="number"
                  min="0"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="city" label="City"></v-text-field>
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
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="selectedLangs"
                  :items="languages"
                  item-text="Name"
                  item-value="ID"
                  label="Dil"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="selectedSkills"
                  :items="skills"
                  item-text="Name"
                  item-value="ID"
                  label="Yetenekler"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*Doldurulması zorunlu alanlar</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click=";(dialog = false)"
          >
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
  props: ['company_id'],
  data() {
    return {
      unis: [],
      languages: [],
      skills: [],
      dialog: false,
      i: 0,
      name: '',
      surname: '',
      branş: '',
      birthDate: '',
      mail: '',
      password: '',
      phone: '',
      linkedin: '',
      github: '',
      facebook: '',
      twitter: '',
      web: '',
      city: '',
      about: '',
      selectedUni: '',
      selectedLangs: [],
      selectedSkills: [],
    }
  },
  mounted() {
    this.getAllUni(), this.getAllLang(), this.getAllSkills()
  },
  methods: {
    submit() {
      let data = {
        Mail: this.mail,
        Password: this.password,
        Mentors: [
          {
            Major: this.branş,
          },
        ],
        UserProfiles: [
          {
            Name: this.name,
            Surname: this.surname,
            Biography: this.about,
            BirthDate: this.birthDate,
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
        Universities: [
          {
            UniversityCatalogID: this.selectedUni
          },
        ],
      }
      //let formdata = new FormData()
      //formdata.append('data', JSON.stringify(data))
      this.$axios.$post('/api/Profile', data).then((response) => {
        console.log(response)
      })
    },
    async getAllUni() {
      return await this.$axios.$get('/api/GetUniversities').then((response) => {
        this.unis = response
      })
    },
    async getAllLang() {
      return await this.$axios.$get('/api/GetLanguages/').then((response) => {
        this.languages = response
      })
    },
    async getAllSkills() {
      return await this.$axios.$get('/api/GetSkills').then((response) => {
        this.skills = response
      })
    },
  },
}
</script>

<style>
</style>