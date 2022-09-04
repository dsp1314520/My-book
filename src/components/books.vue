<template>
  <!-- 书籍展示组件 -->
  <div class="content" v-if="bookData.volumeInfo">
    <div class="books-list">
      <div class="books-left">
        <el-image
          style="width: 100px; height: 153px; border-radius: 8px"
          :src="
            bookData.volumeInfo.imageLinks
              ? bookData.volumeInfo.imageLinks.smallThumbnail ||
                bookData.volumeInfo.imageLinks.thumbnail
              : 'https://books.google.co.jp/googlebooks/images/no_cover_thumb.gif'
          "
          fit="cover"
        ></el-image>
        <div class="text-books">
          <h3 class="title-h3">{{ bookData.volumeInfo.title }}</h3>
          <div class="text-zz">
            <span v-for="(item, i) in bookData.volumeInfo.authors" :key="i">{{
              item
            }}</span
            >&nbsp;&nbsp;<span
              >({{
                bookData.volumeInfo.publisher
                  ? bookData.volumeInfo.publisher
                  : "出版社不详"
              }})</span
            >&nbsp;&nbsp;&nbsp;
            {{ bookData.volumeInfo.publishedDate }}
          </div>
          <div class="tage-box">
            <el-tag class="tage" type="" effect="plain" size="mini">
              {{ bookData.volumeInfo.printType }}
            </el-tag>
            <el-tag
              class="tage"
              size="mini"
              style="margin: 0 5px"
              type="warning"
              effect="plain"
            >
              page:
              {{
                bookData.volumeInfo.pageCount
                  ? bookData.volumeInfo.pageCount
                  : ""
              }}
            </el-tag>
            <el-tag
              v-for="(item, index) in bookData.volumeInfo.industryIdentifiers"
              :key="index"
              class="tage"
              size="mini"
              type="success"
              effect="plain"
            >
              {{ item.type + ": &nbsp;" + item.identifier }}
            </el-tag>
          </div>
          <!-- 详情 -->
          <div class="synopsis">
            简介:&nbsp;{{
              bookData.volumeInfo.description
                ? bookData.volumeInfo.description
                : "无"
            }}
          </div>
        </div>
      </div>
      <div class="books-right">
        <div class="score-box">
          <el-rate
            v-model="bookData.volumeInfo.averageRating"
            disabled
            :show-score="false"
            text-color="#ff9900"
          >
          </el-rate
          ><span class="score-number">
            ({{
              bookData.volumeInfo.ratingsCount
                ? bookData.volumeInfo.ratingsCount
                : "0"
            }})</span
          >
        </div>
        <el-button
          class="view-details"
          type="primary"
          plain
          size="mini"
          icon="el-icon-reading"
          @click="onDetails(bookData.volumeInfo.infoLink)"
          >查看详情</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBooks",
  props: {
    bookData: {
      type: Object,
    },
  },
  data() {
    return {
      score: 3.7,
      fens: 218,
    };
  },

  mounted() {
    // console.log(this.bookData);
  },

  methods: {
    // 点击查看详情
    onDetails(url) {
      window.open(url);
      // window.location.href = url;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.books-list {
  width: 1000px;
  height: 155px;
  border: 1px solid rgb(198, 190, 190);
  // background-color: aqua;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
}
.books-left {
  display: flex;
}
.text-books {
  margin-left: 15px;
}
.text-zz {
  width: 700px;
  font-size: 13px;
  margin: 5px 0;
  color: rgb(139, 135, 135);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tage {
  font-weight: 700;
  border-radius: 8px;
  margin-right: 5px;
}
.tage-box {
  margin-bottom: 5px;
}
.synopsis {
  width: 400px;
  color: #000;
  font-size: 13px;
  color: rgb(113, 104, 104);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
.score-box {
  display: flex;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}
.score-number {
  font-size: 13px;
  font-weight: 600;
  color: rgb(175, 175, 175);
}
.view-details {
  margin-left: 15px;
}
.title-h3 {
  width: 600px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>