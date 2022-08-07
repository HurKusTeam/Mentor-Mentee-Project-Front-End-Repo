<template>
  <v-main>
      <header class="toolbar">
        <div class="toolbar--container">
          <v-row>
            <v-col>
              <v-card-actions class="justify-center">
                <v-btn @click="show = true" class="ma-8  pa-12 " outlined color="error" right="true" x-large>
                  Mentors
                </v-btn>
               
                  <p  href="#_" class="text--logo text-5xl text-gradient bg-gradient-to-r from-red-200 via-indigo-400 to-purple-600">
                    MENTORS
                  </p>
                
              </v-card-actions>

            </v-col>
            <v-divider vertical inset width="10"></v-divider>
            <v-col>
              <v-card-actions class="justify-center">
                <v-btn @click="show = false" class="ma-8  pa-12" outlined color="error" right="true" x-large>
                  Company Adds
                </v-btn>
              </v-card-actions>

            </v-col>
          </v-row>
        </div>>
      </header>

   
    <v-card color="transparent" class="mx-auto ma-2 pt-2 pb-2" max-width="1500" flat tile style="border: none">
      <v-row>
        <v-col v-if="show" sm="12" md="12" class="pr-1">
          <mentorads />
        </v-col>
        <v-col v-if="!show" sm="12" md="12" class="pl-1">
          <company />
        </v-col>
      </v-row>
    </v-card>

  </v-main>
</template>

<script>
export default {

  data() {
    return {
      show: true,
      users: [],

    }
  },

}
</script>

<style lang="postcss" scoped>
.btn {
  @apply px-6 py-8 mb-5 text-lg rounded-md;
}
</style>