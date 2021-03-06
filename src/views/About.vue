<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>123123123123121</p>
    <div>
      <p>{{uInfo.phone}}</p>
      <p>{{uInfo.password}}</p>
    </div>
  </div>
</template>

<script>
 import { mapState } from 'vuex' 
  export default {
    data() {
      return {

      }
    },
    computed:{
      ...mapState({
        uInfo: state => state.user.uInfo
      })
    },
    created(){

    }
  }
</script>

<style scoped>

</style>