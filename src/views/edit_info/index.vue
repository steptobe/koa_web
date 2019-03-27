<template>

  <div class="edit-new">
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
        <el-button type="primary" @click="onSubmit">确定修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
   </el-form>

  </div>
</template>

<script>
import { axiosPost } from '../../api/api';
export default {
  data() {
    return {
      id:'',
      form: {
        name: "",
        title: "",
        date1: "",
        desc: ""
      }
    };
  },
  created(){
    this.getData();
  },
  methods: {
    getData(){
      let options = this.$route.query.options;
      this.id = options.id;
      this.form.title = options.title;
      this.form.name = options.name;
      this.form.desc = options.article;
    },
    async onSubmit() {
      let api = '/api/activity/edit';
      
      let requestData = {
        id:this.id,
        title:this.form.title,
        author:this.form.name,
        tag:1,
        textarea:this.form.desc,
      }
      const res = await axiosPost(api, requestData);
     	if (res.code === 200) {
        this.$alert('恭喜大王，修改一条记录', '修改结果', {
          confirmButtonText: '已阅',
          callback: action => {
            this.$router.replace({
              path: "/homepage"
            })
          }
        });
			}
    }
  }
};
</script>
<style style lang='scss'>
  .edit-new {
    width: 60%;
    margin: 100px auto;
    text-align: left;
  }
</style>
