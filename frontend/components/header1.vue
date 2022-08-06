<template>
 <v-row>


   
  <v-card class="mx-auto hover:bg-cyan-600 " max-width="1000" >
  <v-col>
  <v-btn @click = "show = true"
      class="ma-8 absolute bottom-0 left-3 ..."
      outlined
      color="indigo"
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
       
   </v-card>



    </v-row>
    
  
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>


</style>