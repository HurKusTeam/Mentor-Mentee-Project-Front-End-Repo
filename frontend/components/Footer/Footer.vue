<template>
  <v-footer max-height="200" class="clr mb-0" padless >
    <v-container>
      <v-row no gutters>
        <v-col>
          <v-img
            src="/Logo.png"
            class="ml-20"
            cantain
            max-height="120"
            max-width="120"
            size="10 px"
          ></v-img>

          <v-btn class="ml-4 px-0" text v-for="link in links" :key="link">{{
            link
          }}</v-btn>
        </v-col>
        <v-col class="mt-2">
          <v-list class="test">
            <v-list-item>
              <v-icon class="mr-2">mdi-map-marker</v-icon>Çankaya/Ankara
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
          <h1 class="mt-6">Hakkımızda</h1>
          <v-divider></v-divider>
          <p class="mt-6">
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
