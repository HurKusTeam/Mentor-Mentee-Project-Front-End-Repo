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
                  <v-list-item-content class="pt-0" v-if="this.mentorid == null">
                    <v-flex v-for="(skill, i) in skills" :key="i">
                      <v-btn v-on:click="delteSkl(skill)">
                        <v-list-item-action-text class="pr-1">{{
                          skill
                        }}</v-list-item-action-text>
                      </v-btn>
                    </v-flex>
                  </v-list-item-content>
                  <v-list-item-content class="pt-0" v-if="this.mentorid != null">
                    <v-flex v-for="(skill, i) in skills" :key="i">
                        <v-list-item-action-text class="pr-1">{{
                          skill
                        }}</v-list-item-action-text>
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
                  <v-list-item-content class="pt-0" v-if="this.mentorid == null">
                    <v-flex v-for="(language, i) in languages" :key="i">
                      <v-btn v-on:click="delteLang(language)">
                        <v-list-item-action-text class="pr-1">{{
                          language
                        }}</v-list-item-action-text>
                      </v-btn>
                    </v-flex>
                  </v-list-item-content>
                  <v-list-item-content class="pt-0" v-if="this.mentorid != null">
                    <v-flex v-for="(language, i) in languages" :key="i">
                        <v-list-item-action-text class="pr-1">{{
                          language
                        }}</v-list-item-action-text>
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
  data() {
    return {
      loading: true,
      mentorid: this.$route.params.mentorid,
    }
  },
  props: ['languages', 'skills'],
  methods: {
    async delteSkl(skill) {
      await this.$axios.$delete('/api/DeleteSkills/' + skill).then((response) => {
        this.$emit('loading', this.loading)
        this.loading = true
        console.log(this.loading)
      })
    },
    async delteLang(language) {
      await this.$axios
        .$delete('/api/DeleteLanguage/' + language)
        .then((response) => {
          this.$emit('loading', this.loading)
          this.loading = true
          console.log(this.loading)
        })
    },
  },
}
</script>

<style>
</style>