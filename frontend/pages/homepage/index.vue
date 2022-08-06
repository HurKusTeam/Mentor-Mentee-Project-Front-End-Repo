<template>
  <v-main>
    <v-container>
     <v-card class="mx-auto hover:bg-cyan-600 " max-width="2000" >
 <v-row>
  <v-col align-self="end">
  <v-btn @click = "show = true"
      class="ma-8 absolute bottom-0 left-12 ... "
      outlined
      color="indigo"
      right="true"
      
    >
      Mentors
       </v-btn>
  </v-col>
       <v-col>
       <v-btn @click = "show = false"
      class="ma-8 absolute bottom-0 left-7 ..."
      outlined
      color="indigo"
    >
      Company Adds
    </v-btn>
       </v-col>
   </v-row>
   </v-card>
    </v-container>

 
   


    <div class="pt-2 pb-0">
      <v-card  color="transparent" class="mx-auto ma-2" max-width="2000" flat tile style="border: none">
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
        
        console.log(response)
      })
    },
  },

  mounted() {
    this.createUser()
  },
  
  
}
</script>