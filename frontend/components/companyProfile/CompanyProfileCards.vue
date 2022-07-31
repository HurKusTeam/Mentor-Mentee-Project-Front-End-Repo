<template>
  <v-container class="pt-2 pb-0">
    <v-card class="mx-auto" max-width="1000" tile>
      <v-sheet class="mx-auto" elevation="8">
        <v-slide-group class="pa-4" active-class="success" show-arrows>
          <v-slide-item v-for="n in 8" :key="n">
            <v-card class="ma-4" height="250" width="300">
              <v-list-item>
                <v-list-item-content style="text-align: center">
                  <v-list-item-avatar size="100">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="John"
                    />
                  </v-list-item-avatar>
                  <v-list-item-title class="pt-3">
                    Ömer Furkan Berber
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Software Engineer
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="pt-2">
                    <v-icon size="20"> mdi-email </v-icon>
                    furkan_berber@gmail.com</v-list-item-subtitle
                  >
                  <v-list-item-subtitle>
                    <v-icon size="20"> mdi-phone </v-icon>
                    05553216549</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.v-application .elevation-8 {
  box-shadow: none !important;
}
</style>