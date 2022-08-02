<template>
  <v-container class="text-center">
      <v-row align="center" class="text-center">
          <v-col cols="12" sm="12" class="text-center">
            <v-card class="elevation-0 mt-10 "  >
             <v-window v-model="onboarding"
             class="blue accent-3 text-center">


             
                <v-window-item :value="1" >
                  <v-row cols="12">
                    <v-col cols="12" md="7" class="blue accent-3 text-center">
                      <v-card-text class="mt-12">
                        <div
                          class="white--text text-center bold text-3xl"
                        >Hesabınıza giriş yapın.</div>
                        <div
                          class="text-center white--text "
                        ><br>Usta-Çırak hesabınızla giriş yapın.</div>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field v-model="email"
                            label="Email"
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                            class="mt-16"
                            
                          />
                          <v-text-field v-model="password"
                            label="Şifre"
                            :type="showPassword ? 'text' : 'password'" 
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                          
                          
                          />

                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                        label="Beni Hatırla"
                        class="mt-n1"
                        color="white"
                      > </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="white--text">Şifremi Unuttum</span>
                              </v-col>
                            </v-row>

                            <v-btn color="blue" dark block :disabled="!allEntValid" @click="createUser" >Giriş</v-btn>

                            
                         <div
                          class="text-center  white--text mt-4 mb-3"
                        >veya şununla giriş yapın</div>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey" >
                          <v-icon color="red ">mdi-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey" class="">
                          <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>


                    <v-col cols="12" md="5" class="caption blue pa-4 text-center secondary text-no-wrap rounded-l-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <div class="text-center text-lg-h6 ">Hesabınız yok mu?</div>
                        <div
                          class="text-center"
                        >Hemen yeni bir hesap oluşturun.<br> Usta-Çırak olarak kayıt olun.</div>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="next">Kayıt Ol</v-btn>
                      </div>
                      </div>
                    </v-col>
                    
                  </v-row>
                </v-window-item>




                <v-window-item :value="2">
                  <v-row>


                    <v-col cols="12" md="5" class=" blue pa-4 text-center secondary text-no-wrap rounded-r-xl">
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <div class="text-center text-lg-h6 ">Hesabın varmı?</div>
                        <div
                          class="text-center"
                        >Hesabınla giriş yap <br>  Usta-Çırak programına katıl</div>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="prev">Giriş Yap</v-btn>
                      </div>
                      </div>
                    </v-col>


                    <v-col cols="12" md="7" class="blue accent-3">
                      <v-card-text class="mt-12">
                        <div
                          class="white--text text-center bold text-3xl"
                        >Usta yada Çırak olarak kayıt ol</div>
                        <div
                          class="text-center  white--text "
                        >Usta-Çırak-Şirket olarak Kayıt ol<br>
                        </div>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row v-show="showName">
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="İsim"
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Soyisim"
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           </v-row>
                            <v-row v-show="!showName">
                           <v-col cols="12" sm="12">
                            <v-text-field v-model="rname"
                            label="Şirket adı"
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>

                           </v-row>
                          <v-text-field v-model="remail"
                            label="Email"
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                          />
                          <v-text-field v-model="rpassword"
                            label="Şifre"
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                            type="password"
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                                    label="Kabul Ediyorum."
                                    class="mt-n1"
                                    color="blue"
                                > </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                         <div  class="form-group red pa-4 secondary text-no-wrap rounded-pill  ">
                                    <select  class="form-control" name="make" id="make" v-model="ropti">
                                        <option :value="null" selected>Kayıt Türü</option>
                                        <option v-for="option in makes_options" :key="option.id" v-bind:value="option.id">{{option.text}}</option>
                                    </select>
                                </div>
                              </v-col>
                       
                            </v-row>
                          <v-btn color="blue" dark block tile @click="createReg">Kayıt Ol</v-btn>
                     
                         <div
                          class="text-center  grey--text mt-4 mb-3"
                        >Yada kayıt olmak için</div>

                          <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey" >
                          <v-icon color="red ">mdi-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey" class="">
                          <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                        </v-btn>
                         </div>
                         
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>


                    
                  </v-row>
                </v-window-item>


                
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  

  export default {

    data: () => ({
        length: 3,
        onboarding: 1,
        showPassword: false,
        showName:false,


        email:null,
        password:null,
        remail:null,
        rpassword:null,
        ropti:null,
        rname:null,
        make: null,
        makes_options: [
        {
            text: "çırak",
            id: 0
        },
        {
            text: "usta",
            id: 1
        },
        {
            text: "şirket",
            id: 2
        }
        ],

    }),

    mounted: function () {
    this.$axios
    .$get('/api/GetUsers')
    .then((response) => console.log(response))
        },


    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },


      allEntValid() {
        if(this.email==null && this.password == null){
            return false
        }else{
            return true
        }
      },

      async createUser(){
        let MailPW={
            Mail:this.email,
            Password:this.password,
        };

        await this.$axios.$post('/api/Login',MailPW).then(response=>
        console.log(response));
      },

      async createReg(){
        let Reg={
            Password:this.rpassword,
            UserName:this.rname,
            Mail:this.remail,
            Dropdown:this.ropti
        }
        console.log(Reg),
        await this.$axios.$post('/api/Register',Reg).then(response=>
        console.log(response));

      }

    },
    


  }
</script>

