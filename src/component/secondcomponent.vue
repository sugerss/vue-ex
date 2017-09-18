<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <ul>
      <li v-for="article in articles">
        {{article}}
      </li>
    </ul>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="article in list" class="text item">
        {{article.title}}
      </div>
    </el-card>
    <ul>
        <li><router-link to="/second">one</router-link></li>
        <li><router-link to="/second/two">two</router-link></li>
    </ul> 
    <router-view></router-view>
    <ul>
      <li v-for="item in list">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: "微信公众号 jinkey-love",
      articles:[1,2,3],
      list:[]
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
        this.list = response.data.subjects
        //this.list = response.data["subjects"] 

    }, function(response) {
        //这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>