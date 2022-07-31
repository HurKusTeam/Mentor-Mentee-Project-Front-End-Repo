<template>
  <v-footer app padless>
    <v-container class="blue">
      <v-row no gutters>
        <v-col>
          <v-img
            src="/Logo.jpg"
            class="ml-24 mt-4 mb-3"
            cantain
            max-height="100"
            max-width="100"
            size="10 px"
          ></v-img>

          <v-btn text v-for="link in links" :key="link">{{ link }}</v-btn>
        </v-col>
        <v-col>
          <v-list color="blue">
            <v-list-item>
              <v-icon>mdi-map-marker</v-icon>Universiteler Mah. ODTÜ TEKNOKENT,
              TUSAŞ R&D Building B Block, Çankaya/Ankara
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-email</v-icon>example@hotmail.com
            </v-list-item>
            <v-list-item> <v-icon>mdi-phone</v-icon>05435391856 </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <h1>Hakkımızda</h1>
          <v-divider></v-divider>
          <p class="mt-5">
            Ülke ve sektörler için öğrenci yetiştirmeyi planlayan ve bu amaç
            için "Usta-Çırak" uygulamasını kullanan bir firmayız
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      links: ['Hakkımızda', 'Vizyon', 'SSS'],
    }
  },
}
</script>

<style></style>
