<template>
  <v-container>
    <MenteeProfileHeader />
    <MenteeProdfileInfo />
    <MenteeProfileSkills />
  </v-container>
</template>

<script>
import MenteeProfileSkills from '../components/menteeProfile/MenteeProfileSkills.vue'
export default {
  name: 'IndexPage',
  components: { MenteeProfileSkills },
}
</script>
