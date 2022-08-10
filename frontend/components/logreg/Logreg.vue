<template>
  <v-container class="text-center">
      <v-row align="center" class="text-center">
          <v-col cols="12" sm="12" class="text-center">
            <v-card class="elevation-0 mt-10 "  >
             <v-window v-model="onboarding"
             class="blue accent-3 text-center">


             
                <v-window-item :value="1" >
                  <v-row cols="12">
                    <v-col cols="12" md="7" class="light-blue accent-2 text-center ">
                      <v-card-text class="mt-12 ">
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
                            :rules="emailRules"
                            required
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

                            <v-btn color="blue" dark block @click="loginUser" >Giriş</v-btn>
                             <v-alert v-if="alert" class="mt-2"
                              dense
                              outlined
                              type="error"
                            >
                            Lütfen kullanıcı adınızı yada şifrenizi kontrol edin.
                            </v-alert>

                            
                         <div
                          class="text-center  white--text mt-4 mb-3"
                        >veya şununla giriş yapın</div>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-20">
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


                    <v-col cols="12" md="7" class="light-blue accent-2">
                      <v-card-text class="mt-12">
                        <div
                          class="white--text text-center bold text-3xl"
                        >Usta yada Çırak olarak kayıt ol</div>
                        <div
                          class="text-center  white--text "
                        >Usta-Çırak-Şirket olarak kayıt ol<br>
                        </div>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row >
                           <v-col cols="12" sm="12">
                            <v-text-field v-model="rname"
                            :label="text1"
                            :rules="nameRules"
                            required
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
                            :rules="emailRules"
                            required
                            outlined
                            dense
                            color="white"
                            autocomplete="false"
                          />
                          <v-text-field v-model="rpassword"
                            label="Şifre"
                            required
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
                                    required
                                    class="mt-n1"
                                    color="white"
                                > </v-checkbox>
                              </v-col>

                              <!-- <v-col cols="12" sm="5" class="d-flex">
                                <div  class="form-group  " >
                                    <select  class="form-control blue white--text pa-1 secondary text-no-wrap " tile dense solo outlined name="make" id="make" v-model="ropti">
                                        <option :value="null" selected:disabled>Kayıt Türü</option>
                                        <option v-for="option in makes_options" :key="option.id" v-bind:value="option.id">{{option.text}}</option>
                                    </select>
                                </div>
                              </v-col> -->



                            <v-col
                                class="d-flex"
                                cols="12"
                                sm="4"
                                
                            >
                                <v-select
                                
                                v-model="ropti"
                                :items="makes_options"
                                label="Kayıt Türü"
                                solo
                                ></v-select>
                            </v-col>


                            </v-row>
                          <v-btn color="blue" dark block tile @click="userReg">Kayıt Ol</v-btn>
                     
                         <div
                          class="text-center  white--text mt-4 mb-3"
                        >Yada kayıt olmak için</div>

                          <div class="d-flex  justify-space-between align-center mx-10 mb-14">
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
        showName:true,
        text1:"İsim Soyisim",
        rid:0,
        email:null,
        password:null,
        remail:null,
        rpassword:null,
        ropti:null,
        rname:null,
        alert:false,
        nameRules: [
        v => !!v || 'İsim alanı boş bırakılamaz',
      ],
        emailRules: [
        v => !!v || 'Mail alanı boş bırakılamaz',
        v => /.+@.+\..+/.test(v) || 'Geçerli mail girin.',
      ],
        makes_options: [
        {
            text: "Çırak",
            
        },
        {
            text: "Usta",
            
        },
        {
            text: "Şirket",
            
        }
        ],

    }),

    watch: {
        ropti: {
       handler: function(val) {
         console.log(val)
           if(val==="Şirket"){
                this.text1="Şirket Adı"
                this.rid=2
                console.log(this.rid);
           }
           else if(val==="Usta") {
            this.text1="İsim Soyisim"
            this.rid=1
           }
           else{
            this.text1="İsim Soyisim"
            this.rid=0
           }
       },
       deep: true
    }
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

      async loginUser(){
        this.$auth.loginWith('local',{
            data:{Mail:this.email,
            Password:this.password}
        }).then(() => {
          this.$router.push("/mentorProfile")
        })
},

        // let MailPW={
        //     Mail:this.email,
        //     Password:this.password,
        // };

          // this.$store.dispatch("users/singin",MailPW)
          // .then((response)=>{
          //   this.alert=false
          //   this.$router.push('/');


          //   console.log(response)



    //       } ).catch((error) => {
    // if(error.response.status === 400){
    //     this.$router.push('/login');
    //     this.alert=true
    // }

         
    

      async userReg(){
        let Reg={
            Password:this.rpassword,
            UserName:this.rname,
            Mail:this.remail,
            Dropdown:this.rid
        }

        
        this.$router.push('/login');

      }

    }
    


  }
</script>

