<template>
  <div>
    <MyApplicant />
  </div>
</template>

<script>
import MyApplicant from '../components/MyApplicants.vue/MyApplicant.vue'
import DenemePage from '../components/MyApplicants.vue/DenemePage.vue'
export default {
  name: 'IndexPage',
  components: { MyApplicant, DenemePage },
}
</script>
