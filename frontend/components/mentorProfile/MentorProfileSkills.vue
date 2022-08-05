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
                      <v-list-item-action-text v-for="skill in skills" :key="skill.ID" class="pr-1">{{skill.Name}}</v-list-item-action-text>
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
                      <v-list-item-action-text v-for="language in languages" :key="language.ID" class="pr-1">{{language.Name}}</v-list-item-action-text>
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
export default {
  props: [
    "languages",
    "skills"
  ]
}
</script>

<style>
</style>