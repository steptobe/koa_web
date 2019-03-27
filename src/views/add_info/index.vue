<template>
  <div class="add-new">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="作者">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
 
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="saveNewData">确认添加</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

  </div>
</template>

<script>
import { axiosPost } from '../../api/api.js';
export default {
  data() {
    return {
      form: {
        name: "",
        title: "",
        desc: ""
      }
    };
  },
  methods: {
   
      /**
		 * 保存新数据
		 */
		async saveNewData() {
			// alert('success')
			let Api = '/api/activity/addNew'
			let requestData ={
        article: this.form.desc,
        author: this.form.name,
        tag: 1,
        title: this.form.title,
			}
			console.log(this.form.name);
			const res = await axiosPost(Api, requestData)
			if (res.code === 200) {
        this.$alert('恭喜大王，新增一条记录', '修改结果', {
          confirmButtonText: '已阅',
          callback: action => {
            this.$router.replace({
              path: "/homepage"
            })
          }
        });
			}
		},
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

