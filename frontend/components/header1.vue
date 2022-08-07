<template>

  <header class="toolbar">
    <div class="toolbar--container">

      <v-row>
        <v-col>
          <v-card-actions class="justify-center">

            <v-btn @click="show = true" class="ma-8  pa-12" outlined color="error" right="true" x-large>
              Mentors
            </v-btn>
            <b-btn>
              <p href="#_"
                class="text--logo text-5xl text-gradient bg-gradient-to-r from-red-200 via-indigo-400 to-purple-600">
                MENTORS
              </p>
            </b-btn>

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


</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.btn {
  @apply px-6 py-3 mb-3 text-lg rounded-md;
}
</style>