<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      class="mt-10"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="mt-10"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Şirkete usta ekle
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Şirketinize ait usta bilgilerini girin.</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-text-field
                  v-model="uname"
                  
                  :rules="nameRules"
                  label="İsim Soyisim"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="12"
              >
                <v-text-field v-model="email"
                  label="Usta emailini girin"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
              
                <v-col cols="12">
                <v-text-field v-model="password"
                    label="Password*"
                  
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
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Kapat
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addMentor"
          >
            Kaydet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
        password:'',
        showPassword: false,
        email: '',
        emailRules: [
        v => !!v || 'Mail alanı boş bırakılamaz',
        v => /.+@.+\..+/.test(v) || 'Lütfen geçerli mail girin',
      ],
            nameRules: [
        v => !!v || 'İsim alanı boş bırakılamaz',
      ],

    }),

    methods: {
        async addMentor(){
        let RegisteringgUser={
          Username : this.uname,
          Mail : this.email,
          Password : this.password
        }; 


        return await this.$axios.$post('/api/AddMyMentor',RegisteringgUser)
          .then((response)=>{
            console.log(response)

            this.dialog=false
            this.$router.push('/');

            



          } ).catch((error) => {
            console.log(error)
})
         
        
        


      }
    },
  }
</script>

<style>

</style>