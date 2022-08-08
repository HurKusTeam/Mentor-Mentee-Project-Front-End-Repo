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
                <v-text-field label="Adı" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Soyadı"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Branş"
                  hint="Bilgisayar Mühendisi"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Hacettepe Üniversitesi ',
                    'Orta Doğu Teknik Üniversitesi (ODTÜ)',
                    'Koç Üniversitesi',
                    'stanbul Teknik Üniversitesi (İTÜ)',
                    'İstanbul Üniversitesi',
                    'Ankara Üniversitesi',
                    'Gazi Üniversitesi',
                    'Ege Üniversitesi',
                    'Sabancı Üniversitesi',
                    'Yıldız Teknik Üniversitesi',
                    'Boğaziçi Üniversitesi',
                  ]"
                  label="Okulu"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Ortalama" hint="örn. 3.40"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  hint="örnek_mail@gmail.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  label="Linkedin"
                  hint="linkedin.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  label="Github"
                  hint="github.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  label="Facebook"
                  hint="facebook.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  label="Twitter"
                  hint="twitter.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  label="Website"
                  hint="örnek.com"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Türkçe',
                    'İngilizce',
                    'Çince',
                    'Almanca',
                    'Fransızca',
                    'İspanyolca',
                    'Hintçe',
                    'Arapça',
                  ]"
                  label="Dil"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Java',
                    'C#',
                    'C++',
                    'Go',
                    'Vue',
                    'Python',
                    'Php',
                    'JavaScript',
                    'R',
                    'Flutter',
                  ]"
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
          <v-btn color="blue darken-1" text @click="dialog = false">
            Kapat
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Kaydet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>