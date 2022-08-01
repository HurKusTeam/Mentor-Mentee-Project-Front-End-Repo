<template>
  <v-footer class="clr" app padless>
    <v-container>
      <v-row no gutters>
        <v-col>
          <v-img
            src="/Logo.png"
            class="ml-20 mt-4 mb-3"
            cantain
            max-height="120"
            max-width="120"
            size="10 px"
          ></v-img>

          <v-btn class="ml-4 px-0" text v-for="link in links" :key="link">{{
            link
          }}</v-btn>
        </v-col>
        <v-col>
          <v-list class="test">
            <v-list-item>
              <v-icon class="mr-2">mdi-map-marker</v-icon>Universiteler Mah.
              ODTÜ TEKNOKENT, TUSAŞ R&D Building B Block, Çankaya/Ankara
            </v-list-item>
            <v-list-item>
              <v-icon class="mr-2">mdi-email</v-icon>example@hotmail.com
            </v-list-item>
            <v-list-item>
              <v-icon class="mr-2">mdi-phone</v-icon>05435391856
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <h1 class="mt-5">Hakkımızda</h1>
          <v-divider></v-divider>
          <p class="mt-10">
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
      links: ['Vizyon', 'Hakkımızda', 'SSS'],
    }
  },
}
</script>

<style scoped>
.clr {
  background-color: #3b82f680 !important;
}
.test {
  background-color: rgba(59, 130, 246, 0);
}
</style>
