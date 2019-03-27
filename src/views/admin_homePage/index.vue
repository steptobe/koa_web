<template>
  <div class="home-pg">
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"  border>
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="作者"
      prop="name">
    </el-table-column>
    <el-table-column
      label="文章标题"
      prop="title">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          @click="handleAdd(scope.$index, scope.row)">增加</el-button>  
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import {axiosGet,axiosPost} from '../../api/api';
  export default {
    data() {
      return {
        tableData: [],
        pagePer:10,
        page:1,
        search: ''
      }
    },
    created(){
      this.getData();
    },
    methods: {
      async getData(){
        let api = '/api/activity/article';
        let requestData = {
          page:this.page,
          limit:10
        };
        const res = await axiosPost(api, requestData);

        if(res.code == 200){
         
          this.tableData = this.formatlist(res.data.articleList);
          this.totalNum = res.data.totalLength;
          

        };



      },
      /**
       * 格式化数据
       */
      formatlist(data){
        let arr = [];
        data.map((item,index)=>{
          arr.push({
            id:item.id,
            date:item.create_time,
            name:item.author,
            title:item.article_title,
            tag:item.hidden,
            article:item.article 
          })
        })
         console.log(arr)
        return arr;
      },
      handleEdit(index, row) {
        this.$router.push({
          path: "/editInfo",
          query: {
            options: row
          }
        });
      },
      handleAdd(index, row) {
        this.$router.push('/addNew');
      },
      handleDelete(index, row) {
        // console.log(index, row);
      }
    },
  }
</script>

<style style lang='scss'>
  .home-pg{
    width: 80%;
    margin: 50px auto;
    
  }
</style>
