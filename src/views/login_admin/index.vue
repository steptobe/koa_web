<template>
    <div class="login">
        <el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="demo-dynamic">
        <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
        >
            <el-input v-model="ruleForm2.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' }
            ]">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
  data() {
    return {    
      ruleForm2: {
          email: "",
          pass: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
   
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
