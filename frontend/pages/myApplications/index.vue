<template>
  <div>
    <UserMyApplication
    :userId="this.userId" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      userId: this.$route.params.userId,
    }
  },
  mounted() {
    console.log("mounted", this.userId)
  },
}
</script>
