<template>
  <v-main>
    <v-container class="pt-2 pb-0">
      <v-card color="transparent" class="mx-auto" max-width="1000" flat tile style="border: none">
        <v-row>
          <v-col sm="3" md="3" class="pr-1"><AdvertDetailProfile /></v-col>
          <v-col sm="6" md="6" class="pr-1 pl-1"><AdvertDetailInfo /></v-col>
          <v-col sm="3" md="3" class="pl-1"><AdvertDetailCompany /></v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
}
</script>