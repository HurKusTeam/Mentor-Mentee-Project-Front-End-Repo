<template>
  <div>
    <MentorListing />
  </div>
</template>

<script>
import MentorListing from '../components/CompanyApplicants/MentorListing.vue'
export default {
  name: 'IndexPage',
  components: { CompanyApplicants, MentorListing },
}
</script>
