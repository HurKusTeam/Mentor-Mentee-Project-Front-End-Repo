<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text> Şirkete usta ekle </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Ekleyeceğiniz ustanın bilgilerini giriniz.</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="12">
              <v-text-field
                v-model="uname"
                :rules="nameRules"
                label="İsim Soyisim"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="12">
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Şifre*"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>Şirketinize eklenecek ustanın bilgilerini girin.</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Kapat
        </v-btn>
        <v-btn color="blue darken-1" text @click="addMentor"> Kaydet </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    password: '',
    uname: '',
    showPassword: false,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail alanı boş bırakılamaz',
      (v) => /.+@.+\..+/.test(v) || 'Lütfen geçerli mail girin',
    ],
    nameRules: [(v) => !!v || 'İsim alanı boş bırakılamaz'],
  }),

  methods: {
    async addMentor() {
      let RegisteringgUser = {
        Username: this.uname,
        Mail: this.email,
        Password: this.password,
      }

      return await this.$axios
        .$post('/api/AddMyMentor', RegisteringgUser)
        .then((response) => {
          console.log(response)
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