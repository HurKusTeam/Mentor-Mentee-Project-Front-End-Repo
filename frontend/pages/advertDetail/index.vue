<template>
  <v-main>
    <v-container class="pt-2 pb-0">
      <v-card color="transparent" class="mx-auto" max-width="1000" flat tile style="border: none">
        <v-row>
          <v-col sm="3" md="3" class="pl-1"><AdvertDetailCompany
          v-if="this.advert.Truefalse"
          :name="this.advert.Company?.Title"
          :sector="this.advert.Company?.Sector"
          :mail="this.advert.User?.Mail"
          :phone="this.advert.Userprof?.PhoneNumber"/>
          <AdvertDetailCompany
          v-if="this.advert.Truefalse == false"
          :name="this.advert.Userprof?.Name"
          :sector="this.advert.Mentor?.Major"
          :mail="this.advert.User?.Mail"
          :phone="this.advert.Userprof?.PhoneNumber"/></v-col>
          <v-col sm="9" md="9" class="pr-1 pl-1"><AdvertDetailInfo
          :startDate="this.advert.Advert?.StartDate"
          :endDate="this.advert.Advert?.EndDate"
          :details="this.advert.Advert?.Description" /></v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      advert: [],
      name: "",
      sector: "",
      mentorid: this.$route.params.mentorid,
    }
  },

  mounted(){
    this.createUser()
  },

  methods: {
    async  createUser() {
      return await this.$axios.$get("/api/GetAdvertSolo/"+this.mentorid).then((response) => {
        console.log(this.mentorid)
        this.advert = response
        console.log(response)
      })
    },
  },
}
</script>