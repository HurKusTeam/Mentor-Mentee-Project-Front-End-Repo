<template>
  <v-main>
    <div >
    <v-col>
    <div  >
  <v-card class="mx-auto hover:bg-cyan-600 " max-width="2200" >
       <v-btn @click = "show = true"
      class="ma-8 absolute bottom-0 left-3 ..."
      outlined
      color="indigo"
    >
      Mentors
       </v-btn>
    <v-btn @click = "show = false"
      class="ma-8 absolute bottom-0 left-7 ..."
      outlined
      color="indigo"
    >
      Company Adds
    </v-btn>
   </v-card>
</div>
<hr/>
    </v-col>
  </div>
    <div class="pt-2 pb-0">
      <v-card color="transparent" class="mx-auto" max-width="2000" flat tile style="border: none">
        <v-row>
          <v-col v-if="show" sm="12" md="12" class="pr-1"><mentorads/></v-col>
          <v-col v-if="!show" sm="12" md="12" class="pl-1"><company/></v-col>
        </v-row>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
 
  data() {
    return {
      show: false,
      users: [],
      uni: null,
    }
  },

  methods: {
    async createUser() {
      return await this.$axios.$get('/api/IndividualMentors').then((response) => {
        this.users = response
        this.uni = this.users.Universities
        console.log(response)
      })
    },
  },

  mounted() {
    this.createUser()
  },
  
  
}
</script>