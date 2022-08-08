<template>
    <v-container>
        <v-card class="mx-auto mb-2 rounded-lg" max-width="1500" tile v-for="user in company1" :key="user.id1">
            <v-row>
                <v-col sm="4" md="4" class="pr-1">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar size="100" left="true">
                                <img src="https://i.pinimg.com/originals/99/7b/e0/997be08fea707cddda41d010e04d6a3e.png"
                                    alt="Aselsan" />
                            </v-list-item-avatar>
                            <v-list-item-title class="pt-3"> {{user.Company.Title}} </v-list-item-title>
                            <v-list-item-subtitle> {{ user.Company.Sector }} </v-list-item-subtitle>
                            <v-list-item-subtitle class="pt-2">
                                <v-icon size="20"> mdi-email </v-icon>
                                {{ user.User.Mail }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <v-icon size="20"> mdi-phone </v-icon>

                                {{ user.Profile.PhoneNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <v-icon size="20"> mdi-map-marker </v-icon>

                                {{ user.Profile.City}}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-divider vertical  inset width="4"></v-divider>
                <v-col sm="8" md="8" class="pl-1">
                    <v-list-item>
                        <v-list-item-content>
                            <p class="text-center text-2xl font-italic"> İLAN BİLGİLERİ </p>
                            <v-list-item-subtitle> {{ user.Advert.Description }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>

        </v-card>


    </v-container>

</template>

<script>
export default {
    data() {
        return {
            company1: [],


        }

    },

    methods: {
        async company() {
            return await this.$axios.$get('/api/GetAdvertsAll').then((response) => {
                this.company1 = response

                console.log(response)
            })
        },
    },

    mounted() {
        this.company()
    },


}
</script>

<style>
</style>