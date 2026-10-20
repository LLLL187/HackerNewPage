<template>
  <div id="top">&nbsp;</div>
  <div class="titleDiv">
  <p class="title">用</p>
  <p class="title_yellow title">异步</p>
  <p class="title" id="Title">展示数据</p>
  </div>
 
  <div class="btnDiv">
    <button v-on:click="R(false);"  v-bind:class="[{'btnColor1':ifShow==false},'btn']" id="btn1" >海外招聘</button>
    <button v-on:click="R(true);" v-bind:class="[{'btnColor2':ifShow==true},'btn']" id="btn2">最新消息</button>
  </div>
  <a href="#top" class="up">↑</a>
  <btn1 v-show="!ifShow"></btn1>
  <btn2 v-show="ifShow"></btn2>

  
</template>

<script setup>
import { ref } from 'vue';
import btn1 from "./btn1.vue"
import btn2 from "./btn2.vue"
let ifShow = ref(false);
function R(x){
  ifShow.value = x
}

</script>

<style scoped >
.show{
  display:none;
}
.titleDiv{
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.title{
  text-align: center;
  font-size: 50px;
  font-weight: bold;
}
.title_yellow{
  color: rgb(117, 108, 38);
}
.btnDiv{
 
  display: flex;
  justify-content: center;
}
.btn{
  width:100px;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
}
.btnColor1{
  background-color: lightgoldenrodyellow;
}
.btnColor2{
  color:white;
  background-color: black;
}
.up{
  text-align: center;
  position:fixed;
  bottom:50px;
  right:100px;
  width: 75px;
  height: 75px;
  background-color: lightblue;
  border:none;
  border-radius: 50%;
  color:white;
  text-decoration: none;
  font-size: 50px;
}
.up:hover{
  background-color: rgb(38, 150, 188);
}
</style>