<template>
  <v-container class="pt-2 pb-0">
    <v-card
      class="mx-auto"
      max-width="1000"
      flat
      outlined
      tile
      style="border: none"
    >
      <v-row no-gutters>
        <v-col cols="12" sm="8" md="6">
          <v-card class="mx-auto mr-2" tile>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title pa-3"
                  >YETENEKLER</v-list-item-title
                >
                <v-list-item>
                  <v-list-item-content class="pt-0">
                    <v-flex>
                      <v-list-item-action-text class="pr-1">Java</v-list-item-action-text>
                      <v-list-item-action-text class="pr-1">C#</v-list-item-action-text>
                      <v-list-item-action-text class="pr-1">Python</v-list-item-action-text>
                      <v-list-item-action-text class="pr-1">Go</v-list-item-action-text>
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card class="mx-auto" tile>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title pa-3">DİL</v-list-item-title>
                <v-list-item>
                  <v-list-item-content class="pt-0">
                    <v-flex>
                      <v-list-item-action-text class="pr-1">İngilizce</v-list-item-action-text>
                      <v-list-item-action-text class="pr-1">Türkçe</v-list-item-action-text>
                    </v-flex>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>