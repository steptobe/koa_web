<template>
  <div class="add-new">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="作者">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
 
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确认添加</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        title: "",
        date1: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style style lang='scss'>
.add-new{
  width: 60%;
  margin: 100px auto;
  text-align: left;
}
</style>

