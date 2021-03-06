<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>     
    12312123
    <br>
    <br>
    <el-input style="width: 200px;" v-model="phone" placeholder="请输入内容"></el-input>
    <br>
    <el-input style="width: 200px;" v-model="password" type="password" placeholder="请输入内容"></el-input>
    <br>
    <el-button @click="submitFn()">提交</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Input,} from 'element-ui'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    [Input.name]: Input,
  },
  data(){
    return {
      phone: '',
      password: '',
    }
  },
  created(){

  },
  methods: {
    submitFn(){
      if(!this.phone){
        return this.$message({type: 'warning',message: '输入账号'})
      }
      if(!this.password){
        return this.$message({type: 'warning',message: '输入密码'})
      }
      let obj = {
        phone: this.phone,
        password: this.password
      }
      this.$store.commit('setUserInfo',obj);
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    }
  }
}
</script>
