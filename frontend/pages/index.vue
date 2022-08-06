<template>
  <section>
    <Landing />
    <land2 />
  </section>
</template>

<script>
import Landing from '~/components/publicpage/Landing.vue'
import land2 from '~/components/publicpage/land2.vue'
export default {
  name: 'IndexPage',
  components: {
    Landing,
    land2,
  },
}
</script>
<style scoped>
.aaa {
  background-color: #d5f4e6 !important ;
}
</style>
