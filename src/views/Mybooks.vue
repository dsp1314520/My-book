<template>
  <div class="concent">
    <el-image
      style="width: 100%; height: 180px"
      :src="require('../assets/wallhaven-yjl36l.jpg')"
      fit="cover"
    >
    </el-image>
    <div class="search-box">
      <el-col :span="10">
        <el-input
          placeholder="请输入关键词"
          v-model="seekData.bookName"
          class="input-with-select"
        >
          <el-select v-model="seekData.name" slot="prepend">
            <el-option label="作者" value="inauthor"></el-option>
            <el-option label="书名" value="intitle"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            type="primary"
            @click="onSelect"
            >搜索</el-button
          >
        </el-input>
      </el-col>
    </div>
    <pagination
      layout="prev, pager, next"
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="onPaging"
    />

    <!-- 数据展示 -->
    <Books
      v-for="(item, index) in bookData.items"
      :key="index"
      :bookData="item"
    ></Books>
  </div>
</template>
<script>
import { searchBooks } from "@/request/api.js";
import Books from "../components/books.vue";
export default {
  components: {
    Books,
  },
  data() {
    return {
      // src: './assets/wallhaven-yjl36l.jpg'
      seekData: {
        bookName: "",
        name: "inauthor",
        pageNum: 0,
        pageSize: 10,
      },
      //图书书籍数据
      bookData: {},
      queryParams: {
        pageNum: 0,
        pageSize: 10,
      },
      total: 0,
    };
  },
  mounted() {
    console.log($);
  },
  methods: {
    onSelect() {
      // 调用获取数据请求
      this.queryParams.pageNum = 1;
      this.onPaging();
    },
    async onPaging() {
      this.seekData.pageNum = this.queryParams.pageNum - 1;
      const res = await searchBooks(this.seekData);
      console.log(res);
      this.bookData = res.data;
      this.total = res.data.totalItems;
    },
  },
};
</script>

<style lang="less" scoped>
.concent {
  width: 100%;
}

// /deep/ .el-image__inner {
//   // height: 148%;
// }

/deep/ .el-select .el-input {
  width: 80px;
  border-radius: 4px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.search-box {
  display: flex;
  justify-content: center;
  margin-top: -20px;
}
/deep/ .el-input-group__append {
  background-color: #409eff;
  color: #fff;
  border: 0px solid #fff;
  border-radius: 0 8px 8px 0;
}
/deep/ .el-input-group__prepend {
  border-radius: 8px 0 0 8px;
  border: 0px solid #dcdfe6;
}
/deep/ .el-input-group {
  box-shadow: 1px 3px 19px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
/deep/ .el-input__inner {
  border: 1px solid transparent !important;
}
.button-box {
  width: 100%;
  height: 100%;
  padding: 5px;
}
</style>
