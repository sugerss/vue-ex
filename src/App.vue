<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h1 v-bind:title='message'>{{link}}</h1>
    <ul>
      <li v-for='v in con'>{{v.text}}</li>
    </ul>
    <p>{{msg}}</p>
    <button v-on:click='reverse'>reverse</button>
    <button v-on:click='alert'>alert</button>
    <el-button type="primary">主要按钮</el-button>
    <ul>
        <li><router-link to="/first">第一页</router-link></li>
        <li><router-link to="/second">第二页</router-link></li>
    </ul> 
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import onecomponent from './component/onecomponent.vue'
import twocomponent from './component/twocomponent.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      link:'为你唱花香自来',
      message:'页面加载于 ' + new Date(),
      con:[
        {text:'1'},
        {text:'2'},
        {text:'3'}
      ]
    }
  },
  components: { firstcomponent ,secondcomponent},
  methods: {
    reverse () {
      this.msg = this.msg.split('').reverse().join('')
    },
    alert () {
      window.alert()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
