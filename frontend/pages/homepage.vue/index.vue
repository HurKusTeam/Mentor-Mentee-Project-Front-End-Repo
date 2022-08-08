<template>
    <v-main>
        <v-container>

            <div class="toolbar--container">
                <v-row>
                    <v-col>
                        <v-card-actions class="justify-center">

                            <a @click="show = true"
                                class="item--link text--logo text-6xl text-gradient bg-gradient-to-r from-red-700 via-purple-400 to-blue-600 ma-8">
                                <span class="block">MENTÖRLER</span>
                            </a>

                        </v-card-actions>

                    </v-col>
                    <v-divider vertical inset width="10"></v-divider>
                    <v-col>
                        <v-card-actions class="justify-center">


                            <a @click="show = false"
                                class="item--link text--logo text-6xl text-gradient bg-gradient-to-r from-red-700 via-indigo-500 to-purple-600 ma-8 ">
                                <span class="block">ŞİRKET İLANLARI</span>
                            </a>
                        </v-card-actions>

                    </v-col>
                </v-row>
            </div>
        </v-container>
        <v-card color="transparent" class="mx-auto ma-2 pt-2 pb-2" max-width="1500" flat tile style="border: none">
            <v-row>
                <v-col v-if="show" sm="12" md="12" class="pr-1">
                    <indmentors />
                </v-col>
                <v-col v-if="!show" sm="12" md="12" class="pl-1">
                    <company />
                </v-col>
            </v-row>
        </v-card>

    </v-main>
</template>

<script>
import indmentors from '~/components/homepageforvisitor/indmentors.vue'
import company from '~/components/homepageforvisitor/company.vue'
export default {
    components: {
        indmentors,
        company,
    },

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