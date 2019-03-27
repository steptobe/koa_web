<template>
    <div class="login">
        <el-form :model="userInfo" ref="userInfo" label-width="100px" class="demo-dynamic">
        <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
        >
            <el-input v-model="userInfo.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' }
            ]">
            <el-input type="password" v-model="userInfo.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('userInfo')">提交</el-button>
            <el-button @click="resetForm('userInfo')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>


<script>
import { axiosPost } from '../../api/api.js';
export default {
  data() {
    return {    
      userInfo: {
          email: "",
          pass: '',
      },
    };
  },
  components:{
    axiosPost
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.adminLogin();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 登录
     * @returns {Promise<void>}
     */
    async adminLogin() {
      let Api = '/api/login'
      let requestData = {
        userEmail: this.userInfo.email,
        passWord: this.userInfo.pass
      };
      console.log('登录数据', requestData)
      let res = await axiosPost(Api, requestData)
      if (res.code === 200) {
        this.$router.push({
          path: "/homepage"
        });
      } else {
        alert(`${res.message}`);
      }
    }
  }
};
</script>
<style style lang='scss'>
   .login{
       width: 500px;
       margin: 50px auto;
       padding: 50px  50px 50px 0;
       box-shadow: 0 0 1px 1px #eee;
   }
</style>
